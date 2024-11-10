import { MyLink } from "./common/MyLink";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl space-y-5 px-3 py-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Flow Jobs</h3>
            <p className="text-muted-foreground text-sm">
              Connecting talents with opportunities
            </p>
          </div>
          <div className="text-muted-foreground flex flex-wrap gap-5 text-sm">
            <MyLink href="/about" className="hover:underline">
              About Us
            </MyLink>
            <MyLink href="/contact" className="hover:underline">
              Contact
            </MyLink>
            <MyLink href="/terms" className="hover:underline">
              Terms of Service
            </MyLink>
            <MyLink href="/privacy" className="hover:underline">
              Privacy Policy
            </MyLink>
          </div>
        </div>
        <div className="text-muted-foreground text-center text-sm">
          © {new Date().getFullYear()} Flow Jobs, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
