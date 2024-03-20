import Topbar from '@/components/shared/Topbar'
import LeftSidebar from '../components/shared/LeftSidebar'
import Bottombar from '@/components/shared/Bottombar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div className='w-full md:flex'>
            <Topbar /> {/* Topbar 컴포넌트는 웹 완성 후 추가 예정 */}
            <LeftSidebar />
            <section className='flex flex-1 h-full'>
                <Outlet />
            </section>
            <Bottombar />
        </div>
    )
}

export default RootLayout