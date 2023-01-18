import React from 'react';
import TopBar from '../../components/ToPSearchBar';
import TopSlider from '../../components/TopSlider.js';
import SmallProduct from '../../components/category';
import { Div } from '../../style';
import Recommended from '../../components/ Recommended For You';
import NewOnBidBy from '../../components/New On BidByt';
import FoodCard from '../../components/foodCard';
import Footer from '../../components/Footer';

const Home = () => (
  <Div>
    <TopBar />
    <TopSlider />
    <Div>
      <SmallProduct />
    </Div>

    <Div>
      <Recommended />
    </Div>
    <Div>
      <NewOnBidBy />
    </Div>
    <FoodCard />
    <Footer />
  </Div>
);

export default Home;
