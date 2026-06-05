import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Linktree from "./pages/Linktree";
import NotFound from "./pages/NotFound";
import Gente from "./pages/produtos/Gente";
import Astreia from "./pages/produtos/Astreia";
import Upgrade from "./pages/produtos/Upgrade";
import GestaoSobreRodas from "./pages/produtos/GestaoSobreRodas";
import Vidai from "./pages/produtos/Vidai";
import Susgeri from "./pages/produtos/Susgeri";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/linketree" element={<Linktree />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/gente" element={<Gente />} />
          <Route path="/astreia" element={<Astreia />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/gestao-sobre-rodas" element={<GestaoSobreRodas />} />
          <Route path="/vidai" element={<Vidai />} />
          <Route path="/susgeri" element={<Susgeri />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
