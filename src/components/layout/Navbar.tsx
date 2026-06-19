import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { NAV_LINKS, SECTION_IDS, SITE } from "@/constants/site";
import { scrollToId } from "@/hooks/useLenis";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy (home only)
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    if (isHome) {
      scrollToId(href);
    } else {
      navigate("/", { state: { scrollTo: href } });
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <nav className="container-px">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300",
            scrolled ? "glass shadow-card" : "bg-transparent"
          )}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={() => isHome && scrollToId("#top")}
            className="group flex items-center gap-2 pl-2 font-display text-lg font-bold"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm text-primary-foreground shadow-glow-blue">
              F
            </span>
            <span className="hidden sm:inline">
              Faizan<span className="text-gradient">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = isHome && active === id;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-muted"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex"
            >
              <a href={SITE.resumeUrl} download={SITE.resumeDownloadName}>
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="container-px lg:hidden"
          >
            <div className="mt-2 glass rounded-3xl p-4 shadow-card">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNav(link.href)}
                      className="w-full rounded-xl px-4 py-3 text-left text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-3 w-full">
                <a href={SITE.resumeUrl} download={SITE.resumeDownloadName}>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
