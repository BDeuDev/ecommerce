import SearchForm from "./searchForm";
import { ShoppingCart, Store } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <header className="w-full h-[100px] fixed top-0 bg-[#143D59] flex flex-row justify-center items-center">
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

                <Link to={'/cart'} className="ml-8">
                    <ShoppingCart className="text-white " style={{ fontSize: '40px' }} />
                </Link>
            </nav>

        </header>
    )
}
export default Navbar;
