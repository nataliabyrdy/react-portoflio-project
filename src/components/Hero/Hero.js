import './hero.css'
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const [t, i18n] = useTranslation('global');

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className='hero-section'>
            <div className='hero-container'>
                <h1 className='hero-h1'>
                    {t('header.h1')}
                </h1>
                <h2 className='hero-h2'>
                    {t('header.h2')}
                </h2>
            </div>
        </div>

    )
}

export default Hero;
