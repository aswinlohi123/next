import Footer from "./footer";
import Navbar from "./Novbar";

const Layout = ({ children }) => {
    return ( 
       <div className="content">
           <Navbar />
           { children }
           <Footer />

       </div>   

     );
}
 
export default Layout;