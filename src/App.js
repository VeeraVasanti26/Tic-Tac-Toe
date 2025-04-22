import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import TicTacToe from './TicTacToe';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
