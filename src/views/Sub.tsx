import { Button } from "@/components/ui/button"
import { useAppContext } from "@/context/AppContext"
import { ArrowLeft } from "lucide-react"

export default function SubView()
{
    const { setView } = useAppContext()

    return (
        <div className="min-h-screen p-4">
            <Button variant="ghost" onClick={() => setView('Home')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Назад
            </Button>
            <div className="p-4">
                <h1 className="text-3xl font-bold mb-6">Заголовок</h1>
                <p>Здесь будет содержимое раздела</p>
            </div>
        </div>
    )
}

