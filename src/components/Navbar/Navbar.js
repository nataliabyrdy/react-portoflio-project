import './navbar.css';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [t, i18n] = useTranslation('global');

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className='nav-section'>
            <div className='nav-container'>
                <div className='logo-line'>
                    <img className='logo' src={require('../../assets/img/logo2.png')} alt='logo' />
                </div>
                <ul>
                    <li><a href='#hero-section'>{t('navbar.home')}</a></li>
                    <li><a href='#about-section'>{t('navbar.about')}</a></li>
                    <li><a href='#concerts'>{t('navbar.concerts')}</a></li>
                    <li><a href='#calendar'>{t('navbar.calendar')}</a></li>
                    <li><a href='#contact'>{t('navbar.contact')}</a></li>
                </ul>
                <div className='btn-lang-container'>
                    <button className='btn-lang' onClick={() => handleChangeLanguage("en")}>EN</button>
                    <button className='btn-lang' onClick={() => handleChangeLanguage("pl")}>PL</button>
                    <button className='btn-lang' onClick={() => handleChangeLanguage("de")}>DE</button>
                </div>
            </div>
        </div>
    )
};

export default Navbar;