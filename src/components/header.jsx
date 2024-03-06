import './header.css';

export default function Header() {
    return (
        <header>
            <h1>
                Wyvern-Quest
            </h1>
            <nav>
                <a className='header-link' href="">Home</a>
                <a className='header-link' href="">Guides</a>
                <a className='header-link' href="">LQ Stats</a>
                <a className='header-link' href="">Upcoming</a>
                <a className='header-link' href="">About</a>
            </nav>
        </header>
    )
}