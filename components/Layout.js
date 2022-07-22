import Contact from "./Contact/Contact";
import Header from "./Navigation/Header";

const Layout = ({children}) => {
    return ( 
        <div>
            <Header />
            {children}
            <Contact />
        </div>
     );
}
 
export default Layout;