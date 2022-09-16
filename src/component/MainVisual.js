import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { id: 1, content: "행복한 삶을 20년 평생 지켜드립니다.", desc: "환자와 보호자가 모두 를 위해 믿고 맡기실수 있는 병원입니다.", link: "https://my.matterport.com/show/?m=yEdf9FWaNav" },
    { id: 2, content: "반려동물과의 행복한 삶,\nSPCA와 함께", desc: "환자와 보호자가 모두 를 위해 믿고 맡기실수 있는 병원입니다.", link: "https://my.matterport.com/show/?m=yEdf9FWaNav" },
]

const MainVisual = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, []);
    const mainSlide = useRef(null);
    const setting = {
        arrows: false,
        dots: false,
        afterChange: index => setIDX(index),
        autoplay: true,
        autoplaySpeed: 5000,
        // fade: true,
    }
    return (
        <section className='MainVisual'>
            <Slider {...setting} ref={mainSlide}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={'itm0' + slide.id + (idx === IDX ? ' on' : '')}>
                                <div className="inner">
                                    <p className='tit'>{slide.content}</p>
                                    <div className='des'>{slide.desc}</div>
                                    <a href={slide.link} target="_blank" className='btn'>
                                        VIEW MORE
                                    </a>
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider>
            {/* <div className="slideNum">
                0{IDX + 1}<span> / 0{SLIDE.length}</span>
            </div> */}

            <div className="slideArrows">
                <button onClick={() => mainSlide.current.slickPrev()}><i className='xi-arrow-left'></i></button>
                <button onClick={() => mainSlide.current.slickNext()}><i className='xi-arrow-right'></i></button>
            </div>

            <div className="justbox">
            </div>
        </section>
    )
}

export default MainVisual;