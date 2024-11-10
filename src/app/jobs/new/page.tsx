import type { Metadata } from "next";
import NewJobPage from "../_components/NewJobPage";

export const metadata: Metadata = {
  title: "Post a New Job | Job Board",
};

export default function page() {
  return <NewJobPage />;
}
