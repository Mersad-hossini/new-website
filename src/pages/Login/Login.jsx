import React from "react";
import { useForm } from "../../hooks/useForm";
import Input from "../../components/Form/Input";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
  landlinePhoneNumberValidator,
  phoneValidator,
  codeMelliValidator
} from "../../validators/rules";


export default function Login() {

  const [formState, onInputHandler] = useForm({
    mellie: {
      value: "",
      isValid: false
    },
  }, false)

  console.log(formState);
  
  return(
    <div>
      <form action="#">
        <Input
          className="example class"
          id="mellie"
          type="text"
          placeholder="کد ملی"
          element="input"
          validations={[
            codeMelliValidator()
          ]}
          onInputHandler={onInputHandler}
        />
      </form>
    </div>
  );
}
