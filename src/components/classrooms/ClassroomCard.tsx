import { BuildingIcon, UsersIcon } from "lucide-react";
import { EquipmentList } from "./EquipmentList";
import { StatusBadge } from "./StatusBadge";
import { ClassroomEquipment, ClassroomStatus } from "@/types/types";
import { useAppContext } from "@/context/AppContext";

// components/classrooms/ClassroomCard.tsx
interface Classroom
{
    id: string;
    number: string;
    floor: number;
    capacity: number;
    status: ClassroomStatus;
    equipment: ClassroomEquipment[];
    responsible: string;
}

interface ClassroomCardProps
{
    classroom: Classroom;
}

/**
 * Карточка кабинета с детальной информацией
 */
export const ClassroomCard = ({ classroom }: ClassroomCardProps) => 
{ 
    const { setView } = useAppContext()

    return (
        <div 
            onClick={() => setView('Classroom')}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow hover:cursor-pointer"
        >
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold dark:text-white">Кабинет {classroom.number}</h3>
                <StatusBadge status={classroom.status} />
            </div>

            <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                    <BuildingIcon className="w-4 h-4 text-gray-500" />
                    <span>{classroom.floor} этаж</span>
                </div>

                <div className="flex items-center gap-2">
                    <UsersIcon className="w-4 h-4 text-gray-500" />
                    <span>Вместимость: {classroom.capacity} чел.</span>
                </div>

                <EquipmentList equipment={classroom.equipment} />

                <div className="pt-2 border-t mt-3">
                    <span className="text-gray-500 dark:text-gray-400">Ответственный:</span>
                    <div className="font-medium dark:text-white">{classroom.responsible}</div>
                </div>
            </div>
        </div>
    )
};