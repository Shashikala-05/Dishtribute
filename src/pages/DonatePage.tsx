import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useDonations } from "@/contexts/DonationContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const sampleImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
];

const DonatePage = () => {
  const { currentUser } = useAuth();
  const { addDonation } = useDonations();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [form, setForm] = useState({ foodType: "", quantity: "", location: "", time: "", image: "" });
  const [preview, setPreview] = useState("");

  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setPreview(result);
        set("image", result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.foodType || !form.quantity || !form.location || !form.time) {
      toast({ title: "Error", description: "Please fill all fields", variant: "destructive" });
      return;
    }
    const image = form.image || sampleImages[Math.floor(Math.random() * sampleImages.length)];
    addDonation({
      foodType: form.foodType, quantity: form.quantity, location: form.location,
      time: form.time, image, donorId: currentUser!.id, donorName: currentUser!.name,
    });
    toast({ title: "Success!", description: "Your food donation has been listed." });
    navigate("/orders");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-xl shadow-lg border border-border p-6">
        <h1 className="font-display font-bold text-2xl text-gradient mb-6">Donate Food</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Food Image</label>
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-input rounded-xl cursor-pointer hover:border-primary/50 transition-colors overflow-hidden">
              {preview ? (
                <img src={preview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center text-muted-foreground">
                  <Camera className="w-8 h-8 mx-auto mb-1" />
                  <span className="text-sm">Click to upload image</span>
                </div>
              )}
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Food Type *</label>
            <input placeholder="e.g. Biryani, Roti & Sabzi" value={form.foodType} onChange={(e) => set("foodType", e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Quantity *</label>
            <input placeholder="e.g. 20 plates" value={form.quantity} onChange={(e) => set("quantity", e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">
              <MapPin className="w-4 h-4 inline mr-1" />Location *
            </label>
            <input placeholder="e.g. Koramangala, Bangalore" value={form.location} onChange={(e) => set("location", e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Available Time *</label>
            <input placeholder="e.g. 12:00 PM - 2:00 PM" value={form.time} onChange={(e) => set("time", e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring outline-none" />
          </div>
          <Button type="submit" className="w-full gradient-primary text-primary-foreground font-bold py-3">
            Submit Donation
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default DonatePage;
