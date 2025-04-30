import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

// Import Pages
import StartPage from './pages/startPage'
import GrundamneQuizPage from "./pages/grundamneQuizPage"
import StenQuizPage from "./pages/stenQuizPage"
import RoligFaktaPage from "./pages/roligFaktaPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/grundamne" element={<GrundamneQuizPage />} />
          <Route path="/sten" element={<StenQuizPage />} />
          <Route path="/fakta" element={<RoligFaktaPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
