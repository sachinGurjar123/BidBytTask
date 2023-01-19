import React from 'react';
import { BottomBoxDiv, BottomImg, BottomText } from './style';

const BottomBox = () => (
  <div style={{ padding: '10px' }}>
    <BottomBoxDiv>
      <BottomImg>
        <img
          style={{ height: '50px' }}
          src="https://www.bidbyt.com/_next/image?url=%2Fbrand%2Ficons%2Ffull%2Fbydbyt.webp&w=256&q=75"
          alt=""
        />
        <img
          style={{ height: '55px' }}
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          alt=""
        />
      </BottomImg>
      <BottomText>
        <p className="BottomP1">
          Authentic food from top chefs, restaurants and home cooks. Your food cravings catered! Be
          it reservations for the best pop up restaurant nearby, or a home food delivery - we have
          you covered.
        </p>
        <div className="BottomP2">
          <p>
            Login <br />
            Join Us <br />
            Popups <br />
            Terms & Conditions <br />
            Sitemap <br />
          </p>
        </div>
        <div className="BottomP3">
          <p>
            FAQ
            <br />
            Vegetarian
            <br />
            Hosting
            <br />
            Privacy Policy
            <br />
            Refunds & Cancellation
          </p>
        </div>
      </BottomText>
      <div>
        <p style={{ textAlign: 'start' }}>Related Searches</p>
        <hr className="hrBottom" />
      </div>
    </BottomBoxDiv>
  </div>
);

export default BottomBox;
