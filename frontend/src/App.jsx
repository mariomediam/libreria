import { Libreria } from "./components/Libreria";
import "./index.css";
import { AppRouter } from "./routers/AppRouter";

export const App = () => {
  return (
    <AppRouter>
      <Libreria />
    </AppRouter>
  );
};
