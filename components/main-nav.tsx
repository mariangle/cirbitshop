"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"

import { cn } from "@/lib/util";
import { Category } from "@/common.types";

interface MainNavProps {
    data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))

  return (
    <nav>
        {routes.map((route) => (
            <Link 
                key={route.href}
                href={route.href}
                >
                {route.label}
            </Link>
        ))}
    </nav>
  )
}

export default MainNav