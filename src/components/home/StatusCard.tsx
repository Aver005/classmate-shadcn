import { Card } from "@/components/ui/card";
import { Search } from "@/components/primitives/search";

interface StatusItem
{
    value: number;
    label: string;
    color: string;
}

interface StatusCardProps
{
    title: string;
    statusItems: StatusItem[];
    searchPlaceholder: string;
}

/**
 * Displays system status metrics with search
 * @param {StatusItem[]} statusItems - Array of status metrics
 * @param {string} searchPlaceholder - Search input placeholder
 */
export const StatusCard = ({ title, statusItems, searchPlaceholder }: StatusCardProps) => (
    <Card className="bg-[#1E1E1E] text-white p-6 rounded-3xl">
        <div className="space-y-6">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
                {statusItems.map((item, index) => (
                    <div key={index} className={`bg-${item.color}/20 p-4 rounded-xl`}>
                        <div className={`text-2xl font-bold text-${item.color}`}>{item.value}</div>
                        <div className={`text-sm text-${item.color}/80`}>{item.label}</div>
                    </div>
                ))}
            </div>
            <div className="pt-4">
                <Search placeholder={searchPlaceholder} className="w-full" />
            </div>
        </div>
    </Card>
);