import { useAuth } from "@/contexts/AuthContext";
import { useDonations } from "@/contexts/DonationContext";
import { DonationCard } from "@/components/DonationCard";
import { Button } from "@/components/ui/button";
import { Heart, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { currentUser } = useAuth();
  const { donations, acceptDonation, pickupDonation, deliverDonation } = useDonations();
  const [search, setSearch] = useState("");

  const role = currentUser!.role;

  let visibleDonations = donations;
  if (role === "ngo") {
    visibleDonations = donations.filter((d) => d.status === "Pending");
  } else if (role === "volunteer") {
    visibleDonations = donations.filter((d) => d.status === "Accepted");
  }

  if (search) {
    visibleDonations = visibleDonations.filter(
      (d) =>
        d.foodType.toLowerCase().includes(search.toLowerCase()) ||
        d.location.toLowerCase().includes(search.toLowerCase())
    );
  }

  const getActions = (d: typeof donations[0]) => {
    if (role === "ngo" && d.status === "Pending") {
      return (
        <Button size="sm" className="gradient-primary text-primary-foreground" onClick={() => acceptDonation(d.id, currentUser!.id, currentUser!.name)}>
          Accept
        </Button>
      );
    }
    if (role === "volunteer" && d.status === "Accepted") {
      return (
        <Button size="sm" className="bg-warning text-warning-foreground hover:opacity-90" onClick={() => pickupDonation(d.id, currentUser!.id, currentUser!.name)}>
          Accept Pickup
        </Button>
      );
    }
    if (role === "volunteer" && d.status === "Picked" && d.pickedByVolunteer === currentUser!.id) {
      return (
        <Button size="sm" className="bg-success text-success-foreground hover:opacity-90" onClick={() => deliverDonation(d.id)}>
          Mark Delivered
        </Button>
      );
    }
    return null;
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Hero */}
      <div className="gradient-primary rounded-2xl p-8 mb-8 text-center">
        <Heart className="w-12 h-12 mx-auto mb-3 text-primary-foreground" />
        <h1 className="font-display font-bold text-3xl text-primary-foreground mb-2">
          {role === "donor" && "Share Your Extra Food"}
          {role === "ngo" && "Accept Food Donations"}
          {role === "volunteer" && "Help Deliver Food"}
          {role === "admin" && "All Donations Overview"}
        </h1>
        <p className="text-primary-foreground/80">
          {role === "donor" && "Your contribution can feed someone in need today"}
          {role === "ngo" && "Review and accept pending donations"}
          {role === "volunteer" && "Pick up and deliver food to those in need"}
          {role === "admin" && "Monitor all donations across the platform"}
        </p>
        {role === "donor" && (
          <Link to="/donate">
            <Button className="mt-4 bg-card text-primary font-bold hover:bg-card/90">
              Donate Now
            </Button>
          </Link>
        )}
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          placeholder="Search by food type or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visibleDonations.map((d) => (
          <DonationCard key={d.id} donation={d} actions={getActions(d)} />
        ))}
      </div>
      {visibleDonations.length === 0 && (
        <p className="text-center text-muted-foreground py-16">No donations found.</p>
      )}
    </div>
  );
};

export default HomePage;
