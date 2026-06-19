import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Loader } from "@/components/common/Loader";
import { getLenis } from "@/hooks/useLenis";
import {
  importProjectCaseStudy,
  importBlogArticle,
  prefetchRoutesWhenIdle,
} from "./lazyPages";

const Home = lazy(() => import("@/pages/Home"));
const ProjectCaseStudy = lazy(importProjectCaseStudy);
const BlogArticle = lazy(importBlogArticle);
const NotFound = lazy(() => import("@/pages/NotFound"));

/** Reset scroll position on cross-route navigation (not for hash scrolls). */
function ScrollToTop() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    if (state && (state as { scrollTo?: string }).scrollTo) return;
    // Reset the Lenis instance too — otherwise it keeps the previous page's
    // scroll offset, leaving the new page's top content above the viewport so
    // its scroll-reveal animations never trigger (content stays invisible).
    window.scrollTo(0, 0);
    getLenis()?.scrollTo(0, { immediate: true, force: true });
  }, [pathname, state]);
  return null;
}

export function AppRoutes() {
  const location = useLocation();

  // Warm the case-study and blog-article chunks in the background so those
  // pages open instantly when the user clicks through.
  useEffect(() => prefetchRoutesWhenIdle(), []);

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
}
