import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Nav } from './Nav';
import { PageWrapper } from '../../components/PageWrapper';
import { ScrollTop } from './ScrollTop';
import { Wrapper } from './components/Wrapper';

export const NavBar = () => {
  return (
    <Wrapper>
      <AppBar id="back-to-top-anchor" position="static">
        <PageWrapper>
          <Nav />
        </PageWrapper>
      </AppBar>
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Wrapper>
  );
};
