import './about.css'
import { useTranslation } from 'react-i18next';

const About = () => {
    const [t, i18n] = useTranslation('global');

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className='about-section'>
            <div className='about-container'>
                <h3 className='h-title'>
                    {t('about.h3')}
                </h3>
                <div className='img-container'>
                    <img className='about-img' src={require('../../assets/img/DSC_8726.jpg')} alt='image, portrait' />
                    <p className='about-text'>
                        {t('about.about-text')}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default About;