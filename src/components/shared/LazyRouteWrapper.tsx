import { ComponentType, lazy, LazyExoticComponent, Suspense } from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { LoadingSpinner } from "./LoadingSpinner";

/**
 * Wrapper for lazy-loaded routes that adds error handling and retry logic
 */
export function createLazyRoute<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>
): LazyExoticComponent<T> {
  return lazy(() =>
    importFn().catch((error) => {
      console.error("Failed to load route:", error);
      
      // Retry once after a short delay
      return new Promise((resolve) => {
        setTimeout(() => {
          importFn()
            .then(resolve)
            .catch((retryError) => {
              console.error("Retry failed:", retryError);
              // Return a fallback component that shows an error
              resolve({
                default: (() => {
                  const Fallback = () => (
                    <div className="min-h-screen flex items-center justify-center bg-background p-4">
                      <div className="max-w-md w-full text-center space-y-4">
                        <h1 className="text-2xl font-bold text-foreground">
                          Failed to load page
                        </h1>
                        <p className="text-muted-foreground">
                          Please refresh the page or try again later.
                        </p>
                        <button
                          onClick={() => window.location.reload()}
                          className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
                        >
                          Refresh Page
                        </button>
                      </div>
                    </div>
                  );
                  return Fallback as T;
                })(),
              });
            });
        }, 1000);
      });
    })
  );
}

/**
 * Wrapper component that provides Suspense and ErrorBoundary for lazy routes
 */
export function LazyRouteWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
    </ErrorBoundary>
  );
}

