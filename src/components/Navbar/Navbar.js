import './navbar.css';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [t, i18n] = useTranslation('global');

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const selectActivePage = (event) => {
        document.querySelectorAll(".nav-section li a").forEach(element =>
            element.classList.remove('active')
        );

        event.target.classList.add('active');
    };

    return (
        <div className='nav'>
            <div className='nav-container'>
                <div className='logo-line'>
                    <img className='logo' src={require('../../assets/img/byrdy-logo.jpg')} alt='logo' />
                </div>
                <ul>
                    <li><a href='#hero-section' onClick={(e) => selectActivePage(e)}>{t('navbar.home')}</a></li>
                    <li><a href='#about-section' onClick={(e) => selectActivePage(e)}>{t('navbar.about')}</a></li>
                    <li><a href='#disc' onClick={(e) => selectActivePage(e)}>{t('navbar.discography')}</a></li>
                    <li><a href='#concerts' onClick={(e) => selectActivePage(e)}>{t('navbar.concerts')}</a></li>
                    <li><a href='#calendar' onClick={(e) => selectActivePage(e)}>{t('navbar.calendar')}</a></li>
                    <li><a href='#contact' onClick={(e) => selectActivePage(e)}>{t('navbar.contact')}</a></li>
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