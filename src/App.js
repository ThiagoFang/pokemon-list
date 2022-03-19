import { MainRoutes } from "./MainRoutes"
import { Template } from './components/MainComponents'
import { Header } from './components/partials/header'

const App = () => {
  return(
    <Template>
      <Header />
      <MainRoutes />
    </Template>
  )
}

export default App