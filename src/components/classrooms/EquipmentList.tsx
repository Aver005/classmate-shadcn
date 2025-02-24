import { ClassroomEquipment } from "@/types/types";
// Импорт иконок из lucide-react
import
    {
        Projector as ProjectorIcon,
        MonitorCheck as MonitorCheckIcon,
        LayoutPanelTop as LayoutPanelTopIcon,
        Microscope as MicroscopeIcon,
        Speaker as SpeakerIcon
    } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface EquipmentListProps
{
    equipment: ClassroomEquipment[];
}

/**
 * Отображение иконок оборудования с тултипами
 */
export const EquipmentList = ({ equipment }: EquipmentListProps) =>
{
    const equipmentIcons: Record<ClassroomEquipment, { icon: React.ReactNode, label: string }> = {
        'projector': {
            icon: <ProjectorIcon className="w-5 h-5" />,
            label: 'Проектор'
        },
        'computers': {
            icon: <MonitorCheckIcon className="w-5 h-5" />,
            label: 'Компьютеры'
        },
        'smartboard': {
            icon: <LayoutPanelTopIcon className="w-5 h-5" />,
            label: 'Интерактивная доска'
        },
        'microscope': {
            icon: <MicroscopeIcon className="w-5 h-5" />,
            label: 'Микроскопы'
        },
        'sound-system': {
            icon: <SpeakerIcon className="w-5 h-5" />,
            label: 'Акустическая система'
        }
    };

    return (
        <div className="flex flex-wrap gap-2">
            {equipment.map((item) => (
                <Tooltip key={item}>
                    <TooltipTrigger>
                        {equipmentIcons[item].icon}
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{equipmentIcons[item].label}</p>
                    </TooltipContent>
                </Tooltip>
            ))}
        </div>
    );
};

