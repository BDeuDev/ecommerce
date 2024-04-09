import SearchForm from "./searchForm";

const Navbar = () => {
    return (
        <header className="w-full h-[100px] fixed top-0 bg-[#143D59] flex flex-row justify-center items-center">
            <div>
                <SearchForm/>
            </div>
            <nav>

            </nav>

        </header>
    )
  }
  export default Navbar;
