import React from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import imgdetail1 from './Images/cards.png'
import avt1 from './Images/avt-4.jpg'

const LatestCollections = props => {
    const data = props.data;
    return (
        <section className="tf-latest-collections tf-section bg-color-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sc-heading style-2">
                            <div className="content-left">
                                <div className="inner">
                                    <h3>About Game</h3>
                                    <p className="desc">Most popular cards game in market </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="tf-section item-details-page">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-12 col-md-12">
                                    <div className="item-media">
                                        <div className="media">
                                            <img src={imgdetail1} alt="" />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 col-md-12">
                                    <div className="content-item">
                                        <h3 >Mythic cards game</h3>
                                        <p className="mg-bt-30">We see a better way to value the game cards. Besides, you can do transactions during the game with your cards according to the statistics and the way you have played your cards. <br></br>The more cards you acquire, the more possibilities to trade your cards using criptos. Also, your cards get more valued when you level across the game!</p>


                                        <h2 >PLAY</h2>
                                        <p className="mg-bt-30">Use your cards to play battles in the game. Beat thousands of oponents around the world and level up to gain respect, card value and unlock better cards and upgrades. <br></br> Play Mythic Cards from any device at any spot globally. You just have to get an internet connection and log in!</p>

                                        <h2 >EXCHANGE / SELL</h2>
                                        <p className="mg-bt-30">Buy your cards, level them up to increase its value and its ranking. Once you think that your card is ready to be sold, you can sell it or exchange it with any other one. <br></br> Also, you can keep your cards to level up your ranking with other players. Your personal score will also make your cards to be more valued. Be strategic about how to manage your cards, to defeat other players and gain money.</p>

                                        <h2 >WIN</h2>
                                        <p className="mg-bt-30">Learn how to recognize the different types of cards. Being strategic is the key. Use cards characteristics such as rarity, experience, level and aabilities to improve the statistics of the character's attributes.<br></br>You can use affect statistics of every type of card like speed, armor, magic attacks, ranged attacks and so on. Statistics will be varying according to the use of your card's abilities: rust, poison, flying, dispel and many more!</p>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>   

                </div >
            </div >
        </section >
    );
};


const CollectionsItem = props => (
    <div className="slider-item">
        <div className="sc-product-item style-4 bg-color-dark">
            <div className="product-img flex">
                <div className="img-left">
                    <img src={props.item.img} alt="Bidzen" />
                    <label>{props.item.tags}</label>
                </div>
                <div className="img-right">
                    <div className="top-img flex">
                        <img src={props.item.img1}
                            alt="Bidzen" />
                        <img src={props.item.img2}
                            alt="Bidzen" />
                    </div>
                    <div className="bottom-img">
                        <img src={props.item.img3}
                            alt="Bidzen" />
                    </div>
                </div>
            </div>
            <div className="product-content">
                <h5 className="title"><Link to="/item-details">{props.item.title}</Link> </h5>
                <div className="product-author flex mg-bt-0">
                    <div className="left flex">
                        <div className="avatar">
                            <img src={props.item.imgAuthor} alt="Bidzen" />
                        </div>
                        <div className="infor">
                            <div className="author-name"><Link to="/authors">{props.item.name}</Link></div>
                            <span>Creator</span>
                        </div>
                    </div>
                    <div className="button-wishlish">
                        <Link to="#" className=" wishlish"><i
                            className="fas fa-heart"></i></Link>
                        <span>{props.item.wishlist}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

)

export default LatestCollections;
