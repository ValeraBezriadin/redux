"use client";
import React from "react";
import css from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import { DECREMENT, INCREMENT } from "@/store/reducers";
import { connect } from "react-redux";
import { increment, decrement } from "@/store/action";
const Count = ({ count }) => {
  // const count = useSelector((state) => state.counter.count);
  // const dispatch = useDispatch();

  // const incremnt = () => dispatch({ type: INCREMENT });
  // const decrement = () => dispatch({ type: DECREMENT });

  return (
    <>
      <button className={css.button} onClick={increment}>
        +
      </button>
      <span className={css.text}>{count}</span>
      <button className={css.button} onClick={decrement}>
        -
      </button>
    </>
  );
};
const mapState = (state) => {
  return { count: state.counter };
};
const mapDispatch = {
  increment,
  decrement,
};
export default connect(mapState, mapDispatch)(Count);
