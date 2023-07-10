"use client"

import Link from "next/link";
import Container from "@/components/ui/container";
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils";
import { Category } from "@/common.types";

interface NavCategoriesProps {
    data: Category[];
}

const MobileNav: React.FC<NavCategoriesProps> = ({
    data
}) => {
    const pathname = usePathname();

    const categories = data.map((category) => ({
        href: `/category/${category.id}`,
        label: category.name,
        active: pathname === `/category/${category.id}`
    }))

  return (
    <nav className="md:hidden flex-1 border-t py-2">
        <Container>
            <div className="flex items-center gap-4 text-sm ">
                {categories.map((category) => (
                    <Link 
                        key={category.href}
                        href={category.href}
                        className={cn(
                            "hover:text-primary",
                            category.active ? "text-primary" : "border-b-white" 
                        )}
                        >
                        {category.label}
                </Link>
                ))}
            </div>
        </Container>
    </nav>
  )
}

export default MobileNav