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
                <div className='audio-section1'>
                    <div className='audio-small-section'>
                        <h4 className='title-playlist'>{t('disc.playlist')}</h4>
                        <h4 className='title-playlist2'>WOLFGANG AMADEUSZ  MOZART – CONCERTO KV 488</h4>
                        <audio controls className='audio-clips'>
                            <source src={require('../../assets/audio/01_MOZART_A-dur_Koncert1.mp3')} type="audio/mpeg" />

                        </audio>
                        <p className='audio-text'>01 MOZART A-dur_Koncert1.mp3</p>
                        <audio controls className='audio-clips'>
                            <source src={require('../../assets/audio/02_MOZART_A-dur_Koncert2.mp3')} type="audio/mpeg" />

                        </audio>
                        <p className='audio-text'>02 MOZART A-dur Koncert1.mp3</p>
                        <audio controls className='audio-clips'>
                            <source src={require('../../assets/audio/03_MOZART_A-dur_Koncert3.mp3')} type="audio/mpeg" />

                        </audio>
                        <p className='audio-text'>03 MOZART A-dur Koncert1.mp3</p>
                    </div>
                    <hr className='line'></hr>
                    <div className='audio-small-section'>
                        <h4 className='title-playlist2'>FRYDERYK CHOPIN –  PIANO CONCERTO IN F MINOR, OP. 21</h4>
                        <audio controls className='audio-clips'>
                            <source src={require('../../assets/audio/01_MOZART_A-dur_Koncert1.mp3')} type="audio/mpeg" />

                        </audio>
                        <p className='audio-text'>04 CHOPIN f-moll Koncert1.mp3</p>
                        <audio controls className='audio-clips'>
                            <source src={require('../../assets/audio/02_MOZART_A-dur_Koncert2.mp3')} type="audio/mpeg" />

                        </audio>
                        <p className='audio-text'>05 CHOPIN f-moll Koncert2.mp3</p>
                        <audio controls className='audio-clips'>
                            <source src={require('../../assets/audio/03_MOZART_A-dur_Koncert3.mp3')} type="audio/mpeg" />

                        </audio>
                        <p className='audio-text'>06 CHOPIN f-moll Koncert3.mp3</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Disc;