import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import BestSeller from '../components/layouts/BestSeller';
import dataBestSeller from '../assets/fake-data/dataBestSeller';
import TopSeller from '../components/layouts/authors/BestSeller';
import HotCollection from '../components/layouts/authors/HotCollection';
import dataHotCollection2 from '../assets/fake-data/dataHotCollection2';
import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';
import imgdetail1 from '../assets/images/product-item/gems.png'

const Authors = () => {
  return <div className='authors'>
    <Header />
    <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-title-inner flex">
                        <div className="page-title-heading">
                            <h2 className="heading">Gems</h2>
                        </div>
                        <div className="breadcrumbs">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Gems</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="gemsBackground">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sc-heading style-2">
                            <div className="content-left">
                                <div className="inner">
                                    <h3>About Gems</h3>
                                    <p className="desc">Gems are unlocked once you receive certain rewards!</p>
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
                                        <h3 >Earn while playing!</h3>
                                        <p className="mg-bt-30">This is your chance to become a Professional Gamer. Once you stablish a good level as a Mythic Trainer, you will receive rewards form Tournaments, rankings and cards exchanges. <br></br>There are lot of opportunitties to earn!</p>


                                        <h2 >TOURNAMENTS</h2>
                                        <p className="mg-bt-30">Compete with your best skills and gain new Ranks defeating your partners!<br></br>Everytime you win battles, you will get the neccesary ranking to eneter the Tournaments. You can earn prizes if you achieve the better scores during the competition.</p>

                                        <h2 >RANKING</h2>
                                        <p className="mg-bt-30">You can improve your Player's Ranking through winning battles, winning tournaments and getting and exchanging cards.<br></br>Ranking scales are defined in Mythic Portal, for you to gain rewards once you achieve certain rankings. The higher ranking achieved, the more rewards you can win!</p>

                                        <h2 >CARDS EXCHANGES</h2>
                                        <p className="mg-bt-30">Selling and buying cards would be the most interesting purpose in Mythic Portal. Your skills in battles and tournaments will be better if you purchase cards with greater abilities.<br></br>Also, selling cards will make your ranking better, and will let you acquire other characters to speed up your level. Selling your cards will give you the chance to earn rewards, using strategy to sell them at the best price to the indicated player. Be careful, dont sell the cards which may help you out to be a better Mythic Trainer in future!</p>

                                        



                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>  
                </div >
            </div >
        </section >

    {/* <BestSeller data={dataBestSeller} />
    <TopSeller data={dataBestSeller} />
    <HotCollection data={dataHotCollection2} /> */}
    {/* <Newsletters /> */}
    <Footer />
  </div>;
};

export default Authors;
