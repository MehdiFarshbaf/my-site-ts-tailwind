import {Link, useLocation} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../contexts/context";
import {navList} from "../../helpers/data";

const Header = () => {

    // variables
    const location = useLocation()
    const {pathname} = location
    const {setArea} = useContext(AuthContext)

    return (
        <header
            className="w-full flex flex-row justify-center items-center bg-bgBlack h-[60px] fixed top-0 z-10">
            <div className="inside">
                <div className="w-full flex flex-row justify-between items-center bg-bgBlack">
                    <div className="font-semibold">
                        <Link to="/"><p className="text-white text-[35px]">Portfo<span className="text-red">lio</span>
                        </p></Link>
                    </div>
                    <nav className="sm:hidden">
                        {pathname === "/" && <ul className="flex">
                            {navList.map(nav => (
                                <li
                                    className="cursor-pointer font-medium text-white text-[18px]
                                        ml-4 first:ml-0 hover:text-red transition-all duration-300 ease-in-out"
                                    key={nav.id}
                                    onClick={() => setArea(nav.area)}>{nav.label}</li>
                            ))}
                        </ul>}
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header