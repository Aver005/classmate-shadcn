import { useState } from 'react';
import { Search } from '@/components/primitives/search';
import { Button } from '@/components/ui/button';
import { Plus, Settings, ListFilter } from 'lucide-react';
import { ClassroomFilters } from '@/components/classrooms/ClassroomFilters';
import { ClassroomsGrid } from '@/components/classrooms/ClassroomsGrid';
import { FilterItem, FilterType } from '@/types/filter';
import { Classroom, ClassroomStatus } from '@/types/types';

const ClassroomsView = () =>
{
    const [searchQuery, setSearchQuery] = useState('');
    const [filtersOpen, setFiltersOpen] = useState(false);

    const [filters, setFilters] = useState<FilterItem[]>([
        {
            id: 'floor',
            label: 'Этаж',
            type: FilterType.SELECT,
            options: Array.from({ length: 5 }, (_, i) => ({ value: i + 1, label: `${i + 1} этаж` }))
        },
        {
            id: 'status',
            label: 'Статус',
            type: FilterType.MULTISELECT,
            options: [
                { value: 'free', label: 'Свободен' },
                { value: 'occupied', label: 'Занят' },
                { value: 'closed', label: 'Закрыт' }
            ]
        },
        {
            id: 'equipment',
            label: 'Оборудование',
            type: FilterType.MULTISELECT,
            options: [
                { value: 'projector', label: 'Проектор' },
                { value: 'computers', label: 'Компьютеры' },
                { value: 'smartboard', label: 'Интерактивная доска' }
            ]
        }
    ]);

    const classrooms: Classroom[] = [
        // Пример данных
        {
            id: '201',
            number: '201',
            floor: 2,
            capacity: 25,
            status: ClassroomStatus.FREE,
            equipment: ['projector', 'smartboard'],
            responsible: 'Иванова А.П.'
        },
        // ... другие кабинеты
    ];

    const handleFilterChange = (filterId: string, value: any) =>
    {
        // Логика фильтрации
    };

    return (
        <div className="min-h-screen p-4 md:p-6">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <h1 className="text-3xl font-bold dark:text-white">
                    Управление кабинетами
                </h1>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Добавить кабинет
                </Button>
            </header>

            <div className="space-y-6">
                <div className="flex flex-col items-stretch sm:flex-row gap-4 sm:items-center">
                    <div className='flex-1 sm:flex-none'>
                        <Search
                            placeholder="Поиск по кабинетам..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-grow"
                        />
                    </div>
                    <div className='flex gap-4 items-stretch'>
                        <Button 
                            variant="outline" 
                            onClick={() => setFiltersOpen(!filtersOpen)}
                            className='flex-1'
                        >
                            <ListFilter className="mr-2 h-4 w-4" />
                            Фильтры
                        </Button>
                        <Button 
                            variant="outline"
                            className='flex-1'
                        >
                            <Settings className="mr-2 h-4 w-4" />
                            Настройки
                        </Button>
                    </div>
                </div>

                {filtersOpen && <ClassroomFilters
                    filters={filters}
                    onFilterChange={handleFilterChange}
                />}

                <ClassroomsGrid classrooms={classrooms} />
            </div>
        </div>
    );
};

export default ClassroomsView;