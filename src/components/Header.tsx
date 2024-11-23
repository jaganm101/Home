import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-dark text-white text-center py-4">
            <h1>வீட்டின் விவரங்கள்</h1>
            <nav>
                <ul className="list-unstyled d-flex justify-content-center">
                    <li className="mx-3">
                        <Link to="./painting-details" className="text-white text-decoration-none">
                            பைண்டிங் விவரங்கள்
                        </Link>
                    </li>
                    <li className="mx-3">
                        <Link to="./door-details" className="text-white text-decoration-none">
                            கதவு விவரங்கள்
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
