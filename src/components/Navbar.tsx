import { useAuth } from "@/contexts/AuthContext";
import { Link, useLocation } from "react-router-dom";
import { LogOut, Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dark, toggle } = useTheme();

  if (!currentUser) return null;

  const role = currentUser.role;

  const links: { to: string; label: string }[] = [
    { to: "/", label: "Home" },
    ...(role === "donor" ? [{ to: "/donate", label: "Donate Food" }] : []),
    ...(role !== "admin" ? [{ to: "/orders", label: "Orders" }] : []),
    ...((role === "ngo" || role === "volunteer" || role === "admin") ? [{ to: "/dashboard", label: "Dashboard" }] : []),
    { to: "/map", label: "Live Map" },
    { to: "/profile", label: "Profile" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Dishtribute" className="w-9 h-9 object-contain" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive(l.to)
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="ml-1 p-2 rounded-md text-muted-foreground hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={logout}
            className="ml-1 flex items-center gap-1 px-3 py-2 rounded-md text-sm font-semibold text-muted-foreground hover:bg-muted transition-colors"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive(l.to) ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="w-full text-left px-3 py-2 rounded-md text-sm font-semibold text-muted-foreground hover:bg-muted flex items-center gap-2"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
          <button
            onClick={() => { logout(); setMobileOpen(false); }}
            className="w-full text-left px-3 py-2 rounded-md text-sm font-semibold text-muted-foreground hover:bg-muted"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};
