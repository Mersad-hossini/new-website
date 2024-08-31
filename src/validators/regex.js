const emailRegex = (value) => {
  const emailPattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
  return emailPattern.test(value);
};

const codeMelliRegex = (value) => {
  // بررسی می‌کنیم که کد ملی باید دقیقاً شامل 10 رقم باشد
  const melliPattern = /^\d{10}$/;
  if (!melliPattern.test(value)) {
    return false;
  }

  // بررسی می‌کنیم که کد ملی از ارقام تکراری مثل 0000000000، 1111111111 و غیره تشکیل نشده باشد
  if (/^(\d)\1{9}$/.test(value)) {
    return false;
  }

  // محاسبه رقم کنترل بر اساس الگوریتم کد ملی
  const check = parseInt(value[9]);
  const sum = [...value]
    .slice(0, 9)
    .reduce((acc, digit, i) => acc + parseInt(digit) * (10 - i), 0);
  const remainder = sum % 11;

  // بررسی نهایی اعتبار کد ملی
  return (
    (remainder < 2 && check === remainder) ||
    (remainder >= 2 && check === 11 - remainder)
  );
};

const phoneNumberRegex = (value) => {
  const phoneNumberPattern = /^09(0|1|2|3|9)[0-9]{8}$/g;
  // /^(?:(?:(?:\\+?|00)(98))|(0))?((?:90|91|92|93|99)[0-9]{8})$/g
  return phoneNumberPattern.test(value);
};

const landlinePhoneNumberRegex = (value) => {
  const landLinePattern = /^0\d{2,3}\d{8}$/g;
  return landLinePattern.test(value);
};

export default {
  emailRegex,
  codeMelliRegex,
  phoneNumberRegex,
  landlinePhoneNumberRegex,
};
