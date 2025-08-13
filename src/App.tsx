import TopNavbar  from "./components/navbar/TopNavbar"
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "./components/sections/Home"

// type Props = {}

const App = () => {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App