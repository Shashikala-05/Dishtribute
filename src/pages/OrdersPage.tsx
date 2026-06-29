import { useAuth } from "@/contexts/AuthContext";
import { useDonations } from "@/contexts/DonationContext";
import { DonationCard } from "@/components/DonationCard";
import { Button } from "@/components/ui/button";

const OrdersPage = () => {
  const { currentUser } = useAuth();
  const { donations, pickupDonation, deliverDonation } = useDonations();
  const role = currentUser!.role;

  let filtered = donations;
  if (role === "donor") {
    filtered = donations.filter((d) => d.donorId === currentUser!.id);
  } else if (role === "ngo") {
    filtered = donations.filter((d) => d.acceptedByNGO === currentUser!.id);
  } else if (role === "volunteer") {
    filtered = donations.filter((d) => d.pickedByVolunteer === currentUser!.id || (d.status === "Accepted"));
  }

  const getActions = (d: typeof donations[0]) => {
    if (role === "volunteer" && d.status === "Accepted" && !d.pickedByVolunteer) {
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
      <h1 className="font-display font-bold text-2xl text-gradient mb-6">
        {role === "donor" ? "My Donations" : role === "ngo" ? "Accepted Donations" : "My Deliveries"}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((d) => (
          <DonationCard key={d.id} donation={d} actions={getActions(d)} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-16">No orders yet.</p>
      )}
    </div>
  );
};

export default OrdersPage;
