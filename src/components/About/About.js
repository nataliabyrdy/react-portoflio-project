import './about.css'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const [t, i18n] = useTranslation('global');

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div id='about-section' className='main about-section'>
            <div className='about-container'>
                <h3 className='h-title'>
                    {t('about.h3')}
                </h3>
                <div className='img-container'>
                    <img className='about-img' src={require('../../assets/img/DSC_8981.jpg')} alt='image, portrait' />
                    {/* <p className='about-text'>
                        {t('about.about-text')}
                    </p> */}
                    <p className='about-text'>
                        <span>{t('header.h1')}</span>{t('about.about-text')}</p>
                        <p className='about-text'>
                        {t('about.about-text1')}
                        </p>
                        <p className='about-text'>
                        {t('about.about-text2')}
                        </p>
                        <p className='about-text'>
                        {t('about.about-text3')}
                        </p>
                      
                </div>
            </div>
        </div>

    )
}

export default About;