import { Link } from "react-router-dom"

const Topbar = () => {
    return (
        <section className='topbar'>
            <div className="flex-between py-4 px-5">
                <Link className='flex gap-3 items-center' to="/">
                    <img src="/assets/images/ball.svg" alt="logo" width={80} height={80} />
                </Link>
            </div>
        </section>
    )
}

export default Topbar