import { Routes, Route } from 'react-router-dom'

import MainPage from './components/main-page/MainPage'
import SkyrimHomePage from './components/skyrim-home-page/SkyrimHomePage'
import TheWitcherHomePage from './components/the-witcher-home-page/TheWitcherHomePage'
import GodOfWarHomePage from './components/god-of-war-home-page/GodOfWarHomePage'

function App() {
  return (
    <>
      <div className="body">

        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/skyrim' element={<SkyrimHomePage />} />
          <Route path='/witcher' element={<TheWitcherHomePage />} />
          <Route path='/god-of-war' element={<GodOfWarHomePage />} />
        </Routes>

      </div>
    </>
  )
}

export default App
