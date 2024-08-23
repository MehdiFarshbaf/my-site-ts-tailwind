import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import MainLayout from "./layouts/MainLayout/MainLayout";
import {Route, Routes} from "react-router-dom";

// pages
import Home from "./pages/Home/Home";

// projects
import EmzaCafe from "./pages/Project/EmzaCafe";
import Protfolio from "./pages/Project/Portfolio";
import Fiat from "./pages/Project/Fiat";
import Salmode from "./pages/Project/Salmode";
import FullStackShop from "./pages/Project/FullStackShop";


const App = () => {
    return (
        <ScrollToTop>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/project/emza-cafe" element={<EmzaCafe/>}/>
                    <Route path="/project/portfolio" element={<Protfolio/>}/>
                    <Route path="/project/fiat" element={<Fiat/>}/>
                    <Route path="/project/salmode" element={<Salmode/>}/>
                    <Route path="/project/full-stack-shop" element={<FullStackShop/>}/>
                </Routes>
            </MainLayout>
        </ScrollToTop>
    )
}

export default App;
