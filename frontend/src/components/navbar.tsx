import SearchForm from "./searchForm";
import { ShoppingCart, Store,AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <header className="z-10 w-full h-[100px] fixed top-0 bg-[#143D59] flex flex-row justify-center items-center shadow-xl">
            <div style={{ width: '115px', height: '75px', overflow: 'hidden' }} className="absolute left-4">
                <img
                    className="cursor-pointer"
                    src="phone.png"
                    alt="Imagen"
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
            <div>
                <SearchForm />
            </div>
            <nav className="flex flex-row justify-end items-end absolute right-10">
                <Link to="/">
                    <Store className="text-white " style={{ fontSize: '40px' }} />
                </Link>
                <Link to={'/login'}>
                    <AccountCircle className="text-white ml-10" style={{ fontSize: '40px' }}/>
                </Link>
                <Link to={'/cart'} className="ml-10 mr-2">
                    <ShoppingCart className="text-white " style={{ fontSize: '40px' }} />
                </Link>
            </nav>

        </header>
    )
}
export default Navbar;
