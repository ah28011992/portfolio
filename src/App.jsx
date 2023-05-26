import { useRoutes } from "react-router-dom";
import router from "../src/routes/routes.jsx";

function App() {
  const routing = useRoutes(router);
  return routing;
}

export default App;
