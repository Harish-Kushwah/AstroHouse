import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer";
import "./layout.css"
const Layout = () => {
  return (
    <div className="layout">
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  )
};

export default Layout;