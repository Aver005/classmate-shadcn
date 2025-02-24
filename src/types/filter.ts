export enum FilterType
{
    SELECT = 'select',
    MULTISELECT = 'multiselect',
    RANGE = 'range'
}

export interface Option
{
    value: string | number;
    label: string;
}

export interface FilterItem
{
    id: string;
    label: string;
    type: FilterType;
    options?: Option[];
    min?: number;
    max?: number;
}