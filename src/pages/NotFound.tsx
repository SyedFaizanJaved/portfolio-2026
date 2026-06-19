import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { AuroraBackground } from "@/components/common/AuroraBackground";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" path="/404" />
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <AuroraBackground className="-z-10 opacity-60" />
        <div className="container-px text-center">
          <p className="font-display text-[8rem] font-bold leading-none text-gradient sm:text-[12rem]">
            404
          </p>
          <h1 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
            This page wandered off.
          </h1>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            The link may be broken or the page may have moved. Let's get you back
            on track.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/">
              <Home className="h-4 w-4" />
              Back home
            </Link>
          </Button>
        </div>
      </main>
    </>
  );
}
