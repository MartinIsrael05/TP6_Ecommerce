import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Card from "../Components/Card";
import Header from "../Components/Header";
const Layout = () => {
 return (
   <>
    <NavBar/>
    <Outlet/>
   </>
 );
};

export default Layout;
