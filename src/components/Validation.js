const Validation = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = '* Name is required';
  } else if (!values.name.match(/^[a-zA-Z\\s]*$/i)) {
    errors.name = '* Invalid characters';
  }
  if (!values.email) {
    errors.email = '* Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = '* Email is invalid';
  }
  if (!values.password) {
    errors.password = '* Password is required';
  } else if (values.password.length < 8) {
    errors.password = '* Password must be of 8 characters';
  }
  return errors;
};
export default Validation;
