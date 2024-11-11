import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { JobPage } from "./_components/JobPage";

type PageProps = {
  params: {
    slug: string;
  };
};

const getJob = cache(async (slug: string) => {
  const job = await fetch(`/api/jobs/${slug}`).then((res) => res.json());

  if (!job) notFound();

  return job;
});

export async function generateStaticParams() {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    select: { slug: true },
  });

  return jobs.map(({ slug }) => slug);
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const job = await getJob(slug);

  return {
    title: job.title,
  };
}

export default async function page({ params: { slug } }: PageProps) {
  const job = await getJob(slug);

  const { applicationEmail, applicationUrl } = job;

  const applicationLink = applicationEmail
    ? `mailto:${applicationEmail}`
    : applicationUrl;

  if (!applicationLink) {
    console.error("Job has no application link or email");
    notFound();
  }

  return (
    <main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      <JobPage job={job} />
      <aside>
        <button className="w-[90px] rounded-lg border bg-[#0F172A] p-2 text-white disabled:opacity-50">
          <a href={applicationLink} className="w-40 md:w-fit">
            Apply now
          </a>
        </button>
      </aside>
    </main>
  );
}
