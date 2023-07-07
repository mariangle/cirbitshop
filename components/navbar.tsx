import Container from "@/components/ui/container"
import NavbarActions from "./navbar-actions"
import Link from "next/link"
import Image from "next/image"
import CirbitLogo from "@/public/cirbit.svg"

import getCategories from "@/actions/get-categories"

import NavCategories from "./nav-categories"

export const revalidate = 0;

const Navbar = async () => {
    const categories = await getCategories();

    return (
    <div className="border-b border bg-white text-gray-500">
        <Container>
            <div className="flex p-4">
                <NavLogo />
                <NavCategories data={categories} />
                <NavbarActions />
            </div>
        </Container>    
    </div>
  )
}

const NavLogo = () => {
    return (
        <div className="flex-1 flex items-center">
            <Link href={"/"}>
                <Image 
                    src={CirbitLogo}
                    alt="cirbit"
                    className="text-white"
                    height={20}
                />
            </Link>
        </div>
    )
}

export default Navbar