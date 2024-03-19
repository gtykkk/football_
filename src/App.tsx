import { Routes, Route } from 'react-router-dom'
import { Home, Calender, Rank } from './_root/pages'
import RootLayout from './_root/RootLayout'
import './globals.css'

const App = () => {
    return (
        <main>
            <Routes>
                {/* 로그인 하지 않아도 볼 수 있는 화면 */}
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path="calender" element={<Calender />} />
                    <Route path="rank" element={<Rank />} />
                </Route>
            </Routes>
        </main>
    )
}

export default App