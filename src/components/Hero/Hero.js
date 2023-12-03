import './hero.css'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
    const [t, i18n] = useTranslation('global');

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div id='hero-section' className='hero-section'>
            <div className='hero-container'>
                <h1 className='hero-h1'>
                    {t('header.h1')}
                </h1>
                <h2 className='hero-h2'>
                    {t('header.h2')}
                </h2>
                <div className='icon-container'>
                    <a href='https://www.facebook.com/lukaszbyrdy' target='_blank'><FontAwesomeIcon icon={faFacebook} className='icon-style' /></a>
                    <a href='https://www.youtube.com/@ukaszbyrdy9055' target='_blank'><FontAwesomeIcon icon={faYoutube} className='icon-style'></FontAwesomeIcon></a>
                    <a href='https://www.instagram.com/lukaszbyrdy/' target='_blank'><FontAwesomeIcon icon={faInstagram} className='icon-style insta'></FontAwesomeIcon></a>
                </div>
            </div>
        </div>

    )
}

export default Hero;
