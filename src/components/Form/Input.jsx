import React, { useEffect, useReducer } from "react";
import validator from "../../validators/validator";

export default function Input(props) {
  const inputReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE": {
        return {
          ...state,
          value: action.value,
          isValid: validator(action.value, action.validations),
        };
      }
      default: {
        return state;
      }
    }
  };

  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const { value, isValid } = mainInput;
  const { id, onInputHandler } = props;

  useEffect(() => {
    onInputHandler(id, value, isValid);
  }, [value]);

  const onChangeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validations: props.validations,
      isValid: true,
    });
  };

  const element =
    props.element === "input" ? (
      <input
        className={props.className}
        type={props.type}
        placeholder={props.placeholder}
        onChange={onChangeHandler}
        value={mainInput.value}
      />
    ) : (
      <textarea
        className={props.className}
        placeholder={props.placeholder}
        onChange={onChangeHandler}
        value={mainInput.value}
      />
    );

  return <>{element}</>;
}