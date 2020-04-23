import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Lobby from '../components/Lobby';
import FormContainer from './FormContainer';
import ISpyContainer from './ISpyContainer';

const Dashboard = () => {
  const { ready, sessionID } = useSelector((store) => store.game);
  const routes = [
    {
      path: '/',
      exact: true,
      main: () => (!sessionID ? <FormContainer /> : <Redirect to={`/session/${sessionID}`} />),
    },
    {
      path: '/:sessionID',
      exact: true,
      main: () => (!ready ? <Lobby /> : <Redirect to="/codenames" />),
    },
    {
      path: '/codenames',
      exact: true,
      main: () => (<ISpyContainer />),
    },
  ];
  return (
    <main>
      {routes.map(({ path, exact, main }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          component={main}
        />
      ))}
    </main>
  );
};

export default Dashboard;
