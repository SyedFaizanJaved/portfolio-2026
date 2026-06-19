/** Full-screen branded loading state shown while a route chunk loads. */
export function Loader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-muted border-t-secondary" />
        <span className="font-display text-sm text-muted-foreground">
          Loading…
        </span>
      </div>
    </div>
  );
}
