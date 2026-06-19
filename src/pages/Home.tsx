import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SEO } from "@/components/common/SEO";
import { PageTransition } from "@/components/common/PageTransition";
import { Layout } from "@/components/layout/Layout";
import { AuroraBackground } from "@/components/common/AuroraBackground";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Contact } from "@/components/sections/Contact";
import { scrollToId } from "@/hooks/useLenis";

export default function Home() {
  const location = useLocation();

  // Honor a requested anchor when arriving from another route.
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (target) {
      const timer = setTimeout(() => scrollToId(target), 400);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <PageTransition>
      <SEO />
      <Layout>
        <div className="relative">
          <AuroraBackground className="-z-20" />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Stats />
          <Services />
          <Testimonials />
          <BlogPreview />
          <Contact />
        </div>
      </Layout>
    </PageTransition>
  );
}
