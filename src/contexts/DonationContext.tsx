import React, { createContext, useContext, useState, useCallback } from "react";

export type DonationStatus = "Pending" | "Accepted" | "Picked" | "Delivered";

export interface Donation {
  id: string;
  foodType: string;
  quantity: string;
  location: string;
  time: string;
  image: string;
  donorId: string;
  donorName: string;
  status: DonationStatus;
  acceptedByNGO?: string;
  ngoName?: string;
  pickedByVolunteer?: string;
  volunteerName?: string;
  createdAt: string;
}

interface DonationContextType {
  donations: Donation[];
  addDonation: (d: Omit<Donation, "id" | "status" | "createdAt">) => void;
  acceptDonation: (id: string, ngoId: string, ngoName: string) => void;
  pickupDonation: (id: string, volunteerId: string, volunteerName: string) => void;
  deliverDonation: (id: string) => void;
}

const DonationContext = createContext<DonationContextType | null>(null);

const sampleImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
];

const defaultDonations: Donation[] = [
  {
    id: "don-1", foodType: "Biryani", quantity: "20 plates", location: "Koramangala, Bangalore",
    time: "12:00 PM", image: sampleImages[0], donorId: "donor-1", donorName: "Raj Sharma",
    status: "Pending", createdAt: new Date().toISOString(),
  },
  {
    id: "don-2", foodType: "Roti & Sabzi", quantity: "50 servings", location: "MG Road, Bangalore",
    time: "1:00 PM", image: sampleImages[1], donorId: "donor-1", donorName: "Raj Sharma",
    status: "Accepted", acceptedByNGO: "ngo-1", ngoName: "Hope Orphanage", createdAt: new Date().toISOString(),
  },
  {
    id: "don-3", foodType: "Rice & Dal", quantity: "30 plates", location: "HSR Layout, Bangalore",
    time: "11:30 AM", image: sampleImages[2], donorId: "donor-1", donorName: "Raj Sharma",
    status: "Picked", acceptedByNGO: "ngo-1", ngoName: "Hope Orphanage",
    pickedByVolunteer: "vol-1", volunteerName: "Priya Volunteer", createdAt: new Date().toISOString(),
  },
  {
    id: "don-4", foodType: "Fruit Salad", quantity: "15 bowls", location: "Whitefield, Bangalore",
    time: "10:00 AM", image: sampleImages[3], donorId: "donor-1", donorName: "Raj Sharma",
    status: "Delivered", acceptedByNGO: "ngo-1", ngoName: "Hope Orphanage",
    pickedByVolunteer: "vol-1", volunteerName: "Priya Volunteer", createdAt: new Date().toISOString(),
  },
];

export const DonationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [donations, setDonations] = useState<Donation[]>(defaultDonations);

  const addDonation = useCallback((d: Omit<Donation, "id" | "status" | "createdAt">) => {
    setDonations((prev) => [
      { ...d, id: `don-${Date.now()}`, status: "Pending", createdAt: new Date().toISOString() },
      ...prev,
    ]);
  }, []);

  const acceptDonation = useCallback((id: string, ngoId: string, ngoName: string) => {
    setDonations((prev) =>
      prev.map((d) => d.id === id ? { ...d, status: "Accepted" as const, acceptedByNGO: ngoId, ngoName } : d)
    );
  }, []);

  const pickupDonation = useCallback((id: string, volunteerId: string, volunteerName: string) => {
    setDonations((prev) =>
      prev.map((d) => d.id === id ? { ...d, status: "Picked" as const, pickedByVolunteer: volunteerId, volunteerName } : d)
    );
  }, []);

  const deliverDonation = useCallback((id: string) => {
    setDonations((prev) =>
      prev.map((d) => d.id === id ? { ...d, status: "Delivered" as const } : d)
    );
  }, []);

  return (
    <DonationContext.Provider value={{ donations, addDonation, acceptDonation, pickupDonation, deliverDonation }}>
      {children}
    </DonationContext.Provider>
  );
};

export const useDonations = () => {
  const ctx = useContext(DonationContext);
  if (!ctx) throw new Error("useDonations must be used within DonationProvider");
  return ctx;
};
