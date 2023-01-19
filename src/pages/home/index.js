import React from "react";
import TopBar from "../../components/topSearchbar";
import TopSlider from "../../components/topSlider";
import SmallProduct from "../../components/category";
import Recommended from "../../components/ recommended";
import NewOnBidBy from "../../components/bidbyt";
import FoodCard from "../../components/foodCard";
import Footer from "../../components/footer";
import { Div } from "../../style";

const Home = () => (
  <Div>
    <TopBar />
    <TopSlider />
    <SmallProduct />
    <Recommended />
    <NewOnBidBy />
    <FoodCard />
    <Footer />
  </Div>
);

export default Home;
