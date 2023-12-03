import './disc.css'
import { useTranslation } from 'react-i18next';
const Disc = () => {
    const [t, i18n] = useTranslation('global');

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div id='disc' className='section'>
            <div className='disc-container'>
                <h3 className='h-title'>
                    {t('disc.h3-tt')}
                </h3>
                <div className='cd-flex'>
                    <div className='cd-container'>
                        <img className='cd-img' src={require('../../assets/img/cd.jpg')} alt='image, cd' />
                        <img className='cd-img' src={require('../../assets/img/cd2.jpg')} alt='image, cd' />
                    </div>
                    <div className='text-c'>
                        {t('disc.cd-text')}
                        <div className='text-c2'>
                            <span className='altra-volta'>{t('disc.altra')}</span>
                            <span className='a1'>{t('disc.altra1')}</span>
                            <span className='a1'>{t('disc.altra2')}</span>
                            <span className='a1'>{t('disc.altra3')}</span>
                            <span className='a1'>{t('disc.altra4')}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Disc;