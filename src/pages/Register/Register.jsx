import React, { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import "./Register.css";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
  landlinePhoneNumberValidator,
  phoneValidator,
  codeMelliValidator,
} from "../../validators/rules";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

export default function Register() {
  let [captchaCode, setCaptchaCode] = useState("");
  let [isReCaptcha, setisReCaptcha] = useState(false);
  const [formState, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      familyName: {
        value: "",
        isValid: false,
      },
      melli: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    loadCaptchaEnginge(5);
  }, []);

  const reloadCaptcha = () => {
    loadCaptchaEnginge(5); // Reload the CAPTCHA with 6 characters
  };

  const onsubmitHandler = (event) => {
    event.preventDefault();
  };

  const captchaTest = () => {
    if (validateCaptcha(captchaCode) == true) {
      setisReCaptcha(true);
    } else {
      alert("درست وارد کن");
    }
  };

  // console.log(formState);

  return (
    <>
      <div className="form-wrapper mt-4 mb-4">
        <div className="container main">
          <div className="row mt-4 mb-4">
            <div className="col-md-6 side-image">
              <div className="text"></div>
            </div>

            <form
              action="#"
              method="get"
              autoComplete="off"
              className="col-md-6 left"
              onClick={onsubmitHandler}
              dir="rtl"
            >
              <div className="input-box">
                <h3> اکانت خود را بسازید </h3>
                <div className="input-field">
                  <Input
                    className="input"
                    id="name"
                    type="text"
                    placeholder="نام خود را وارد کنید"
                    element="input"
                    validations={[
                      requiredValidator(),
                      minValidator(4),
                      maxValidator(8),
                    ]}
                    onInputHandler={onInputHandler}
                  />
                </div>
                <div className="input-field">
                  <Input
                    className="input"
                    id="familyName"
                    type="text"
                    placeholder="فامیلی خود را وارد کنید"
                    element="input"
                    validations={[
                      requiredValidator(),
                      minValidator(4),
                      maxValidator(8),
                    ]}
                    onInputHandler={onInputHandler}
                  />
                </div>
                <div className="input-field">
                  <Input
                    className="input"
                    id="melli"
                    type="text"
                    placeholder="لطفا کد ملی خود را وارد کنید"
                    element="input"
                    validations={[requiredValidator(), codeMelliValidator()]}
                    onInputHandler={onInputHandler}
                  />
                </div>
                <div className="input-field">
                  <Input
                    className="input"
                    id="phone"
                    type="text"
                    placeholder="لطفا شماره خود را وارد کنید"
                    element="input"
                    validations={[requiredValidator(), phoneValidator()]}
                    onInputHandler={onInputHandler}
                  />
                </div>

                <div className="captcha" dir="ltr">
                <LoadCanvasTemplateNoReload />

                <div>
                  <button className="captcha-button" onClick={captchaTest}>
                    تایید
                  </button>

                  <input
                    type="text"
                    id="captchaInput"
                    onChange={(event) => setCaptchaCode(event.target.value)}
                    placeholder="کد امنیتی را وارد کنید"
                  />
                </div>
                <button
                  type="button"
                  className="refreshCaptcha"
                  id="reload_href"
                  onClick={reloadCaptcha}
                ></button>
                </div>

                <div className="input-field">
                  <Button
                    className={`verifyCaptcha w-100 ${
                      formState.isFormValid && isReCaptcha
                        ? "btn btn-success"
                        : "btn btn-danger"
                    }`}
                    type="submit"
                    disabled={!formState.isFormValid || !isReCaptcha}
                  >
                    تایید
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
