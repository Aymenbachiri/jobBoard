"use client";

import { jobTypes, locationTypes } from "@/lib/types";
import LocationInput from "./LocationInput";

export function NewJobForm() {
  const onLocationSelected = (location: string) => {
    console.log(location);
  };
  return (
    <form className="space-y-4">
      <section className="flex flex-col gap-2">
        <label
          htmlFor="title"
          className="text-muted-foreground block text-sm font-medium"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="border-input block w-full rounded-lg border p-2"
          placeholder="e.g Frontend Developer"
          required
        />
      </section>
      <section className="flex flex-col gap-2">
        <label
          htmlFor="type"
          className="text-muted-foreground block text-sm font-medium"
        >
          Job Type
        </label>
        <select
          id="type"
          name="type"
          className="border-input block w-full rounded-lg border p-2"
        >
          <option value="">All types</option>
          {jobTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </section>
      <section className="flex flex-col gap-2">
        <label
          htmlFor="companyName"
          className="text-muted-foreground block text-sm font-medium"
        >
          Company
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          className="border-input block w-full rounded-lg border p-2"
          placeholder="e.g Google"
          required
        />
      </section>
      <section className="flex flex-col gap-2">
        <label
          htmlFor="companyLogo"
          className="text-muted-foreground block text-sm font-medium"
        >
          Company Logo
        </label>
        <input
          type="file"
          accept="image/*"
          id="companyLogo"
          name="companyLogo"
          className="border-input block w-full rounded-lg border p-2"
        />
      </section>
      <section>
        <label
          htmlFor="Location"
          className="text-muted-foreground block text-sm font-medium"
        >
          Location
        </label>
        <select
          id="location"
          name="location"
          className="border-input block w-full rounded-lg border p-2"
        >
          <option value="" hidden>
            Select an option
          </option>
          {locationTypes.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </section>
      <section className="flex flex-col gap-2">
        <label
          htmlFor="Office location"
          className="text-muted-foreground block text-sm font-medium"
        >
          Office location
        </label>
        <LocationInput onLocationSelected={onLocationSelected} />
      </section>
    </form>
  );
}
