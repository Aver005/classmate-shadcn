import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search } from '@/components/primitives/search';
import { Bell, Calendar, Camera, CheckCircle, ClipboardList, DoorOpenIcon, FileCheck, GraduationCap, Key, LockKeyhole, Users, XCircle } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';


const HomeView: React.FC = () =>
{
    const { setView } = useAppContext()

    return (
        <div className="min-h-screen overflow-y-auto">
            {/* Header Section */}
            <header className="container mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-1">
                        <h1 className="text-4xl md:text-6xl font-black">classmate</h1>
                        <span className="w-3 h-3 rounded-full bg-[#FF5C00]" />
                    </div>
                    <p className="text-gray-600 text-lg md:text-xl max-w-md">Система управления кабинетами и расписанием школы</p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="grid gap-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Quick Status Card */}
                        <Card className="bg-[#1E1E1E] text-white p-6 rounded-3xl">
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold">Текущий статус</h3>
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div className="bg-green-500/20 p-4 rounded-xl">
                                        <div className="text-2xl font-bold text-green-500">12</div>
                                        <div className="text-sm text-green-400">Свободно</div>
                                    </div>
                                    <div className="bg-[#FF5C00]/20 p-4 rounded-xl">
                                        <div className="text-2xl font-bold text-[#FF5C00]">24</div>
                                        <div className="text-sm text-[#FF5C00]/80">Занято</div>
                                    </div>
                                    <div className="bg-red-500/20 p-4 rounded-xl">
                                        <div className="text-2xl font-bold text-red-500">3</div>
                                        <div className="text-sm text-red-400">Закрыто</div>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <Search placeholder="Поиск кабинета..." className="w-full" />
                                </div>
                            </div>
                        </Card>

                        {/* Current Schedule */}
                        <Card className="lg:col-span-2 bg-[#1E1E1E] rounded-3xl p-6">
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-semibold text-white">Текущие занятия</h3>
                                    <Button variant="outline" className="cursor-pointer border-0 bg-white/10 text-white transition-colors duration-300">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        Расписание
                                    </Button>
                                </div>
                                <div className="grid gap-4">
                                    {[
                                        { room: "201", subject: "Математика", teacher: "Иванова А.П.", status: "active" },
                                        { room: "103", subject: "Физика", teacher: "Петров С.В.", status: "active" },
                                        { room: "305", subject: "Информатика", teacher: "Сидорова Е.М.", status: "locked" },
                                    ].map((class_, index) => (
                                        <div key={index} className="flex items-center justify-between bg-gray-800/50 p-4 rounded-xl">
                                            <div className="flex items-center gap-4">
                                                <div className="text-2xl font-bold text-white">{class_.room}</div>
                                                <div>
                                                    <div className="text-white">{class_.subject}</div>
                                                    <div className="text-sm text-gray-400">{class_.teacher}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                {class_.status === "active" ? (
                                                    <div className="flex items-center text-[#FF5C00]">
                                                        <Users className="w-5 h-5 mr-2" />
                                                        <span className='hidden xs:inline'>Идет урок</span>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center text-red-500">
                                                        <LockKeyhole className="w-5 h-5 mr-2" />
                                                        <span className='hidden xs:inline'>Закрыт</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>

                        {/* Quick Actions (новое расположение) */}
                        <Card className="lg:col-span-2 bg-[#1E1E1E] rounded-3xl p-8">
                            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                {[
                                    { icon: DoorOpenIcon, label: "Кабинеты", name: "Sub" },
                                    { icon: Key, label: "Ключи", name: "Sub" },
                                    { icon: Calendar, label: "Расписание", name: "Sub" },
                                    { icon: Users, label: "Учителя", name: "Sub" },
                                    { icon: ClipboardList, label: "Отчёты", name: "Sub" },
                                    { icon: Bell, label: "Уведомления", name: "Sub" },
                                    { icon: Camera, label: "Камеры", name: "Sub" },
                                    { icon: GraduationCap, label: "Ученики", name: "Sub" },
                                    { icon: FileCheck, label: "Тесты", name: "Sub" },
                                ].map((action) => (
                                    <Button
                                        key={action.label}
                                        onClick={() => setView(action.name)}
                                        variant="ghost"
                                        className="flex flex-col group items-center gap-2 h-auto p-4 hover:bg-white hover:ring-4 hover:ring-white/60 transition-colors duration-400 ease-in-out cursor-pointer"
                                    >
                                        <div className="size-16 rounded-2xl bg-gray-800 flex items-center justify-center">
                                            <action.icon className="size-7 text-white stroke-[1.5]" />
                                        </div>
                                        <span className="text-white text-sm text-center group-hover:text-gray-800  transition-colors duration-400 ease-in-out">
                                            {action.label}
                                        </span>
                                    </Button>
                                ))}
                            </div>
                        </Card>

                        {/* Room Status Overview */}
                        <Card className="bg-[#1E1E1E] rounded-3xl p-6">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-white">Статус ключей</h3>
                                <div className="space-y-3">
                                    {[
                                        { room: "201", holder: "Иванова А.П.", status: "active" },
                                        { room: "103", holder: "На вахте", status: "available" },
                                        { room: "305", holder: "Тех. работы", status: "locked" },
                                    ].map((key, index) => (
                                        <div key={index} className="flex items-center justify-between bg-gray-800/50 p-3 pr-4 rounded-lg">
                                            <div>
                                                <div className="text-white">Кабинет {key.room}</div>
                                                <div className="text-sm text-gray-400">{key.holder}</div>
                                            </div>
                                            {key.status === "active" && <CheckCircle className="w-5 h-5 text-[#FF5C00]" />}
                                            {key.status === "available" && <Key className="w-5 h-5 text-green-500" />}
                                            {key.status === "locked" && <XCircle className="w-5 h-5 text-red-500" />}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default HomeView;