import {
  composeValidators,
  combineValidators,
  isRequired,
  isNumeric,
  hasLengthGreaterThan,
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
  password: composeValidators(
    isRequired({ message: "Password is required" }),
    hasLengthGreaterThan(5)({ message: "Password must be 6 characters" })
  )(),
  email: composeValidators(
    isValidEmail,
    isRequired({ message: "E-Mail is required" })
  )(),
  phoneNumber: composeValidators(
    isNumeric({ message: "Phone Number needs to be a number" })
  )(),
  mobilePhoneNumber: composeValidators(
    isNumeric({ message: "Mobile Phone Number needs to be a number" })
  )()
});

export default validate;
