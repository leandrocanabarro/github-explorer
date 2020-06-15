import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { Container, Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <img
        src={logo}
        alt="GitHub Explorer"
      />

      <Title>Explore repositórios no Github</Title>

      <Form>
        <input
          name="repository"
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <li>
          <Link to="/repositories">
            <img
              src="https://avatars2.githubusercontent.com/u/662405?s=400&u=c16321ccf0ffdc5e0ff36a9e4c61ec966166a2d1&v=4"
              alt="Leandro Canabarro"
            />
            <div>
              <strong>star-wars</strong>
              <p>Projeto desenvolvido utilizando ReactJS + SWAPI.</p>
            </div>
            <FiChevronRight />
          </Link>
        </li>
        <li>
          <Link to="/repositories">
            <img
              src="https://avatars2.githubusercontent.com/u/662405?s=400&u=c16321ccf0ffdc5e0ff36a9e4c61ec966166a2d1&v=4"
              alt="Leandro Canabarro"
            />
            <div>
              <strong>star-wars</strong>
              <p>Projeto desenvolvido utilizando ReactJS + SWAPI.</p>
            </div>
            <FiChevronRight />
          </Link>
        </li>
        <li>
          <Link to="/repositories">
            <img
              src="https://avatars2.githubusercontent.com/u/662405?s=400&u=c16321ccf0ffdc5e0ff36a9e4c61ec966166a2d1&v=4"
              alt="Leandro Canabarro"
            />
            <div>
              <strong>star-wars</strong>
              <p>Projeto desenvolvido utilizando ReactJS + SWAPI.</p>
            </div>
            <FiChevronRight />
          </Link>
        </li>
        <li>
          <Link to="/repositories">
            <img
              src="https://avatars2.githubusercontent.com/u/662405?s=400&u=c16321ccf0ffdc5e0ff36a9e4c61ec966166a2d1&v=4"
              alt="Leandro Canabarro"
            />
            <div>
              <strong>star-wars</strong>
              <p>Projeto desenvolvido utilizando ReactJS + SWAPI.</p>
            </div>
            <FiChevronRight />
          </Link>
        </li>
      </Repositories>
    </Container>
  )
};

export default Dashboard;
