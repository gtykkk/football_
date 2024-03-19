import LeftSidebar from '../components/shared/LeftSidebar'

const RootLayout = () => {
    return (
        <div className='w-full md:flex'>
            {/* <Topbar /> */} {/* Topbar 컴포넌트는 웹 완성 후 추가 예정 */}
            <LeftSidebar />
        </div>
    )
}

export default RootLayout