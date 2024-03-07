import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1>
                Wyvern-Quest
            </h1>
            <nav>
                <Link className='header-link' to="/">Home</Link>
                <Link className='header-link' to="/guides">Guides</Link>
                <Link className='header-link' to="/leaderboard">LQ Stats</Link>
                <Link className='header-link' to="#">Upcoming</Link>
                <Link className='header-link' to="#">About</Link>
            </nav>
        </header>
    )
}