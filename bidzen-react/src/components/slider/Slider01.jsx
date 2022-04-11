import React from 'react';
import { Link } from 'react-router-dom'
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider01 = props => {
    const data = props.data
    return (
        <section className="tf-slider slider">
            <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                scrollbar={{ draggable: true }}
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <SliderItem item={item} />
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </section>
    )
};

const SliderItem = props => (
    <div className="swiper-container ">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <div className="slider-item">
                    <div className="overlay"></div>
                    <div className="slider-inner flex home-1">
                        <div className="slider-content">
                            <h1 className="heading">{props.item.title}</h1>
                            <p className="sub-heading">{props.item.description}</p>

                        </div>
                        <div className="slider-img">
                            <div className="img-home-1"><img src={props.item.img} alt="Bidzen" /></div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <div className='container'>
            <div className="button-slider ">
                <div className='text-center '>
                    <div className='row '>

                        <div class="col-sm my-auto">
                            <Link to="/explore-01"
                                className="sc-button btn-bordered-white style letter "><span>Play Now
                                </span></Link>
                            {/* <Link to="/create-item"
                                    className="sc-button btn-bordered-white style file"><span>Create
                                        Now</span></Link> */}
                        </div>
                        <div class="col-sm">
                            <Link to="/explore-01"
                                className="sc-button btn-bordered-white style letter "><span>About Cards
                                </span></Link>
                            {/* <Link to="/create-item"
                                    className="sc-button btn-bordered-white style file"><span>Create
                                        Now</span></Link> */}
                        </div>
                        <div class="col-sm">
                            <Link to="/explore-01"
                                className="sc-button btn-bordered-white style letter "><span>About Game
                                </span></Link>
                            {/* <Link to="/create-item"
                                    className="sc-button btn-bordered-white style file"><span>Create
                                        Now</span></Link> */}
                        </div>
                    </div>

                </div>


            </div>


        </div>


    </div>



)

export default Slider01;
