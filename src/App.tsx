import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ThemeProvider } from "@/hooks/useTheme";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CursorGlow } from "@/components/common/CursorGlow";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { AppRoutes } from "@/routes/AppRoutes";

export default function App() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ScrollProgress />
        <CursorGlow />
        <AppRoutes />
        <Toaster
          position="bottom-right"
          theme="system"
          toastOptions={{
            classNames: {
              toast:
                "glass !rounded-xl !border-border !text-foreground !font-sans",
            },
          }}
        />
        <Analytics />
        <SpeedInsights />
      </SmoothScroll>
    </ThemeProvider>
  );
}
