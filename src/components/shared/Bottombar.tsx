import { bottombarLinks } from "@/constants"
import { Link } from "react-router-dom"

const Bottombar = () => {
  return (
    <section className="z-50 flex-between w-full sticky bottom-0 rounded-t-[20px] px-5 py-3 md:hidden align-bottom">
        {bottombarLinks.map((link) => {
            return (
                <Link to={link.route} key={link.label} className="flex-center flex-col gap-1 p-2 transition">
                    <img src={link.imgUrl} alt={link.label} width={16} height={16} />
                    <p className="tiny-medium text-white">{link.label}</p>
                </Link>
            )
        })}
    </section>
  )
}

export default Bottombar