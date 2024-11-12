import { MyLink } from "@/components/common/MyLink";
import { useRouter } from "next/router";

export function AdminNavbar() {
  const { user, signOut } = useKinde();
  const router = useRouter();

  return (
    <div className="px-3">
      <div className="m-auto flex h-10 max-w-5xl items-center justify-between gap-2">
        <MyLink href="/admin" className="font-semibold underline">
          Admin Dashboard
        </MyLink>
        <div className="space-x-2">
          <span className="font-semibold">
            {user?.primaryEmailAddress?.emailAddress}
          </span>
          <button
            onClick={async () => {
              await signOut();
              router.push("/");
            }}
            className="underline"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
