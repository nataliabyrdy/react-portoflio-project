import { slide as Menu } from 'react-burger-menu';
import './hamburger.css';
import { useTranslation } from 'react-i18next';

const Hamburger = () => {
    const [t, i18n] = useTranslation('global');

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <Menu className='hamburger-menu' >
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
        </Menu>
    )
}

export default Hamburger;
