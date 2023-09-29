import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./CodeInput.css";

type Props = {
  length: number;
};

function CodeInput(props: Props) {
  const [codeValue, setCodeValue] = useState<string[]>(Array(props.length).fill(""));

  function readCode(index: number, event: any) {
    console.log(index);
    console.log(event.target.value);

    var valueCopy = [...codeValue];
    valueCopy[index] = event.target.value;

    setCodeValue(valueCopy);
  }

  useEffect(() => {
    console.log(codeValue);
  }, [codeValue]);

  return (
    <div className="code-input-body">
      <div className="code-input-form">
        {codeValue.map((element, index) => (
          <input
            type="text"
            className="code-input-cell"
            maxLength={1}
            onInput={(event) => readCode(index, event)}
          />
        ))}
      </div>
    </div>
  );
}

export default CodeInput;
