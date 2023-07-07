"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils";
import { Category } from "@/common.types";

interface NavCategoriesProps {
    data: Category[];
}

const NavCategories: React.FC<NavCategoriesProps> = ({
    data
}) => {
    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))

  return (
    <nav className="flex-1 flex justify-center items-center gap-2">
        {routes.map((route) => (
            <Link 
                key={route.href}
                href={route.href}
                className={cn(
                    route.active ? "text-gray-700" : "" 
                )}
                >
                {route.label}
        </Link>
        ))}
    </nav>
  )
}

export default NavCategories