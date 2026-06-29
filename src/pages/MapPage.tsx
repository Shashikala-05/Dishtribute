import LocationMap from "@/components/LocationMap";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const MapPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-2 mb-6">
          <MapPin className="w-6 h-6 text-primary" />
          <h1 className="font-display font-bold text-2xl text-gradient">Live Donation Map</h1>
        </div>
        <p className="text-muted-foreground mb-4">Track donation locations and delivery status in real-time.</p>
        <LocationMap />
      </motion.div>
    </div>
  );
};

export default MapPage;
