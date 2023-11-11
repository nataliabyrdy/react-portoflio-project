import './hero.css'
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const [t, i18n] = useTranslation('global');

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className='hero-container'>
            <h1 className='hero-header'>
                {t('header')}
            </h1>
            <h2>
            </h2>
        </div>

    )
}

export default Hero;
