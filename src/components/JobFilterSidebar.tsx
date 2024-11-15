import { placeholderJobs } from "@/lib/PlaceholderJobs";
import Select from "./Select";
import { jobFilterSchema, type JobFilterValues } from "@/lib/validation";
import { redirect } from "next/navigation";
import { FormSubmitButton } from "./FormSubmitButton";

type JobFilterSidebarProps = {
  defaultValues: JobFilterValues;
};

async function filterJobs(formData: FormData) {
  "use server";

  const values = Object.fromEntries(formData.entries());

  const parsedValues = jobFilterSchema.parse(values);

  const { q, type, location, remote } = parsedValues;

  const searchParams = new URLSearchParams({
    ...(q && { q: q.trim() }),
    ...(type && { type }),
    ...(location && { location }),
    ...(remote && { remote: "true" }),
  });

  redirect(`/?${searchParams.toString()}`);
}

export async function JobFilterSidebar({
  defaultValues,
}: JobFilterSidebarProps) {
  // Use Set to get distinct locations
  const distinctLocations = Array.from(
    new Set(placeholderJobs.map((job) => job.location)),
  );
  const jobTypes = Array.from(new Set(placeholderJobs.map((job) => job.type)));

  return (
    <aside className="sticky top-0 h-fit rounded-lg border bg-background p-4 md:w-[260px]">
      <form action={filterJobs} key={JSON.stringify(defaultValues)}>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="q">Search</label>
            <input
              type="text"
              id="q"
              name="q"
              placeholder="Title, company, etc."
              defaultValue={defaultValues.q}
              className="border-input w-full rounded-lg border p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="type">Type</label>
            <Select
              id="type"
              name="type"
              defaultValue={defaultValues.type || ""}
            >
              <option value="">All types</option>
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="location">Location</label>
            <Select
              id="location"
              name="location"
              defaultValue={defaultValues.location || ""}
            >
              <option value="">All locations</option>
              {distinctLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remote"
              name="remote"
              defaultChecked={defaultValues.remote}
              className="scale-125 accent-black"
            />
            <label htmlFor="remote">Remote Jobs</label>
          </div>
          <FormSubmitButton>Filter Jobs</FormSubmitButton>
        </div>
      </form>
    </aside>
  );
}
