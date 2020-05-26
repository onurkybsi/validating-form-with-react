export default function ValidateData(data, rules) {
  let validation = {
    errors: {},
    valid: true,
  };
  for (let obj in rules) {
    validation.errors[obj] = [];
    if (rules[obj].hasOwnProperty("required")) {
      if (data[obj] === "" || data[obj] == null) {
        validation.errors[obj].push("required");
        validation.valid = false;
      }
    }
    if (rules[obj].hasOwnProperty("minLength")) {
      if (
        String(data[obj]).length < rules[obj].minLength ||
        data[obj] == null
      ) {
        validation.errors[obj].push("minLength");
        validation.valid = false;
      }
    }
    if (rules[obj].hasOwnProperty("onlyLetter")) {
      if (String(data[obj]).match(/\d+/g) != null || data[obj] == null) {
        validation.errors[obj].push("onlyLetter");
        validation.valid = false;
      }
    }
    if (rules[obj].hasOwnProperty("email")) {
      if (
        !String(data[obj]).endsWith("@onurkayabasi.com") ||
        data[obj] == null
      ) {
        validation.errors[obj].push("email");
        validation.valid = false;
      }
    }
    if (rules[obj].hasOwnProperty("date")) {
      if (data[obj] == null) {
        validation.errors[obj].push("date");
        validation.valid = false;
      } else {
        let date_regex = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
        let dayOfMounth = parseInt(data[obj].substring(3, 5)) > 12;
        let mounth = parseInt(data[obj].substring(0, 3)) > 31;

        if (!date_regex.test(data[obj]) || dayOfMounth || mounth) {
          validation.errors[obj].push("date");
          validation.valid = false;
        }
      }
    }
  }

  validation.errors.conditions = [];
  if (!data["conditions"] || data["conditions"] == null) {
    validation.errors["conditions"].push("conditions");
    validation.valid = false;
  }

  return validation;
}
