import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useDonations } from "@/contexts/DonationContext";

// Fix default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const locationCoords: Record<string, [number, number]> = {
  "Koramangala, Bangalore": [12.9352, 77.6245],
  "MG Road, Bangalore": [12.9716, 77.6070],
  "HSR Layout, Bangalore": [12.9116, 77.6389],
  "Whitefield, Bangalore": [12.9698, 77.7500],
};

const statusColors: Record<string, string> = {
  Pending: "hsl(0 0% 55%)",
  Accepted: "hsl(217 91% 60%)",
  Picked: "hsl(25 95% 53%)",
  Delivered: "hsl(142 71% 45%)",
};

const LocationMap = () => {
  const { donations } = useDonations();

  const markers = donations
    .map((d) => ({
      ...d,
      coords: locationCoords[d.location] || [12.9716 + Math.random() * 0.05, 77.5946 + Math.random() * 0.05] as [number, number],
    }));

  return (
    <div className="rounded-xl overflow-hidden border border-border shadow-lg">
      <MapContainer
        center={[12.9516, 77.6246]}
        zoom={12}
        style={{ height: "400px", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((m) => (
          <Marker key={m.id} position={m.coords}>
            <Popup>
              <div className="text-sm">
                <p className="font-bold">{m.foodType}</p>
                <p>{m.quantity} • {m.location}</p>
                <p style={{ color: statusColors[m.status] }} className="font-semibold">{m.status}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LocationMap;
