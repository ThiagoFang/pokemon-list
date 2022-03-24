import { MainRoutes } from "./MainRoutes"
import { Template } from './components/MainComponents'
import { Header } from './components/partials/header'
import { Footer } from "./components/partials/footer"

const App = () => {
  return(
    <Template>
      <Header />
      <MainRoutes />
      <Footer />
    </Template>
  )
}

export default App