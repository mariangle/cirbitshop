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
            <Link href={"/"}>STORE</Link>
            <MainNav data={categories}/>
            <NavbarActions />
        </Container>
    </div>
  )
}

export default Navbar