
const Header= ()=>{
    return (
        <header className="shadow-md">
            <nav className="flex justify-between px-5 items-center">
                <a href="/">
                    <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" alt="logo" className="size-24 object-contain"></img>
                </a>
                <ul className="flex gap-24 border-2 border-red-700">
                    <li className="text-lg font-medium"><i className="ri-search-line"></i>Search</li>
                    <li className="text-lg font-medium"><i className="ri-magic-line"></i>Offers</li>
                    <li className="text-lg font-medium"><i className="ri-login-box-line"></i>Login</li>
                    <li className="text-lg font-medium"><i className="ri-hand-heart-line"></i>Help</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;