import React from "react";
import BottomBox from "./BottomBox";
import FooterPages from "./Pages";
import FooterTopBox from "./TopBox";
import Autosuggest from "~/components/autoSuggest";
const Footer = () => (
  <>
    <FooterTopBox />
    <FooterPages />
    <Autosuggest />
    <BottomBox />
  </>
);

export default Footer;
