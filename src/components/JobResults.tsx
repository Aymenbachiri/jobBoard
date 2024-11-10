import { placeholderJobs } from "@/lib/PlaceholderJobs";
import { JobListItem } from "./JobListItem";
import { type JobFilterValues } from "@/lib/validation";

type JobResultsProps = {
  filterValues: JobFilterValues;
};

export function JobResults({
  filterValues: { q, type, location, remote },
}: JobResultsProps) {
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
        <JobListItem job={job} key={job.id} />
      ))}
      {filteredJobs.length === 0 && (
        <div className="text-muted-foreground text-center">
          No jobs found. try adjusting your search filters.
        </div>
      )}
    </div>
  );
}
