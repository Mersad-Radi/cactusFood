import "./App.css";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import {
  Home,
  Navbar,
  Menu,
  MoreFood,
  Footer,
  Searched,
  Recipe,
} from "./component";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/MoreFood/:type" element={<MoreFood />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
