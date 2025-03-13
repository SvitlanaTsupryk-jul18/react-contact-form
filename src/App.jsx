import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const App = () => (
  <div className="app">
    <Header />
    <main className="section">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default App;
