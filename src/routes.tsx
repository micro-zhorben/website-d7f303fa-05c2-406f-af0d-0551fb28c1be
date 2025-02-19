import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Fun } from "./pages/fun";
import { Games } from "./pages/games";

const Routes = () => (
  <RouterRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/fun" element={<Fun />} />
    <Route path="/games" element={<Games />} />
  </RouterRoutes>
);

export { Routes };