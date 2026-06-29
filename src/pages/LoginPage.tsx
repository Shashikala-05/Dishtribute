import { useState } from "react";
import { useAuth, UserRole } from "@/contexts/AuthContext";
import { Eye, EyeOff } from "lucide-react";
import logo from "@/assets/logo.png";
import { motion } from "framer-motion";

const LoginPage = () => {
  const { login, signup } = useAuth();
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "", email: "", password: "", role: "donor" as UserRole, phone: "", address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (isSignup) {
      if (!form.name || !form.email || !form.password) { setError("Fill all required fields"); return; }
      const ok = signup({ name: form.name, email: form.email, password: form.password, role: form.role, phone: form.phone, address: form.address });
      if (!ok) setError("Email already exists");
    } else {
      const ok = login(form.email, form.password);
      if (!ok) setError("Invalid email or password");
    }
  };

  const set = (key: string, val: string) => setForm((p) => ({ ...p, [key]: val }));

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-card rounded-xl shadow-xl border border-border p-8"
      >
        <div className="text-center mb-6">
          <img src={logo} alt="Dishtribute" className="w-20 h-20 mx-auto mb-2 object-contain" />
          <p className="text-muted-foreground text-sm mt-1">Turning Excess into Access</p>
        </div>

        <h2 className="font-display font-bold text-xl text-center mb-4">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h2>

        {error && <p className="text-destructive text-sm text-center mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-3">
          {isSignup && (
            <>
              <input
                placeholder="Full Name *"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none"
              />
              <select
                value={form.role}
                onChange={(e) => set("role", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
              >
                <option value="donor">Donor</option>
                <option value="volunteer">Volunteer</option>
                <option value="ngo">NGO / Orphanage</option>
                <option value="admin">Admin</option>
              </select>
            </>
          )}
          <input
            type="email"
            placeholder="Email *"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password *"
              value={form.password}
              onChange={(e) => set("password", e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none pr-10"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {isSignup && (
            <>
              <input placeholder="Phone" value={form.phone} onChange={(e) => set("phone", e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none" />
              <input placeholder="Address" value={form.address} onChange={(e) => set("address", e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none" />
            </>
          )}
          <button type="submit" className="w-full gradient-primary text-primary-foreground font-bold py-2.5 rounded-lg hover:opacity-90 transition-opacity">
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-4">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button onClick={() => { setIsSignup(!isSignup); setError(""); }} className="text-primary font-semibold hover:underline">
            {isSignup ? "Log In" : "Sign Up"}
          </button>
        </p>

        {!isSignup && (
          <div className="mt-4 p-3 bg-muted rounded-lg text-xs text-muted-foreground space-y-1">
            <p className="font-semibold">Demo Accounts:</p>
            <p>Donor: raj@example.com / pass123</p>
            <p>NGO: hope@ngo.com / pass123</p>
            <p>Volunteer: priya@example.com / pass123</p>
            <p>Admin: admin@foodshare.com / admin123</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default LoginPage;
