type NavType = {
    home: string,
    about: string,
    contact: string
}

type PropsType = {
    title: string,
    slogan: string,
    nav: NavType
}

const Header = (props : PropsType) => {
    return (
        <header>
            <div>
                <h1>{props.title}</h1>
                <p>{props.slogan}</p>
            </div>
            <nav>
                <ul>
                    <li><a href="#">{props.nav.home}</a></li>
                    <li><a href="#">{props.nav.about}</a></li>
                    <li><a href="#">{props.nav.contact}</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;