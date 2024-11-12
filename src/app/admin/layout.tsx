import { AuthProvider } from "./_lib/AuthProvider";
import { AdminNavbar } from "./jobs/[slug]/_components/AdminNavbar";

export const metadata = {
  title: "Admin",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <AdminNavbar />
      {children}
    </AuthProvider>
  );
}
