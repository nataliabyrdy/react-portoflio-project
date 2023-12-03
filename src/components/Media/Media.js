import './media.css'
import { useTranslation } from 'react-i18next';
const Media = () => {
    const [t, i18n] = useTranslation('global');

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div id='calendar' className='section'>
           <div className='media-container'>
                <h3 className='h-title'>
                    {t('media.h3-t')}
                </h3>
            </div>
        </div>

    )
}

export default Media;