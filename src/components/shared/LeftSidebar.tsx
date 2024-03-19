import { Link } from "react-router-dom"
import { sidebarLinks } from "@/constants"
import { useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"

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
                    <img src="/assets/images/ball.svg" alt="logo" width={100} height={100} />
                </Link>
                {/* 프로필 들어갈 자리 */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                {/* 프로필 들어갈 자리 */}
                <ul className="flex flex-col gap-6">
                    <span className="text-gray-600">MAIN APP</span>
                    {sidebarLinks.map((link: INavLink) => (
                        <li key={link.route} className="">
                            <Link to={link.route} className={`flex gap-3 items-center ${pathname === link.route ? 'active' : ''}`}>
                                <img src={link.imgUrl} alt={link.label} width={30} height={30} />
                                <span>{link.label}</span>
                            </Link>
                        </li>
                    ))}
                    <span className="text-gray-600">OTHERS</span>
                    <li>
                        <Link to="/communication" className="flex gap-3 items-center">
                            <img src="/assets/icons/communication.svg" alt="게시판" width={30} height={30} />
                            <span>게시판</span>
                        </Link>
                    </li>
                    <Button variant="ghost" className="shad-button_ghost">
                        <Link to="/logout" className="flex gap-3 items-center">
                            <img src="/assets/icons/logout.svg" alt="로그아웃" width={30} height={30} />
                            <span>로그아웃</span>
                        </Link>
                    </Button>
                </ul>
            </div>
        </nav>
    )
}

export default LeftSidebar