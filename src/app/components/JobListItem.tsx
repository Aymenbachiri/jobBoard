import { BriefcaseIcon } from "@/lib/icons/BriefcaseIcon";
import { MyImage } from "./common/MyImage";
import { MapPinIcon } from "@/lib/icons/MapPinIcon";
import { GlobeIcon } from "@/lib/icons/GlobeIcon";
import { formatMoney, relativeDate } from "@/lib/utils";
import { BanknoteIcon } from "@/lib/icons/BanknoteIcon";
import { ClockIcon } from "@/lib/icons/ClockIcon";
import { Badge } from "./Badge";
import { type Job } from "@/lib/PlaceholderJobs";

type JobListItemProps = {
  job: Job;
};

export function JobListItem({
  job: {
    title,
    companyName,
    type,
    locationType,
    location,
    salary,
    //companyLogoUrl,
    createdAt,
  },
}: JobListItemProps) {
  return (
    <article className="hover:bg-muted/60 flex gap-3 rounded-lg border p-5">
      <MyImage
        src={"/assets/images/company-logo-placeholder.webp"}
        alt={`${companyName} logo`}
        width={100}
        height={100}
        className="self-center rounded-lg"
      />
      <div className="flex-grow space-y-3">
        <div>
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-muted-foreground">{companyName}</p>
        </div>
        <div className="text-muted-foreground">
          <p className="flex items-center gap-1.5 sm:hidden">
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
          <p className="flex items-center gap-1.5 sm:hidden">
            <ClockIcon />
            {relativeDate(createdAt as Date)}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 flex-col items-end justify-between sm:flex">
        <Badge>{type}</Badge>
        <span className="text-muted-foreground flex items-center gap-1.5">
          <ClockIcon />
          {relativeDate(createdAt as Date)}
        </span>
      </div>
    </article>
  );
}
