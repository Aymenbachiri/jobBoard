import { LoaderIcon } from "@/lib/icons/LoaderIcon";

export function NewJobSumbitFormButton({ loading }: { loading: boolean }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-[90px] rounded-lg border bg-[#0F172A] p-2 text-white disabled:opacity-50"
    >
      <span className="flex items-center justify-center gap-1">
        {loading && <LoaderIcon />}
        Submit
      </span>
    </button>
  );
}
