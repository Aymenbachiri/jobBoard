"use client";

import { LoaderIcon } from "@/lib/icons/LoaderIcon";
import { useFormStatus } from "react-dom";

export function FormSubmitButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      type="submit"
      disabled={pending}
      className="w-full rounded-lg border bg-[#0F172A] p-2 text-white disabled:opacity-50"
    >
      <span className="flex items-center justify-center gap-1">
        {pending && <LoaderIcon />}
        {props.children}
      </span>
    </button>
  );
}
