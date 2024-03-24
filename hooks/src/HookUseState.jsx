import React, { useState } from "react";

const HookUseState = () => {
  const [count, setCount] = useState(0);

  //   basic increment and decrement count function
  // const decrementCount = function () {
  //   setCount(count - 1);
  // };

  // const incrementCount = function(){
  //   setCount(count+1);
  // }

  // above ways of doing it is wrong
  // const incrementCount = function(){
  //     setCount(count+1);
  //     setCount(count+1);
  //   }
  // this only increment it by 1 not by 2 .

  // so correct ways of doing this is by using a function
  // const incrementCount = function(){
  //  setCount(prevCount => prevCount+1);
  //  setCount(prevCount => prevCount+1);
  // }

  // const incrementCount = function(){
  //   setCount(prevCount => prevCount+1);

  //  }

  //  const decrementCount = function(){
  //   setCount(prevCount =>prevCount-1);
  //  }

  // using object in useState
  const [state, setState] = useState({ count: 0, theme: "blue" });

  const incrementCount = function () {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  };

  const decrementCount = function () {
    setState((prevState) => {
      return { count: prevState.count - 1, theme: prevState.theme };
    });
  };

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{state.count}</span>
      <span>{state.theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
};

export default HookUseState;
