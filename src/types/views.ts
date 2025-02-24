import { ClassroomDetailView } from "@/views/Classroom";
import ClassroomsView from "@/views/Classrooms";
import HomeView from "@/views/Home";
import SubView from "@/views/Sub";
import { DoorOpenIcon, HomeIcon, ShrubIcon } from "lucide-react";

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
    {
        name: 'Classrooms',
        path: '/classrooms',
        icon: DoorOpenIcon,
        element: ClassroomsView
    },
    {
        name: 'Classroom',
        path: '/classroom',
        icon: DoorOpenIcon,
        element: ClassroomDetailView
    },
]