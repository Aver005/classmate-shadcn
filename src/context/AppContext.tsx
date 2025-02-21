import { EventType } from "@/types/event-type"
import {
    ReactNode,
    createContext,
    useContext,
    useMemo,
    useRef,
    useState,
} from "react"

interface AppContextType 
{
    view: string
    setView: (view: string) => void

    events: 
    {
        on: (event: EventType, callback: Function) => void;
        off: (event: EventType, callback: Function) => void;
        emit: (event: EventType, ...args: any[]) => void;
    }
}

interface AppProviderProps 
{
    children: ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined)

const AppProvider = ({ children }: AppProviderProps) => 
{
    const [view, setView] = useState('Home');
    const listenersRef = useRef<Record<EventType, Array<Function>>>({} as Record<EventType, Array<Function>>)

    const events = useMemo(() => 
    ({
        on(type: EventType, callback: Function) 
        {
            listenersRef.current = 
        {
            ...listenersRef.current,
            [type]: [...(listenersRef.current[type] || []), callback],
        }
        },

        off(type: EventType, callback: Function) 
        {
            listenersRef.current = 
        {
            ...listenersRef.current,
            [type]: (listenersRef.current[type] || []).filter((listener) => listener !== callback),
        }
        },

        emit(type: EventType, ...args: any[]) 
        {
            const eventListeners = listenersRef.current[type]
            if (eventListeners) 
                eventListeners.forEach((listener) => listener(...args))
        }
    }), [])

    return (
        <AppContext.Provider value={{ events, view, setView }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => 
{
    const context = useContext(AppContext)
    if (context === undefined) 
        throw new Error("useAppContext must be used within a AppProvider")
    
    return context
}

export { AppProvider, useAppContext }