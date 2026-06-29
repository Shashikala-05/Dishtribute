import { useAuth } from "@/contexts/AuthContext";
import { useDonations } from "@/contexts/DonationContext";
import { User, Mail, Phone, MapPin, Shield } from "lucide-react";
import { motion } from "framer-motion";

const roleLabels = { donor: "Donor", volunteer: "Volunteer", ngo: "NGO / Orphanage", admin: "Admin" };

const ProfilePage = () => {
  const { currentUser } = useAuth();
  const { donations } = useDonations();
  const user = currentUser!;

  const myStats = {
    donor: donations.filter((d) => d.donorId === user.id).length,
    delivered: donations.filter((d) => d.donorId === user.id && d.status === "Delivered").length,
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-xl shadow-lg border border-border p-6">
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mb-3">
            <User className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="font-display font-bold text-xl text-foreground">{user.name}</h1>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mt-1">
            <Shield className="w-3.5 h-3.5" />
            {roleLabels[user.role]}
          </span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-foreground">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <span>{user.email}</span>
          </div>
          {user.phone && (
            <div className="flex items-center gap-3 text-foreground">
              <Phone className="w-5 h-5 text-muted-foreground" />
              <span>{user.phone}</span>
            </div>
          )}
          {user.address && (
            <div className="flex items-center gap-3 text-foreground">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <span>{user.address}</span>
            </div>
          )}
        </div>

        {user.role === "donor" && (
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-foreground">{myStats.donor}</p>
              <p className="text-xs text-muted-foreground font-semibold">Total Donated</p>
            </div>
            <div className="bg-success/10 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-success">{myStats.delivered}</p>
              <p className="text-xs text-muted-foreground font-semibold">Delivered</p>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProfilePage;
