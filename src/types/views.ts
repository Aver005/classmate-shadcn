import HomeView from "@/views/Home";
import SubView from "@/views/Sub";
import { HomeIcon, ShrubIcon } from "lucide-react";

export const VIEWS = 
[
    {
        name: 'Home',
        path: '/',
        icon: HomeIcon,
        element: HomeView
    },
    {
        name: 'Sub',
        path: '/sub',
        icon: ShrubIcon,
        element: SubView
    },
]