export default function ValidateData(data, rules) {
  let errors = {
    valid: true,
  };
  for (let obj in rules) {
    errors[obj] = [];
    if (rules[obj].hasOwnProperty("required")) {
      if (data[obj] === "") {
        errors[obj].push("required");
        errors.valid = false;
      }
    }
    if (rules[obj].hasOwnProperty("minLength")) {
      if (String(data[obj]).length < rules[obj].minLength) {
        errors[obj].push("minLength");
        errors.valid = false;
      }
    }
    if (rules[obj].hasOwnProperty("onlyLetter")) {
      if (String(data[obj]).match(/\d+/g) != null) {
        errors[obj].push("onlyLetter");
        errors.valid = false;
      }
    }
    if (rules[obj].hasOwnProperty("email")) {
      if (!String(data[obj]).endsWith("@onurkayabasi.com")) {
        errors[obj].push("email");
        errors.valid = false;
      }
    }
    if (rules[obj].hasOwnProperty("date")) {
      let date_regex = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
      let dayOfMounth = parseInt(data[obj].substring(3, 5)) > 12;
      let mounth = parseInt(data[obj].substring(0, 3)) > 31;

      if (!date_regex.test(data[obj]) || dayOfMounth || mounth) {
        errors[obj].push("date");
        errors.valid = false;
      }
    }
  }

  errors.conditions = [];
  if (!data["conditions"]) {
    errors["conditions"].push("conditions");
    errors.valid = false;
  }

  return errors;
}
