const Navbar = () => {
    return (
        <header className="bg-gray-200">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                <h1 className="shrink-0 text-2xl font-bold text-blue-600">DigiTools</h1>
                <nav aria-label="Main navigation" className="hidden md:block">
                    <ul className="flex items-center gap-6">
                        <li>Products</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                        <li>FAQ</li>
                    </ul>
                </nav>
                <div className="flex shrink-0 items-center gap-4">
                    <p className="hidden sm:block">Login</p>
                    <button className="btn rounded-full bg-blue-500 text-white">Get Started</button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;