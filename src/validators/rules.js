const requiredValue = "REQUIRED_VALUE";
const minValue = "MIN_VALUE";
const maxValue = "MAX_VALUE";
const emailValue = "EMAIL_VALUE";
const phoneValue = "PHONE_VALUE";
const codeMelliValue = "CODE_MELLI_VALUE";
const LandlinePhoneNumberValue = "LANDLINE_PHONE_NMBER_VALUE";

export const requiredValidator = () => ({
  value: requiredValue,
});

export const minValidator = (min) => ({
  value: minValue,
  min,
});

export const maxValidator = (max) => ({
  value: maxValue,
  max,
});

export const emailValidator = () => ({
  value: emailValue,
});

export const phoneValidator = () => ({
  value: phoneValue,
});

export const landlinePhoneNumberValidator = () => ({
  value: LandlinePhoneNumberValue,
});

export const codeMelliValidator = () => ({
  value: codeMelliValue,
});

export default {
  requiredValue,
  minValue,
  maxValue,
  emailValue,
  phoneValue,
  LandlinePhoneNumberValue,
  codeMelliValue,
};