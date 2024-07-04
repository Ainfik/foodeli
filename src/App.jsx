import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Menu from "./Components/Menu";
function App() {
  return (

    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App