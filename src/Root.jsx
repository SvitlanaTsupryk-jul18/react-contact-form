import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { App } from "./App";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Feature from "./pages/Feature";

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Navigate to=".." replace={true} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/feature1" element={<Feature />} />
        <Route path="/feature2" element={<Feature />} />
        <Route path="/*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </Router>
);
