import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { DonationProvider } from "@/contexts/DonationContext";
import { Navbar } from "@/components/Navbar";
import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";
import DonatePage from "@/pages/DonatePage";
import OrdersPage from "@/pages/OrdersPage";
import DashboardPage from "@/pages/DashboardPage";
import ProfilePage from "@/pages/ProfilePage";
import MapPage from "@/pages/MapPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const { currentUser } = useAuth();

  if (!currentUser) return <LoginPage />;

  const role = currentUser.role;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {role === "donor" && <Route path="/donate" element={<DonatePage />} />}
        {role !== "admin" && <Route path="/orders" element={<OrdersPage />} />}
        {(role === "ngo" || role === "volunteer" || role === "admin") && (
          <Route path="/dashboard" element={<DashboardPage />} />
        )}
        <Route path="/map" element={<MapPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <AuthProvider>
        <DonationProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </DonationProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
