import React from 'react';
import { PageWrapper } from '../../components/PageWrapper';
import { NavBar } from '../NavBar';
import { FileList } from '../FileList';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <PageWrapper>
        <FileList />
      </PageWrapper>
  </>
  );
};

export default HomePage;
