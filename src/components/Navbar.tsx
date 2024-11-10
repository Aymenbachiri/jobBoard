import { MyLink } from "./common/MyLink";

export function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <MyLink href="/" className="flex items-center gap-3">
          {/* <MyImage src={logo} width={40} height={40} alt="Job Board logo" /> */}
          Logo
          <span className="text-xl font-bold tracking-tight">Job Board</span>
        </MyLink>
        <button className="rounded-lg border bg-[#0F172A] p-2 text-white">
          <MyLink href="/jobs/new">Post a job</MyLink>
        </button>
      </nav>
    </header>
  );
}
