// components/classrooms/MultiSelectFilter.tsx
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Option } from "@/types/filter";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

interface MultiSelectFilterProps
{
    options: Option[];
    selectedValues: string[];
    onChange: (values: string[]) => void;
}

/**
 * Мультиселект с чекбоксами в поповере
 */
export const MultiSelectFilter = ({ options, selectedValues, onChange }: MultiSelectFilterProps) =>
{
    const handleCheck = (value: string) =>
    {
        const newValues = selectedValues.includes(value)
            ? selectedValues.filter(v => v !== value)
            : [...selectedValues, value];
        onChange(newValues);
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                    Выбрано: {selectedValues.length}
                    <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-2">
                <div className="space-y-2">
                    {options.map((option) => (
                        <div key={option.value} className="flex items-center gap-2">
                            <Checkbox
                                id={option.value.toString()}
                                checked={selectedValues.includes(option.value.toString())}
                                onCheckedChange={() => handleCheck(option.value.toString())}
                            />
                            <Label htmlFor={option.value.toString()}>{option.label}</Label>
                        </div>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
};