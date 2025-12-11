import { BrowserRouter , Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import Vans from "./pages/Vans"
import About from "./pages/About"
import Layout from "./Layout"
function App() {

  return <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="vans" element={<Vans />} />
              </Route>
          </Routes>
        </BrowserRouter>
}

export default App
