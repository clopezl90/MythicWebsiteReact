import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../header/Header';
import hiveLogo from './Images/logo-hive.png'


/* import img1 from '../assets/images/background/img-login.jpg' */

function Modal1({ closeModal }) {
    return (
        <section className="tf-section login-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <button onClick={() => closeModal(false)}>X</button>
                        <div className="form-create-item-content">
                            <div className="form-create-item">
                                <div className="sc-heading">

                                    <h3>Login Your Account</h3>
                                    <p className="desc">Most popular gaming digital nft market place </p>
                                </div>
                                <form id="create-item-1" action="#" method="GET" acceptCharset="utf-8">
                                    
                                    <button name="submit" type="submit"
                                        className="sc-button style letter style-2"> <img className="hive-btn-img" src={hiveLogo} alt="" />Login with Hivesigner </button>
                                    <div className="input-group style-2 ">
                                        
                                    </div>
                                    <button href="window.location.href='https://www.w3docs.com';" className="sc-button style letter style-2"><span></span>Login with KeyChain </button>
                                </form>
                                {/* <div className="other-login">
                                    <div className="text">Or</div>
                                    <div className="widget-social">
                                        <ul>
                                            <li><Link to="#" className="active"><i className="fab fa-facebook-f"></i></Link>
                                            </li>
                                            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                            <div className="form-background">
                                {/* <img src={img1} alt="Bidzen" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Modal1;