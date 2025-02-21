import type React from "react"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export function Search({ className, ...props }: SearchProps)
{
    return (
        <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input {...props} className={`pl-10 bg-gray-800 border-gray-700 text-white ${className}`} />
        </div>
    )
}

