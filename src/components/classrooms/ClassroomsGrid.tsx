import { Classroom } from "@/types/types";
import { ClassroomCard } from "./ClassroomCard";

interface ClassroomsGridProps
{
    classrooms: Classroom[];
}

/**
 * Адаптивная сетка карточек кабинетов
 */
export const ClassroomsGrid = ({ classrooms }: ClassroomsGridProps) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classrooms.map((classroom) => (
            <ClassroomCard key={classroom.id} classroom={classroom} />
        ))}
    </div>
);