import { placeholderJobs } from "@/lib/PlaceholderJobs";
import { JobListItem } from "./JobListItem";
import { type JobFilterValues } from "@/lib/validation";
import { MyLink } from "./common/MyLink";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "@/lib/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/lib/icons/ArrowRightIcon";

type JobResultsProps = {
  filterValues: JobFilterValues;
  page?: number;
};

export function JobResults({ filterValues, page = 1 }: JobResultsProps) {
  const { q, type, location, remote } = filterValues;

  const jobsPerPage = 6;
  const skip = (page - 1) * jobsPerPage;

  const searchTerms = q?.toLowerCase().split(" ").filter(Boolean) || [];

  const filteredJobs = placeholderJobs.filter((job) => {
    // Search filter
    if (searchTerms.length > 0) {
      const searchableText = `
        ${job.title} 
        ${job.companyName} 
        ${job.type} 
        ${job.locationType} 
        ${job.location}
      `.toLowerCase();

      const matchesSearch = searchTerms.every((term) =>
        searchableText.includes(term),
      );

      if (!matchesSearch) return false;
    }

    // Type filter
    if (type && job.type !== type) return false;

    // Location filter
    if (location && job.location !== location) return false;

    // Remote filter
    if (remote && job.locationType !== "Remote") return false;

    return true;
  });

  return (
    <div className="grow space-y-4">
      {filteredJobs.map((job) => (
        <MyLink href={`/jobs/${job.slug}`} key={job.id} className="block">
          <JobListItem job={job} />
        </MyLink>
      ))}
      {filteredJobs.length === 0 && (
        <div className="text-muted-foreground text-center">
          No jobs found. try adjusting your search filters.
        </div>
      )}
      {/* {jobs.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(totalResults / jobsPerPage)}
          filterValues={filterValues}
        />
      )} */}
    </div>
  );
}

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  filterValues: JobFilterValues;
};

function Pagination({
  currentPage,
  totalPages,
  filterValues: { q, type, location, remote },
}: PaginationProps) {
  function generatePageLink(page: number) {
    const searchParams = new URLSearchParams({
      ...(q && { q }),
      ...(type && { type }),
      ...(location && { location }),
      ...(remote && { remote: "true" }),
      page: page.toString(),
    });

    return `/?${searchParams.toString()}`;
  }

  return (
    <div className="flex justify-between">
      <MyLink
        href={generatePageLink(currentPage - 1)}
        className={cn(
          "flex items-center gap-2 font-semibold",
          currentPage <= 1 && "invisible",
        )}
      >
        <ArrowLeftIcon />
        Previous page
      </MyLink>
      <span className="font-semibold">
        Page {currentPage} of {totalPages}
      </span>
      <MyLink
        href={generatePageLink(currentPage + 1)}
        className={cn(
          "flex items-center gap-2 font-semibold",
          currentPage >= totalPages && "invisible",
        )}
      >
        Next page
        <ArrowRightIcon />
      </MyLink>
    </div>
  );
}
