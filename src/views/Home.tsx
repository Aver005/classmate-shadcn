// app/views/HomeView.tsx
import { Header } from '@/components/home/Header';
import { StatusCard } from '@/components/home/StatusCard';
import { ScheduleCard } from '@/components/home/ScheduleCard';
import { QuickActionsCard } from '@/components/home/QuickActionsCard';
import { RoomStatusCard } from '@/components/home/RoomStatusCard';
import { Bell, Calendar, Camera, ClipboardList, DoorOpenIcon, FileCheck, GraduationCap, Key, Users } from 'lucide-react';

const HomeView: React.FC = () =>
{
    const statusItems = [
        { value: 12, label: 'Свободно', color: 'green-500' },
        { value: 24, label: 'Занято', color: '[#FF5C00]' },
        { value: 3, label: 'Закрыто', color: 'red-500' }
    ];

    const scheduleItems = [
        { room: "201", subject: "Математика", teacher: "Иванова А.П.", status: "active" },
        { room: "103", subject: "Физика", teacher: "Петров С.В.", status: "active" },
        { room: "305", subject: "Информатика", teacher: "Сидорова Е.М.", status: "locked" },
    ];

    const quickActions = [
        { icon: DoorOpenIcon, label: "Кабинеты", viewName: "Classrooms" },
        { icon: Key, label: "Ключи", viewName: "Sub" },
        { icon: Calendar, label: "Расписание", viewName: "Sub" },
        { icon: Users, label: "Учителя", viewName: "Sub" },
        { icon: ClipboardList, label: "Отчёты", viewName: "Sub" },
        { icon: Bell, label: "Уведомления", viewName: "Sub" },
        { icon: Camera, label: "Камеры", viewName: "Sub" },
        { icon: GraduationCap, label: "Ученики", viewName: "Sub" },
        { icon: FileCheck, label: "Тесты", viewName: "Sub" },
    ];

    const roomStatuses = [
        { room: "201", holder: "Иванова А.П.", status: "active" },
        { room: "103", holder: "На вахте", status: "available" },
        { room: "305", holder: "Тех. работы", status: "locked" },
    ];

    return (
        <div className="min-h-screen overflow-y-auto">
            <Header
                title="classmate"
                subtitle="Система управления кабинетами и расписанием учебного заведения"
                accentColor="#FF5C00"
            />

            <main className="container mx-auto px-4 py-8">
                <div className="grid gap-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <StatusCard
                            title="Текущий статус"
                            statusItems={statusItems}
                            searchPlaceholder="Поиск кабинета..."
                        />
                        
                        <ScheduleCard
                            title="Текущие занятия"
                            scheduleItems={scheduleItems as any}
                            buttonText="Расписание"
                        />

                        <QuickActionsCard actions={quickActions} />

                        <RoomStatusCard
                            title="Статус ключей"
                            statuses={roomStatuses as any}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomeView;