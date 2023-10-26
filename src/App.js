import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import NavBar from "./Components/NavBar";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box className="App">
      <NavBar />
      <AllRoutes />
    </Box>
  );
}

export default App;
