import Link from "next/link";
import Container from "../ui/container";
import MainNav from "./main-nav";
import { NavItem } from "@/types";
import NavActions from "./nav-actions";
import { getNavItems } from "@/actions/get-navItems";

const Navbar = () => {
    const navItems : NavItem[]  = getNavItems; 
    return ( 
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center gap-x-10">
                    <Link href={"/"} className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-2xl">Codebuddy</p>
                    </Link>
                    <MainNav data={navItems}/>
                    <NavActions/>
                </div>
            </Container>
        </div>
     );
}
 
export default Navbar;