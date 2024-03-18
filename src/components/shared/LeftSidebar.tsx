import { Link } from "react-router-dom"
import { sidebarLinks } from "@/constants"
import { useLocation } from "react-router-dom"

type INavLink = {
    imgUrl: string
    route: string
    label: string
}

const LeftSidebar = () => {
    const { pathname } = useLocation()

    return (
        <nav className="leftsidebar">
            <div className="flex flex-col">
                <Link to="/" className="flex gap-3 items-center">
                    <img src="/assets/images/ball.svg" alt="logo" width={80} height={80} />
                </Link>
                <ul className="flex flex-col gap-6">
                    {sidebarLinks.map((link: INavLink) => (
                        <li key={link.route}>
                            <Link to={link.route} className={`flex gap-3 items-center ${pathname === link.route ? 'active' : ''}`}>
                                <img src={link.imgUrl} alt={link.label} width={30} height={30} />
                                <span>{link.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default LeftSidebar