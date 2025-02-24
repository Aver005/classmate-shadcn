import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { useAppContext } from "@/context/AppContext";

interface ActionItem
{
    icon: any;
    label: string;
    viewName: string;
}

interface QuickActionsCardProps
{
    title?: string;
    actions: ActionItem[];
}

/**
 * Grid of quick action buttons with icons
 * @param {ActionItem[]} actions - Array of action items
 */
export const QuickActionsCard = ({ actions }: QuickActionsCardProps) =>
{
    const { setView } = useAppContext();

    return (
        <Card className="lg:col-span-2 bg-[#1E1E1E] rounded-3xl p-8">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {actions.map((action, index) => (
                    <ActionButton key={index} {...action} onClick={() => setView(action.viewName)} />
                ))}
            </div>
        </Card>
    );
};

const ActionButton = ({ icon: Icon, label, onClick }: ActionItem & { onClick: () => void }) => (
    <Button
        variant="ghost"
        onClick={onClick}
        className="flex flex-col group items-center gap-2 h-auto p-4 hover:bg-white hover:ring-4 hover:ring-white/60 transition-all"
    >
        <div className="size-16 rounded-2xl bg-gray-800 flex items-center justify-center">
            <Icon className="size-7 text-white stroke-[1.5]" />
        </div>
        <span className="text-white text-sm group-hover:text-gray-800 transition-colors">
            {label}
        </span>
    </Button>
);