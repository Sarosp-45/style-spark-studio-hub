
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectsPage from "./pages/Projects";
import GeneratorPage from "./pages/Generator";
import GalleryPage from "./pages/Gallery";
import HistoryPage from "./pages/History";
import UsersPage from "./pages/Users";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/projects"
            element={
              <PageLayout>
                <ProjectsPage />
              </PageLayout>
            }
          />
          <Route
            path="/generator"
            element={
              <PageLayout>
                <GeneratorPage />
              </PageLayout>
            }
          />
          <Route
            path="/gallery"
            element={
              <PageLayout>
                <GalleryPage />
              </PageLayout>
            }
          />
          <Route
            path="/history"
            element={
              <PageLayout>
                <HistoryPage />
              </PageLayout>
            }
          />
          <Route
            path="/users"
            element={
              <PageLayout>
                <UsersPage />
              </PageLayout>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
