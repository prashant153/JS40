import Link from './link';
import './nav.css'

const Nav = () => {
    return(
        <nav>
            <div className="nav-center">
                <h4>color flipper</h4>
                <ul className="nav-links">
                    <li>
                    <Link href="/index">
                        simple
                    </Link>
                    </li>
                    <li>
                    <Link href="/hex">
                        hex
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;