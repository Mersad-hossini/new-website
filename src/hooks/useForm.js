import { useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE": {
      let isFormValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          isFormValid = isFormValid && action.isValid;
        } else {
          isFormValid = isFormValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isFormValid: isFormValid,
      };
    }

    default: {
      return state;
    }
  }
};

export const useForm = (initInputs, initFormIsValid) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initInputs,
    isFormValid: initFormIsValid,
  });

  const onInputHandler = (id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      inputId: id,
      value,
      isValid,
    });
  };

  return [formState, onInputHandler];
};