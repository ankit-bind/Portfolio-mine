import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
} from "@tanstack/react-router";

import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NotFoundIllustration } from "@/components/illustrations/Illustrations";
import { ZigzagDivider } from "@/components/decorative/Decorations";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-background px-4 py-16">
      <div className="mx-auto max-w-3xl rounded-[32px] bg-surface p-10 text-center sm:p-16">
        <div className="mx-auto max-w-sm">
          <NotFoundIllustration />
        </div>
        <h1 className="mt-8 font-display text-5xl uppercase tracking-[0.04em] text-ink sm:text-6xl">
          Page not found
        </h1>
        <div className="mt-4 flex justify-center text-ink"><ZigzagDivider /></div>
        <p className="mt-4 text-ink/70">The page you're looking for has wandered off the chart.</p>
        <div className="mt-8">
          <Link to="/" className="pill-btn">Go home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md rounded-[32px] bg-surface p-10 text-center">
        <h1 className="font-display text-3xl uppercase tracking-[0.04em] text-ink">Something broke</h1>
        <p className="mt-3 text-sm text-ink/70">Try again or head home.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="pill-btn-filled">Try again</button>
          <a href="/" className="pill-btn">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const showFooter = pathname === "/contact";

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="flex min-h-screen flex-col bg-background">
          <Navbar />
          <main className="flex-1 pt-6">
            <Outlet />
          </main>
          {showFooter && <Footer />}
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
