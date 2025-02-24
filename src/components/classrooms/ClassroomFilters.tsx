import { FilterItem, FilterType } from "@/types/filter";
import { MultiSelectFilter } from "./MultiSelectFilter";

interface ClassroomFiltersProps
{
    filters: FilterItem[];
    onFilterChange: (filterId: string, value: any) => void;
}

/**
 * Комплексный блок фильтров для кабинетов
 * @param {FilterItem[]} filters - Доступные фильтры
 * @param {function} onFilterChange - Колбэк изменения фильтра
 */
export const ClassroomFilters = ({ filters, onFilterChange }: ClassroomFiltersProps) => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-gray-100 dark:bg-[#1A1A1A] rounded-xl">
        {filters.map((filter) => (
            <div key={filter.id}>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                    {filter.label}
                </label>
                {filter.type === FilterType.SELECT && (
                    <select
                        className="w-full p-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
                        onChange={(e) => onFilterChange(filter.id, e.target.value)}
                    >
                        {filter.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                )}
                {filter.type === FilterType.MULTISELECT && (
                    <MultiSelectFilter
                        selectedValues={[]}
                        options={filter.options || []}
                        onChange={(values) => onFilterChange(filter.id, values)}
                    />
                )}
            </div>
        ))}
    </div>
);