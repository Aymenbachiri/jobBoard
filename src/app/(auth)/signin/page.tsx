"use client";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

export default function page() {
  return (
    <main className="flex h-[66vh] flex-col items-center justify-center px-6 py-24 sm:px-8 sm:py-32">
      <LoginLink className="rounded-md bg-[#0F172A] px-4 py-2 text-center text-4xl font-bold tracking-tight text-white duration-300 hover:bg-[#0F172A]/100">
        Sign in
      </LoginLink>
    </main>
  );
}
