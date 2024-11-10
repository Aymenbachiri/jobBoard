import { type JobFilterValues } from "@/lib/validation";
import { JobFilterSidebar } from "@/components/JobFilterSidebar";
import { JobResults } from "@/components/JobResults";

type SearchParams = Promise<{
  q?: string;
  type?: string;
  location?: string;
  remote?: string;
}>;

function getTitle({ q, type, location, remote }: JobFilterValues) {
  const titlePrefix = q
    ? `${q} jobs`
    : type
      ? `${type} developer jobs`
      : remote
        ? "Remote developer jobs"
        : "All developer jobs";

  const titleSuffix = location ? ` in ${location}` : "";

  return `${titlePrefix}${titleSuffix}`;
}

export async function generateMetadata(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const { q, type, location, remote } = searchParams;
  return {
    title: `${getTitle({
      q,
      type,
      location,
      remote: remote === "true",
    })} | Job Board`,
  };
}

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const q = searchParams.q;
  const type = searchParams.type;
  const location = searchParams.location;
  const remote = searchParams.remote;

  const filterValues: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };

  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          {getTitle(filterValues)}
        </h1>
        <p className="text-muted-foreground">Find your dream job.</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilterSidebar defaultValues={filterValues} />
        <JobResults filterValues={filterValues} />
      </section>
    </main>
  );
}
