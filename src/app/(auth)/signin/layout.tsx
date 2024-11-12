import { AuthProvider } from "@/app/admin/_lib/AuthProvider";

export default function layout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
