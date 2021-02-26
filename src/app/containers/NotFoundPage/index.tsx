import React from 'react';
import { Link } from '../../components/Link';
import { Wrapper } from './components/Wrapper';
import { Title } from './components/Title';

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Title>
        4
        <span role="img" aria-label="Crying Face">😢</span>
        4 Page not found.
      </Title>
      <Link to="/">Return to Home Page</Link>
    </Wrapper>
  );
};

export default NotFoundPage;
