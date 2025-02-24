import { Calendar, LockKeyholeIcon, UsersIcon } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

interface ScheduleItem
{
    room: string;
    subject: string;
    teacher: string;
    status: "active" | "locked";
}

interface ScheduleCardProps
{
    title: string;
    scheduleItems: ScheduleItem[];
    buttonText: string;
}

const StatusIndicator = ({ status }: { status: 'active' | 'locked' }) =>
{
    const statusConfig = {
        active: {
            icon: UsersIcon,
            color: '#FF5C00',
            text: 'Идет урок'
        },
        locked: {
            icon: LockKeyholeIcon,
            color: '#EF4444',
            text: 'Закрыт'
        }
    };

    const { icon: Icon, color, text } = statusConfig[status];

    return (
        <div className="flex items-center" style={{ color }}>
            <Icon className="w-5 h-5 mr-2" />
            <span className="hidden xs:inline">{text}</span>
        </div>
    );
};

/**
 * Displays current schedule with room status
 * @param {ScheduleItem[]} scheduleItems - Array of schedule items
 * @param {string} buttonText - Text for schedule button
 */
export const ScheduleCard = ({ title, scheduleItems, buttonText }: ScheduleCardProps) => (
    <Card className="lg:col-span-2 bg-[#1E1E1E] rounded-3xl p-6">
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <Button variant="outline" className="border-0 bg-white/10 text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    {buttonText}
                </Button>
            </div>
            <div className="grid gap-4">
                {scheduleItems.map((item, index) => (
                    <ScheduleItem key={index} {...item} />
                ))}
            </div>
        </div>
    </Card>
);

const ScheduleItem = ({ room, subject, teacher, status }: ScheduleItem) => (
    <div className="flex items-center justify-between bg-gray-800/50 p-4 rounded-xl hover:scale-101 transition-transform duration-300">
        <div className="flex items-center gap-4">
            <div className="text-2xl font-bold text-white">{room}</div>
            <div>
                <div className="text-white">{subject}</div>
                <div className="text-sm text-gray-400">{teacher}</div>
            </div>
        </div>
        <StatusIndicator status={status} />
    </div>
);