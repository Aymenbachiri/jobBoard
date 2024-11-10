"use client";

import { jobTypes, locationTypes } from "@/lib/types";
import LocationInput from "./LocationInput";
import { NewJobSumbitFormButton } from "./NewJobSumbitFormButton";
import { useState } from "react";

export function NewJobForm() {
  const [loading, setLoading] = useState<boolean>(false);
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
      <section className="flex flex-col gap-2">
        <label
          htmlFor="applicationEmail"
          className="text-muted-foreground block text-sm font-medium"
        >
          How to apply
        </label>
        <div className="flex items-center gap-2">
          <input
            type="email"
            id="applicationEmail"
            name="applicationEmail"
            placeholder="Email"
            className="border-input block w-full rounded-lg border p-2"
          />
          <span>or</span>
          <input
            type="url"
            id="url"
            name="url"
            placeholder="website"
            className="border-input block w-full rounded-lg border p-2"
          />
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <label
          htmlFor="description"
          className="text-muted-foreground block text-sm font-medium"
        >
          Description
        </label>
        <textarea
          name="description"
          id="description"
          rows={10}
          cols={50}
          placeholder="e.g. We are looking for a full-time Next.js developer to join our team."
          className="border-input block w-full resize-none rounded-lg border p-2"
        />
      </section>
      <section className="flex flex-col gap-2">
        <label
          htmlFor="salary"
          className="text-muted-foreground block text-sm font-medium"
        >
          Salary
        </label>
        <input
          type="number"
          id="salary"
          name="salary"
          placeholder="e.g. 100,000"
          className="border-input block w-full rounded-lg border p-2"
        />
      </section>
      <NewJobSumbitFormButton loading={loading} />
    </form>
  );
}
