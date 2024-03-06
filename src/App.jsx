/*
DEV: @skywalkerSam
Purpose: Tic Tac Toe
Stardate: 12024.03.07.0336
*/

import './App.css'
import React, { Component } from "react";
import { Board } from "./components/Board";
import 'tachyons';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

function App() {
  return (
    <>
      <div className="tc">
        <h1 className="f2 red hover-green">Tic Tac Toe</h1>
        <h3 className="f5">
          <a href="https://react.dev/learn/tutorial-tic-tac-toe">react.dev</a>
        </h3>
        <br></br>
        {/* <hr></hr> */}
        <AppWrapper>
          <Board></Board>
        </AppWrapper>

      </div>
    </>
  )
}

export default App
