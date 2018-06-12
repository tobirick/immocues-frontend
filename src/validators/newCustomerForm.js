import {
  composeValidators,
  combineValidators,
  isRequired,
  isNumeric,
  createValidator
} from "revalidate";

const isValidEmail = createValidator(
  message => value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return message;
    }
  },
  "Invalid email address"
);

const validate = combineValidators({
  firstName: isRequired({ message: "First Name is required" }),
  lastName: isRequired({ message: "Last Name is required" }),
  eMail: composeValidators(isValidEmail)(),
  phoneNumber: composeValidators(
    isNumeric({ message: "Phone Number needs to be a number" })
  )(),
  mobilePhoneNumber: composeValidators(
    isNumeric({ message: "Mobile Phone Number needs to be a number" })
  )()
});

export default validate;
