import { Link } from "react-router-dom"

// 반응형 사이즈가 큰 화면에서는 상단 바가 없음
const Topbar = () => {
    return (
        <section className="sticky top-0 z-50 md:hidden bg-dark-2 w-full">
            <div className="flex-between py-4 px-5">
                <Link className='flex gap-3 items-center' to="/">
                    <img src="/assets/images/ball.svg" alt="logo" width={80} height={80} />
                </Link>
            </div>
        </section>
    )
}

export default Topbar