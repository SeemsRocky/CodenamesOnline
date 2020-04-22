import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Lobby from '../components/Lobby';
import FormContainer from './FormContainer';

const Dashboard = () => {
  const { sessionID } = useSelector((store) => store.game);
  const routes = [
    {
      path: '/',
      exact: true,
      main: () => (!sessionID ? <FormContainer /> : <Redirect to={`/session/${sessionID}`} />),
    },
    {
      path: '/session/:sessionID',
      exact: true,
      main: () => <Lobby />,
    },
  ];
  return (
    <main>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </main>
  );
};

export default Dashboard;
