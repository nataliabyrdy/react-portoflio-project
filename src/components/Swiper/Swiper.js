import { useTranslation } from 'react-i18next';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './swiper.css';
import 'swiper/css/navigation';

export default () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >

            <SwiperSlide>
                <iframe width="800"
                    height="600"
                    src="https://www.youtube.com/embed/K99aZ2or1pA?si=-73N__q21y-9ubtA"
                    title="Koncert"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                <p className='video-text'>F. Chopin - Piano Concerto no. 2 in F minor op.21</p>
            </SwiperSlide>
            <SwiperSlide>
            <iframe width="800" height="600" src="https://www.youtube.com/embed/HNgcAvSQj3E?si=AKSbcTOszHQ4y8p_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className='video-text'>Chopin - Etude in C sharp minor op.25 no.7</p>
            </SwiperSlide>
            <SwiperSlide>
                <iframe width="800" height="600" src="https://www.youtube.com/embed/orf7l6EXics?si=mG445-NTe0opA2RS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className='video-text'>Szymanowski - Don Juan Serenade from Masques op.34</p>
            </SwiperSlide>
            <SwiperSlide>
                <iframe width="800" height="600" src="https://www.youtube.com/embed/G4D7UJywdP0?si=3o8RnceNB9l739p0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className='video-text'>Szymanowski - Tantris the Clown from Masques op.34</p>
            </SwiperSlide>
            <SwiperSlide>
                <iframe width="800" height="600" src="https://www.youtube.com/embed/3ZPMISEIEGg?si=qGU7CRirStvjad5i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className='video-text'>Mussorgsky - Pictures at an Exhibition</p>
            </SwiperSlide>
            ...
        </Swiper>
    );
};
