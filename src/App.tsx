import { BrowserRouter , Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import Vans from "./pages/Vans"
import About from "./pages/About"
import Layout from "./Layout"
import Login from "./pages/Login"
import NotFound from "./pages/notFound"
import Selected from "./pages/Selected"
function App() {

  return <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="vans" element={<Vans />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/van/:id" element={<Selected />}  />
                  <Route path="*" element={<NotFound />} />
              </Route>
          </Routes>
        </BrowserRouter>
}

export default App
