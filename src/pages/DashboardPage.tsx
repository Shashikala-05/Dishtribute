import { useAuth } from "@/contexts/AuthContext";
import { useDonations } from "@/contexts/DonationContext";
import { DonationCard } from "@/components/DonationCard";
import { Button } from "@/components/ui/button";
import { Package, CheckCircle, Truck, Clock } from "lucide-react";

const DashboardPage = () => {
  const { currentUser } = useAuth();
  const { donations, acceptDonation, pickupDonation, deliverDonation } = useDonations();
  const role = currentUser!.role;

  const stats = {
    total: donations.length,
    pending: donations.filter((d) => d.status === "Pending").length,
    accepted: donations.filter((d) => d.status === "Accepted").length,
    picked: donations.filter((d) => d.status === "Picked").length,
    delivered: donations.filter((d) => d.status === "Delivered").length,
  };

  const statCards = [
    { label: "Total", value: stats.total, icon: Package, color: "bg-primary text-primary-foreground" },
    { label: "Pending", value: stats.pending, icon: Clock, color: "bg-muted text-muted-foreground" },
    { label: "Accepted", value: stats.accepted, icon: CheckCircle, color: "bg-info text-info-foreground" },
    { label: "In Transit", value: stats.picked, icon: Truck, color: "bg-warning text-warning-foreground" },
    { label: "Delivered", value: stats.delivered, icon: CheckCircle, color: "bg-success text-success-foreground" },
  ];

  let list = donations;
  if (role === "ngo") list = donations.filter((d) => d.status === "Pending" || d.acceptedByNGO === currentUser!.id);
  if (role === "volunteer") list = donations.filter((d) => d.status === "Accepted" || d.pickedByVolunteer === currentUser!.id);

  const getActions = (d: typeof donations[0]) => {
    if (role === "ngo" && d.status === "Pending") {
      return (
        <Button size="sm" className="gradient-primary text-primary-foreground" onClick={() => acceptDonation(d.id, currentUser!.id, currentUser!.name)}>
          Accept
        </Button>
      );
    }
    if (role === "volunteer" && d.status === "Accepted" && !d.pickedByVolunteer) {
      return (
        <Button size="sm" className="bg-warning text-warning-foreground hover:opacity-90" onClick={() => pickupDonation(d.id, currentUser!.id, currentUser!.name)}>
          Pickup
        </Button>
      );
    }
    if (role === "volunteer" && d.status === "Picked" && d.pickedByVolunteer === currentUser!.id) {
      return (
        <Button size="sm" className="bg-success text-success-foreground hover:opacity-90" onClick={() => deliverDonation(d.id)}>
          Delivered
        </Button>
      );
    }
    return null;
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="font-display font-bold text-2xl text-gradient mb-6">Dashboard</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {statCards.map((s) => (
          <div key={s.label} className={`rounded-xl p-4 ${s.color} flex flex-col items-center`}>
            <s.icon className="w-6 h-6 mb-1" />
            <span className="text-2xl font-bold">{s.value}</span>
            <span className="text-xs font-semibold opacity-80">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((d) => (
          <DonationCard key={d.id} donation={d} actions={getActions(d)} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
