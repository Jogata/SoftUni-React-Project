import { Routes, Route } from 'react-router-dom'

import MainPage from './components/main-page/MainPage'
import SkyrimHomePage from './components/skyrim-home-page/SkyrimHomePage'
import TheWitcherHomePage from './components/the-witcher-home-page/TheWitcherHomePage'

function App() {
  return (
    <>
      <div className="body">

        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/skyrim' element={<SkyrimHomePage />} />
          <Route path='/witcher' element={<TheWitcherHomePage />} />
        </Routes>

      </div>
    </>
  )
}

export default App
