const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";
  data.dateOfBirth = !isEmpty(data.dateOfBirth) ? data.dateOfBirth : "";
  data.shirtSize = !isEmpty(data.shirtSize) ? data.shirtSize : "Not set";
  data.gender = !isEmpty(data.gender) ? data.gender : "Not set";
  data.ethnicity = !isEmpty(data.ethnicity) ? data.ethnicity : "";
  data.github = !isEmpty(data.github) ? data.github : "";
  data.linkedin = !isEmpty(data.linkedin) ? data.linkedin : "";
  data.school = !isEmpty(data.school) ? data.school : "";
  data.graduationYear = !isEmpty(data.graduationYear) ? data.graduationYear : "";
  data.levelOfStudy = !isEmpty(data.levelOfStudy) ? data.levelOfStudy : "Not set";
  data.major = !isEmpty(data.major) ? data.major.split(",") : "";
  data.dietaryRestrictions = !isEmpty(data.dietaryRestrictions) ? data.dietaryRestrictions : "";
  data.specialNeeds = !isEmpty(data.specialNeeds) ? data.specialNeeds : "";
  data.emergencyName = !isEmpty(data.emergencyName) ? data.emergencyName : "";
  data.emergencyNumber = !isEmpty(data.emergencyNumber) ? data.emergencyNumber : "";
  data.heardFrom = !isEmpty(data.heardFrom) ? data.heardFrom : "";

  if (!isEmpty(data.firstName)) {
    if (!Validator.isLength(data.firstName, { min: 2, max: 20 })) {
      errors.firstName = "First Name needs to be between 2 and 20 characters";
    }
  }
  if (!isEmpty(data.lastName)) {
    if (!Validator.isLength(data.lastName, { min: 2, max: 20 })) {
      errors.lastName = "Last Name needs to be between 2 and 20 characters";
    }
  }
  if (!isEmpty(data.dateOfBirth)) {
    try {
      const now = new Date().getFullYear();
      if (now - new Date(data.dateOfBirth).getFullYear() < 13)
        errors.dateOfBirth = "Must be older than 13 years of age";
    } catch (err) {
      error.dateOfBirth = "Invalid date";
    }
  }

  if (!isEmpty(data.ethnicity)) {
    if (!Validator.isLength(data.ethnicity, { min: 2, max: 50 })) {
      errors.ethnicity = "Ethnicity needs to be between 2 and 50 characters";
    }
  }
  if (!isEmpty(data.major)) {
    if (data.major.length > 5) {
      errors.major = "You cannot set more than 5 majors";
    }
    data.major.forEach(e => {
      if (!Validator.isLength(e, { min: 2, max: 50 })) {
        errors.major = "Major needs to be between 2 and 50 characters";
      }
    });
  }
  if (!isEmpty(data.dietaryRestrictions)) {
    if (!Validator.isLength(data.dietaryRestrictions, { min: 2, max: 200 })) {
      errors.dietaryRestrictions = "Dietary Restrictions need to be between 2 and 200 characters";
    }
  }
  if (!isEmpty(data.specialNeeds)) {
    if (!Validator.isLength(data.specialNeeds, { min: 2, max: 200 })) {
      errors.specialNeeds = "Special Needs need to be between 2 and 200 characters";
    }
  }
  if (!isEmpty(data.graduationYear)) {
    if (!Validator.isLength(data.graduationYear, { min: 2, max: 4 })) {
      errors.graduationYear = "Graduation Year needs to be between 2 and 4 characters";
    }
  }
  if (!isEmpty(data.heardFrom)) {
    if (!Validator.isLength(data.heardFrom, { min: 2, max: 50 })) {
      errors.heardFrom = "Answer needs to be between 2 and 50 characters";
    }
  }

  if (!isEmpty(data.github)) {
    if (!Validator.isURL(data.github)) {
      errors.website = "Not a valid URL";
    }
  }
  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Not a valid URL";
    }
  }
  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "Not a valid URL";
    }
  }

  if (!isEmpty(data.phoneNumber)) {
    if (!Validator.isMobilePhone(data.phoneNumber)) {
      errors.phoneNumber = "Not a valid Phone Number";
    }
  }

  if (data.shirtSize !== "Not set") {
    const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
    if (!sizes.includes(data.shirtSize)) {
      errors.shirtSize = "not a valid size";
    }
  }

  if (data.gender !== "Not set") {
    const sizes = ["Male", "Female", "Other", "Prefer not to say"];
    if (!sizes.includes(data.gender)) {
      errors.gender = "not a valid gender";
    }
  }

  if (!isEmpty(data.emergencyNumber)) {
    if (!Validator.isMobilePhone(data.emergencyNumber)) {
      errors.emergencyNumber = "Not a valid Phone Number";
    }
  }

  if (!isEmpty(data.emergencyName)) {
    if (!Validator.isLength(data.emergencyName, { min: 5, max: 20 })) {
      errors.emergencyName = "Name needs to be between 5 and 20 characters";
    }
  }

  isComplete = () => {
    if (
      data.firstName &&
      data.lastName &&
      data.phoneNumber &&
      data.dateOfBirth &&
      data.shirtSize != "Not set" &&
      data.gender != "Not set" &&
      data.ethnicity != "Not set" &&
      data.school &&
      data.graduationYear &&
      data.levelOfStudy != "Not set" &&
      data.emergencyName &&
      data.emergencyNumber
    ) {
      return true;
    }
    return false;
  };

  return {
    errors,
    isValid: isEmpty(errors),
    isComplete: isComplete()
  };
};
