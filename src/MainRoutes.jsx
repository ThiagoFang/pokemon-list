import { useRoutes } from "react-router-dom";

import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound";
import { PokemonInfo } from "./pages/PokemonInfo";

export const MainRoutes = () => {
    return useRoutes ([
        {path: '/', element: <Home />},
        {path: '/pokemon/:name', element: <PokemonInfo />},
        {path: '*', element: <NotFound />}
    ])
}