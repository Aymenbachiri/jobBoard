import { AuthProvider } from "./_lib/AuthProvider";

export const metadata = {
  title: "Admin",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
