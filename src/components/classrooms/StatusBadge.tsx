import { cn } from "@/lib/utils";
import { ClassroomStatus } from "@/types/types";

interface StatusBadgeProps
{
    status: ClassroomStatus;
    className?: string;
}

/**
 * Индикатор статуса кабинета с цветовым кодированием
 */
export const StatusBadge = ({ status, className }: StatusBadgeProps) =>
{
    const statusConfig = {
        [ClassroomStatus.FREE]: {
            text: 'Свободен',
            className: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
        },
        [ClassroomStatus.OCCUPIED]: {
            text: 'Занят',
            className: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
        },
        [ClassroomStatus.CLOSED]: {
            text: 'Закрыт',
            className: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
        }
    };

    return (
        <span className={cn(
            "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
            statusConfig[status].className,
            className
        )}>
            {statusConfig[status].text}
        </span>
    );
};