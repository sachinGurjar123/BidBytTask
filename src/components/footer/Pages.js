import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { PagesBox, Span } from './style';

const FooterPages = () => (
  <PagesBox>
    <Span
      style={{
        color: 'red',
        borderTopColor: 'red',
        borderTop: '4px solid red'
      }}>
      <HomeOutlinedIcon style={{ fontSize: '40px' }} />
    </Span>
    <Span>
      <div style={{ fontSize: '20px' }}>BID</div>
    </Span>
    <Span>
      <EmojiEventsOutlinedIcon style={{ fontSize: '40px' }} />
    </Span>
    <Span>
      <Person2OutlinedIcon style={{ fontSize: '40px' }} />
    </Span>
  </PagesBox>
);

export default FooterPages;
