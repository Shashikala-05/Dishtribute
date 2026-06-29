import { DonationStatus } from "@/contexts/DonationContext";

const statusConfig: Record<DonationStatus, { bg: string; text: string; label: string }> = {
  Pending: { bg: "bg-muted", text: "text-muted-foreground", label: "Pending" },
  Accepted: { bg: "bg-info", text: "text-info-foreground", label: "Accepted by NGO" },
  Picked: { bg: "bg-warning", text: "text-warning-foreground", label: "Picked Up" },
  Delivered: { bg: "bg-success", text: "text-success-foreground", label: "Delivered" },
};

export const StatusBadge = ({ status }: { status: DonationStatus }) => {
  const config = statusConfig[status];
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  );
};
