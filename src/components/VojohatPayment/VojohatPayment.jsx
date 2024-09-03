import React, { useState } from "react";
import "./VojohatPayment.css";

import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
  landlinePhoneNumberValidator,
  phoneValidator,
} from "../../validators/rules";
import { useForm } from "../../hooks/useForm";
import Input from "../Form/Input";

export default function VojohatPayment() {
  let [genderRaido, setGenderRaido] = useState("");
  let [getReceipt, setGetReceipt] = useState(false);

  const [formState, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      landPhone: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
      codePosti: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  return (
    <>
      <div className="wrapper">
        <div className="formVojohat">
          <h2 className="text-center vojohat-title">
            فرم ثبت نام در سامانه پرداخت وجوهات
          </h2>
          <form id="registrationForm" dir="rtl">
            <Input
              className="input"
              id="name"
              type="text"
              placeholder="نام و نام خانوادگی "
              element="input"
              validations={[
                requiredValidator(),
                minValidator(4),
                maxValidator(8),
              ]}
              onInputHandler={onInputHandler}
            />
            <Input
              className="input"
              id="email"
              type="text"
              placeholder="ایمیل "
              element="input"
              validations={[requiredValidator(), emailValidator()]}
              onInputHandler={onInputHandler}
            />
            <Input
              className="input"
              id="landPhone"
              type="text"
              placeholder="تلفن ثابت"
              element="input"
              validations={[
                requiredValidator(),
                landlinePhoneNumberValidator(),
              ]}
              onInputHandler={onInputHandler}
            />
            <Input
              className="input"
              id="phone"
              type="text"
              placeholder="تلفن همراه"
              element="input"
              validations={[requiredValidator(), phoneValidator()]}
              onInputHandler={onInputHandler}
            />

            <div className="d-flex align-items-center">
              <h4 className="gender-title">جنسیت:</h4>
              <label
                className={`gender-button ${
                  genderRaido === "female" ? "btn btn-success" : ""
                }`}
                htmlFor="female"
                onClick={() => setGenderRaido("female")}
              >
                زن
              </label>
              <input
                type="radio"
                name="gender"
                value="female"
                className="d-none female"
              />

              <label
                className={`gender-button ${
                  genderRaido === "male" ? "btn btn-success" : ""
                }`}
                htmlFor="male"
                onClick={() => setGenderRaido("male")}
              >
                مرد
              </label>
              <input
                type="radio"
                name="gender"
                value="male"
                className="d-none male"
              />
            </div>
          </form>

          <div className="d-flex align-items-center justify-content-center receipt-check">
            <input
              type="checkbox"
              id="receipt"
              onClick={() => setGetReceipt(!getReceipt)}
            />
            <label htmlFor="receipt">دریافت رسید فیزیکی</label>
          </div>

          <form
            id="registrationForm"
            dir="rtl"
            className={`${!getReceipt ? "d-none" : ""}`}
          >
            <Input
              className="input"
              id="codePosti"
              type="text"
              placeholder="کدپستی"
              element="input"
              validations={[requiredValidator()]}
              onInputHandler={onInputHandler}
            />
            <Input
              className="input text-address"
              id="address"
              type="text"
              placeholder="آدرس"
              element="textarea"
              validations={[requiredValidator()]}
              onInputHandler={onInputHandler}
            />
          </form>
        </div>
      </div>
    </>
  );
}