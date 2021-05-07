import './nav.css'

const Nav = () => {
    return(
        <nav>
            <div className="nav-center">
                <h4>color flipper</h4>
                <ul className="nav-links">
                    <li>
                    <a href="">
                        simple
                    </a>
                    </li>
                    <li>
                    <a href="">
                        hex
                    </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;