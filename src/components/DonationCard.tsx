import { Donation } from "@/contexts/DonationContext";
import { StatusBadge } from "./StatusBadge";
import { MapPin, Clock, User, Utensils } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  donation: Donation;
  actions?: React.ReactNode;
}

export const DonationCard = ({ donation, actions }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={donation.image}
          alt={donation.foodType}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <StatusBadge status={donation.status} />
        </div>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-display font-bold text-lg text-card-foreground">{donation.foodType}</h3>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Utensils className="w-3.5 h-3.5" />
          <span>{donation.quantity}</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="w-3.5 h-3.5" />
          <span>{donation.location}</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Clock className="w-3.5 h-3.5" />
          <span>{donation.time}</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <User className="w-3.5 h-3.5" />
          <span>By {donation.donorName}</span>
        </div>
        {donation.ngoName && (
          <p className="text-xs text-info">NGO: {donation.ngoName}</p>
        )}
        {donation.volunteerName && (
          <p className="text-xs text-warning">Volunteer: {donation.volunteerName}</p>
        )}
        {actions && <div className="pt-2 flex gap-2 flex-wrap">{actions}</div>}
      </div>
    </motion.div>
  );
};
