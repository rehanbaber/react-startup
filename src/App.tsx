import React, { useEffect, useState, useCallback, useMemo } from 'react';
import classes from './App.module.scss';
import { BrowserRouter } from 'react-router-dom'
import Routes from './containers/routes/Routes';
import AuthContextContainer from './containers/auth/AuthContextContainer';

const App: React.FC = () => {

  return (
    <div className={classes.App}>
      <BrowserRouter>
        <AuthContextContainer>
          <Routes />
        </AuthContextContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
