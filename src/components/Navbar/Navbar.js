import './navbar.css';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [t, i18n] = useTranslation('global');

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className='nav-section'>
            <div className='nav-container'>
                <div className='logo-line'>
                    <img className='logo' src={require('../../assets/img/logo.png')} alt='logo' />
                </div>
                <ul>
                    <li><a href='#home'>{t('header')}</a></li>
                    <li><a href='#about'>O mnie</a></li>
                    <li><a href='#concerts'>Koncerty</a></li>
                    <li><a href='#calendar'>Kalendarz</a></li>
                    <li><a href='#contact'>Kontakt</a></li>
                </ul>

                <button onClick={() => handleChangeLanguage("pl")}>PL</button>
                <button onClick={() => handleChangeLanguage("en")}>EN</button>
                <button onClick={() => handleChangeLanguage("de")}>DE</button>
            </div>
        </div>
    )
};

export default Navbar;