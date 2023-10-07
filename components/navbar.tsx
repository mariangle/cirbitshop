import Container from "@/components/ui/container"
import NavbarActions from "@/components/navbar-actions"
import MainNav from "@/components/main-nav"
import MobileNav from "@/components/mobile-nav"

import Link from "next/link"
import Image from "next/image"
import CirbitLogo from "@/public/cirbit.svg"

import getCategories from "@/actions/get-categories"

export const revalidate = 0;

const Navbar = async () => {
    const categories = await getCategories();

    return (
    <div className="sticky w-full bg-white z-10 border-b">
        <NavBanner />   
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-3 py-4">
                    <NavLogo />
                    <MainNav data={categories}></MainNav>
                    <NavbarActions />
                </div>
        </Container> 
        <MobileNav data={categories}/>      
    </div>
  )
}

const NavLogo = () => <Link href={"/"}><Image src={CirbitLogo} alt="cirbit" height={32}/></Link>

const NavBanner = () => {
    return (
        <div className="bg-grey text-gray-700 border-b hidden md:block">
            <Container>
                <div className="flex gap-1 text-xs justify-between py-2">
                    <div>
                        <span className="text-primary">GRATIS</span> LEVERING
                    </div>
                    <div>
                        <span className="text-primary">SIKKER</span> BETALING
                    </div>
                    <div>
                    <span className="text-primary">FRI</span> RETURRET
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar