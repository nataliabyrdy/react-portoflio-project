import './contact.css'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    const [t, i18n] = useTranslation('global');

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div id='contact' className='section contact-section'>
            <div className='contact-container'>
                <h3 className='h-title'>
                    {t('contact.h3-text')}
                </h3>
                <h4 className='title-contact'>
                    {t('contact.impresario')}
                </h4>
                <div className='contact-box'>
                    <img className='contact-img' src={require('../../assets/img/karolina.jpg')} alt='image, portrait' />
                    <h3 className='contact-h'>
                        Karolina Kłosowska
                    </h3>
                </div>
                <p className='contact-p'>
                    <FontAwesomeIcon icon={faEnvelope} className='icon-contact' />
                    impresario@lukaszbyrdy.com
                </p>
                <p className='contact-p'>
                    <FontAwesomeIcon icon={faPhone} className='icon-contact' />
                    +48 690 000 409
                </p>

            </div>
        </div >

    )
}

export default Contact;