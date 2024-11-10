import { ChevronDownIcon } from "@/lib/icons/ChevronDownIcon";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export default forwardRef<
  HTMLSelectElement,
  React.HTMLProps<HTMLSelectElement>
>(function Select({ className, ...props }, ref) {
  return (
    <div className="relative">
      <select
        className={cn(
          "border-input focus:ring-ring h-10 w-full appearance-none truncate rounded-md border bg-background py-2 pl-3 pr-8 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
      <ChevronDownIcon />
    </div>
  );
});
