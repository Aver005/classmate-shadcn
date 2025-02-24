import { Card } from "@/components/ui/card";
import { CheckCircleIcon, KeyIcon, XCircleIcon } from "lucide-react";

interface RoomStatus
{
    room: string;
    holder: string;
    status: "active" | "available" | "locked";
}

interface RoomStatusCardProps
{
    title: string;
    statuses: RoomStatus[];
}

/**
 * Displays room key status information
 * @param {RoomStatus[]} statuses - Array of room status items
 */
export const RoomStatusCard = ({ title, statuses }: RoomStatusCardProps) => (
    <Card className="bg-[#1E1E1E] rounded-3xl p-6">
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <div className="space-y-3">
                {statuses.map((status, index) => (
                    <RoomStatusItem key={index} {...status} />
                ))}
            </div>
        </div>
    </Card>
);

const RoomStatusItem = ({ room, holder, status }: RoomStatus) =>
{
    const StatusIcon = {
        active: CheckCircleIcon,
        available: KeyIcon,
        locked: XCircleIcon
    }[status];

    const iconColor = {
        active: "#FF5C00",
        available: "#22C55E",
        locked: "#EF4444"
    }[status];

    return (
        <div className="flex items-center justify-between bg-gray-800/50 p-3 pr-4 rounded-lg hover:scale-101 transition-transform">
            <div>
                <div className="text-white">Кабинет {room}</div>
                <div className="text-sm text-gray-400">{holder}</div>
            </div>
            <StatusIcon className="w-5 h-5" style={{ color: iconColor }} />
        </div>
    );
};