import LocationCityIcon from '@material-ui/icons/LocationCity';

function Header() {
    return (
        <header>
            <nav>
            <div className="nav-center">
                <LocationCityIcon className="logo-icon"/>
                <h1>Location Info App</h1>
            </div>
            </nav>
        </header>
    )
}

export default Header
