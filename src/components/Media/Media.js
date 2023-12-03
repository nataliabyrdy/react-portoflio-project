import './media.css'
import { useTranslation } from 'react-i18next';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Swiper from '../Swiper/Swiper';

const Media = () => {
    const [t, i18n] = useTranslation('global');

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div id='media' className='section'>
            <div className='media-container'>
                <h3 className='h-title'>
                    {t('media.h3-t')}
                </h3>

            </div>
            <Swiper className = 'swiper' />
        </div>

    )
}

export default Media;


