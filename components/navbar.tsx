import Container from "@/components/ui/container"
import MainNav from "@/components/main-nav"
import NavbarActions from "./navbar-actions"
import Link from "next/link"

import getCategories from "@/actions/get-categories"

export const revalidate = 0;

const Navbar = async () => {
    const categories = await getCategories();

    return (
    <div>
        <Container>
            <div className="flex p-4">
                <NavLogo />
                <MainNav />
                <NavbarActions />
            </div>
        </Container>    
    </div>
  )
}

const NavLogo = () => {
    return (
        <div className="flex-1 flex items-center">
            <Link href={"/"}>STORE</Link>
        </div>
    )
}

export default Navbar