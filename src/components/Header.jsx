import logo from '../images/logo.jpg';

const Header = () => {
    return (
        <header className="text-white bg-success p-4 d-flex justify-content-between">
            <h1>Booltrip</h1>
            <img className="logo" src={logo} alt="Booltrip Logo" />
        </header>
    )
}

export default Header;