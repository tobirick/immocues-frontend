import {
  composeValidators,
  combineValidators,
  isRequired,
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
  password: isRequired({ message: "Password is required" }),
  email: composeValidators(
    isValidEmail,
    isRequired({ message: "E-Mail is required" })
  )()
});

export default validate;
