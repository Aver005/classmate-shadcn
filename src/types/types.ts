import { Option } from "./filter";

// Основные типы кабинета
export enum ClassroomStatus
{
    FREE = 'free',
    OCCUPIED = 'occupied',
    CLOSED = 'closed'
}

export type ClassroomEquipment =
    | 'projector'
    | 'computers'
    | 'smartboard'
    | 'microscope'
    | 'sound-system';

export interface Classroom
{
    id: string;
    number: string;
    floor: number;
    capacity: number;
    status: ClassroomStatus;
    equipment: ClassroomEquipment[];
    responsible: string;
    lastInspection?: Date;
    schedule?: ScheduleSlot[];
}

// Типы для расписания
export interface ScheduleSlot
{
    time: string;
    subject: string;
    teacher: string;
    group: string;
}

// Типы для компонентов
export interface EquipmentListProps
{
    equipment: ClassroomEquipment[];
}

export interface StatusBadgeProps
{
    status: ClassroomStatus;
}

export interface MultiSelectFilterProps
{
    options: Option[];
    onChange: (values: string[]) => void;
}

// Типы для API ответов
export interface ClassroomsResponse
{
    data: Classroom[];
    total: number;
    filters: AvailableFilters;
}

export interface AvailableFilters
{
    floors: number[];
    equipmentTypes: string[];
    statuses: string[];
}