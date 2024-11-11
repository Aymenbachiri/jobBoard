import { MyImage } from "@/components/common/MyImage";
import { MyLink } from "@/components/common/MyLink";
import { BanknoteIcon } from "@/lib/icons/BanknoteIcon";
import { BriefcaseIcon } from "@/lib/icons/BriefcaseIcon";
import { GlobeIcon } from "@/lib/icons/GlobeIcon";
import { MapPinIcon } from "@/lib/icons/MapPinIcon";
import type { Job } from "@/lib/PlaceholderJobs";
import { formatMoney } from "@/lib/utils";

type JobPageProps = {
  job: Job;
};

export function JobPage({
  job: {
    title,
    description,
    companyName,
    applicationUrl,
    type,
    locationType,
    location,
    salary,
    companyLogoUrl,
  },
}: JobPageProps) {
  return (
    <section className="w-full grow space-y-5">
      <div className="flex items-center gap-3">
        {companyLogoUrl && (
          <MyImage
            src={companyLogoUrl}
            alt="Company logo"
            width={100}
            height={100}
            className="rounded-xl"
          />
        )}
        <div>
          <div>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="font-semibold">
              {applicationUrl ? (
                <MyLink
                  href={new URL(applicationUrl).origin}
                  className="text-green-500 hover:underline"
                >
                  {companyName}
                </MyLink>
              ) : (
                <span>{companyName}</span>
              )}
            </p>
          </div>
          <div className="text-muted-foreground">
            <p className="flex items-center gap-1.5">
              <BriefcaseIcon />
              {type}
            </p>
            <p className="flex items-center gap-1.5">
              <MapPinIcon />
              {locationType}
            </p>
            <p className="flex items-center gap-1.5">
              <GlobeIcon />
              {location || "Worldwide"}
            </p>
            <p className="flex items-center gap-1.5">
              <BanknoteIcon />
              {formatMoney(salary)}
            </p>
          </div>
        </div>
      </div>
      <div>{description}</div>
    </section>
  );
}
