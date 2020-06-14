import React from 'react';

import logo from '../../assets/logo.svg';
import { Title } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore repositórios no Github</Title>
    </>
  )
};

export default Dashboard;
