import "./Header.css";
import { CartIcon, UserIcon } from './Icons';

export function Header() {
    return (
        <header className="header">
            <img
                src="./src/assets/img/logo.jpg"
                alt="Logo"
                className="header-logo"
            />

            <div className="header-title">Tienda de Ropa</div>

            <div className="header-icons">
                <CartIcon/>
                <UserIcon/>
            </div>
        </header>
    )
}