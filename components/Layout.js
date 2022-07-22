import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "./Navigation/Header";

const Layout = ({children}) => {
    return ( 
        <div>
            <Header />
            {children}
            <Contact />
            <Footer />
        </div>
     );
}
 
export default Layout;