import React from "react";
import style from "./App.module.css";
import { useState } from "react";

export function App() {
  const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operators = ["+", "-", "=", "C"];

  const [operand, setOperand] = useState("");
  const [operator, setOperator] = useState("");
  const [operand2, setOperand2] = useState("");
  const [isResult, setIsResult] = useState(false);

  function clickNum(val) {
    if (operator === "") {
      return setOperand(operand + val);
    }
    return setOperand2(operand2 + val);
  }

  function clickOperators(oper) {
    setIsResult(false);
    if (operator === "" && oper !== "C" && oper !== "=") {
      return setOperator(operator + oper);
    } else if (oper === "=") {
      return getEquals();
    } else if (oper === "C") {
      return delite();
    }
  }

  function delite() {
    setIsResult(false);
    setOperand("");
    setOperator("");
    setOperand2("");
  }

  function getEquals() {
    if (operator === "+") {
      setOperand(Number(operand) + Number(operand2));
    } else if (operator === "-") {
      setOperand(Number(operand) - Number(operand2));
    }
    setIsResult(true);
    setOperator("");
    setOperand2("");
  }

  const numsHTML = nums.map((num, index) => {
    return (
      <button
        className={style.nums}
        id={index}
        key={num}
        onClick={() => {
          clickNum(num);
        }}
      >
        {num}
      </button>
    );
  });

  const operatorsHTML = operators.map((operator, index) => {
    return (
      <button
        className={style.nums}
        key={operator}
        id={index}
        onClick={() => {
          clickOperators(operator);
        }}
      >
        {operator}
      </button>
    );
  });

  return (
    <>
      <div className={style.calculator}>
        <div className={isResult ? style.displayEquals : style.display}>
          {operand}
          {operator}
          {operand2}
        </div>
        <br></br>
        <div className={style.buttons}>
          {numsHTML}
          {operatorsHTML}
        </div>
      </div>
    </>
  );
}

export default App;
