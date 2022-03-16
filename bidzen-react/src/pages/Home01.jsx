import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Slider01 from '../components/slider/Slider01';
import dataSlider from '../assets/fake-data/dataSlider';
import LiveAution from '../components/layouts/home/LiveAution';
import dataLiveAution from '../assets/fake-data/dataLiveAution'
import LatestCollections from '../components/layouts/home/LatestCollections';
import dataCollections from '../assets/fake-data/dataCollections'
import BestSeller from '../components/layouts/home/BestSeller';
import dataBestSeller from '../assets/fake-data/dataBestSeller'
import TrendingCollections from '../components/layouts/home/TrendingCollections';
import dataTrendingCollections from '../assets/fake-data/dataTrendingCollections'
import Category from '../components/layouts/home/Category';
import dataCategory from '../assets/fake-data/dataCategory'
import Footer from '../components/footer/Footer';
import { Newsletters } from '../components/layouts/home/Newsletters';
import { Navbar } from 'react-bootstrap';
import { Characters } from './Characters';
import { Navbar1 } from './Navbar1';





const Home01 = () => {

  const [characters, setCharacters] = useState([]);

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {

    //here we bring the API object to the page 
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error))

  };


  useEffect(() => {
    fetchCharacters(initialUrl);

  }, [])


  return <div className='home-1'>
    <div className='container'>
      <Characters Characters={characters} />


    </div>
    <Header />
    <Navbar1 />
    {/* <Slider01 data={dataSlider} />
    <LiveAution data={dataLiveAution} />
    <LatestCollections data={dataCollections} />
    <BestSeller data={dataBestSeller} />
    <TrendingCollections data={dataTrendingCollections} />
    <Category data={dataCategory} />
    <Newsletters />
    <Footer /> */}
  </div>;
};

export default Home01;


