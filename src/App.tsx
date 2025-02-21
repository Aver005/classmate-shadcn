import { motion, AnimatePresence } from "framer-motion"
import { VIEWS } from "./types/views";
import { useAppContext } from "./context/AppContext";

export default function App()
{
    const { view } = useAppContext()

    const renderView = () =>
    {
        const viewEl = VIEWS.find((v) => v.name === view);
        if (viewEl) return <viewEl.element />;

        return undefined;
    }

    return (
        <div className="min-h-screen">
            <AnimatePresence initial={false} mode="wait">
                <motion.div
                    key={view}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-80%" }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                >
                    { renderView() }
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
