export default function ValidateData(data, rules) {
  let errors = {
    valid: true,
  };

  Object.keys(rules).forEach((rule) => {
    errors[rule] = [];
    
    if (rule.hasOwnProperty("required")) {
      if (!rule.required) {
        errors[rule].push("required");
        errors.valid = false;
      }
    }
    if (rule.hasOwnProperty("minLength")) {
      if (String(data[rule]).length < rule.length) {
        errors[rule].push("minLength");
        errors.valid = false;
      }
    }
    if (rule.hasOwnProperty("onlyLetter")) {
      if (String(data[rule]).match(/\d+/g) != null) {
        errors[rule].push("onlyLetter");
        errors.valid = false;
      }
    }
    if (rule.hasOwnProperty("email")) {
      if (!String(data[rule]).endsWith("@onurkayabasi.com")) {
        errors[rule].push("email");
        errors.valid = false;
      }
    }
    if (rule.hasOwnProperty("date")) {
      let date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

      if (!date_regex.test(data[rule])) {
        errors[rule].push("date");
        errors.valid = false;
      }
    }
  });

  return errors;
}
