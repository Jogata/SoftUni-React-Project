import { Routes, Route } from 'react-router-dom'

import Nav from './components/nav/Nav'
import MainPage from './components/main-page/MainPage'
import SkyrimHomePage from './components/skyrim-home-page/SkyrimHomePage'

function App() {
  return (
    <>
      <div className="body">
        <div className="page main-menu">
          <Nav />

          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/skyrim' element={<SkyrimHomePage />} />
          </Routes>

        </div>
      </div>
    </>
  )
}

export default App
