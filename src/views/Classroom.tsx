// app/views/ClassroomDetailView.tsx
import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronLeft, Edit, User, Users, Building, Save } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Classroom, ClassroomStatus, ScheduleSlot } from '@/types/types';
import { Button } from '@/components/ui/button';
import { StatusBadge } from '@/components/classrooms/StatusBadge';
import { EquipmentList } from '@/components/classrooms/EquipmentList';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useAppContext } from '@/context/AppContext';

const mockClassroom: Classroom = {
    id: '201',
    number: '201',
    floor: 2,
    capacity: 25,
    status: ClassroomStatus.FREE,
    equipment: ['projector', 'smartboard'],
    responsible: 'Иванова А.П.',
    schedule: [
        { time: '09:00-10:30', subject: 'Математика', teacher: 'Петров И.С.', group: '11А' },
        { time: '11:00-12:30', subject: 'Физика', teacher: 'Сидорова М.К.', group: '10Б' }
    ]
};

export const ClassroomDetailView = () =>
{
    const { setView } = useAppContext()
    const [isEditing, setIsEditing] = useState(false);
    const [classroom, setClassroom] = useState(mockClassroom);
    const [tempData, setTempData] = useState(mockClassroom);

    const handleSave = () =>
    {
        setClassroom(tempData);
        setIsEditing(false);
    };

    return (
        <div className="min-h-screen p-6 max-w-6xl mx-auto">
            {/* Header Section */}
            <header className="mb-8">
                <Button variant="ghost" onClick={() => setView('Classrooms')}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Назад к кабинетам
                </Button>

                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-4">
                        <h1 className="text-3xl font-bold">Кабинет {classroom.number}</h1>
                        <StatusBadge status={classroom.status} />
                    </div>
                    <Button onClick={() => setIsEditing(true)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Редактировать
                    </Button>
                </div>
            </header>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {/* Left Column - Основная информация */}
                <div className="md:col-span-2 space-y-6">
                    {/* Информационная карточка */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                        <div className="grid grid-cols-2 gap-4">
                            <InfoItem icon={<Building />} label="Этаж" value={`${classroom.floor} этаж`} />
                            <InfoItem icon={<Users />} label="Вместимость" value={`${classroom.capacity} чел.`} />
                            <InfoItem
                                icon={<User />}
                                label="Ответственный"
                                value={classroom.responsible}
                                className="col-span-2"
                            />
                        </div>
                    </div>

                    {/* Оборудование */}
                    <Section title="Оснащение кабинета">
                        <EquipmentList equipment={classroom.equipment} />
                    </Section>

                    {/* Расписание */}
                    <Section title="Расписание занятий">
                        <div className="space-y-3">
                            {classroom.schedule?.map((slot, index) => (
                                <ScheduleItem key={index} slot={slot} />
                            ))}
                        </div>
                    </Section>
                </div>

                {/* Right Column - Управление */}
                <div className="space-y-6">
                    <Section title="Быстрые действия">
                        <div className="space-y-3">
                            <Button variant="outline" className="w-full">
                                Создать мероприятие
                            </Button>
                            <Button variant="outline" className="w-full">
                                История использования
                            </Button>
                            <Button variant="outline" className="w-full text-red-500">
                                Закрыть кабинет
                            </Button>
                        </div>
                    </Section>

                    <Section title="Статистика">
                        <div className="space-y-2 text-sm">
                            <StatItem label="Занятость" value="78%" />
                            <StatItem label="Последняя проверка" value="12.05.2024" />
                            <StatItem label="Следующее занятие" value="Физика в 14:00" />
                        </div>
                    </Section>
                </div>
            </div>

            {/* Edit Modal */}
            <Dialog open={isEditing} onOpenChange={setIsEditing}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Редактирование кабинета</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label>Номер кабинета</Label>
                                <Input
                                    value={tempData.number}
                                    onChange={(e) => setTempData({ ...tempData, number: e.target.value })}
                                />
                            </div>
                            <div>
                                <Label>Этаж</Label>
                                <Input
                                    type="number"
                                    value={tempData.floor}
                                    onChange={(e) => setTempData({ ...tempData, floor: Number(e.target.value) })}
                                />
                            </div>
                            <div className="col-span-2">
                                <Label>Ответственный</Label>
                                <Input
                                    value={tempData.responsible}
                                    onChange={(e) => setTempData({ ...tempData, responsible: e.target.value })}
                                />
                            </div>
                        </div>

                        <Button className="w-full" onClick={handleSave}>
                            <Save className="mr-2 h-4 w-4" />
                            Сохранить изменения
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

// Вспомогательные компоненты
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        {children}
    </div>
);

const InfoItem = ({ icon, label, value, className }: {
    icon: React.ReactNode;
    label: string;
    value: string;
    className?: string;
}) => (
    <div className={cn("flex items-center gap-3", className)}>
        <span className="text-gray-500 dark:text-gray-400">{icon}</span>
        <div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
            <div className="font-medium dark:text-white">{value}</div>
        </div>
    </div>
);

const ScheduleItem = ({ slot }: { slot: ScheduleSlot }) => (
    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <div>
            <div className="font-medium dark:text-white">{slot.time}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{slot.subject}</div>
        </div>
        <div className="text-right">
            <div className="dark:text-white">{slot.teacher}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{slot.group}</div>
        </div>
    </div>
);

const StatItem = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between">
        <span className="text-gray-500 dark:text-gray-400">{label}</span>
        <span className="font-medium dark:text-white">{value}</span>
    </div>
);