const validate = (values) => {

    const errors = {};
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/

    if (!values.name) {
      errors.name = 'Name is required!';
    }else if (values.name.includes(" ")) {
      errors.name = 'No spaces allowed!';

    }

    // EMAIL VALIDATION

    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regexEmail.test(values.email)) {
      errors.email = 'Enter a valid email';
    }else if (values.email.includes(" ")) {
      errors.email = 'No spaces allowed!';
    }

    // USERNAME VALIDATION

    if (!values.username) {
      errors.username = 'Username is required!';
    }else if (values.username.includes(" ")) {
      errors.username = 'No spaces allowed!';
    }

    // PASSWORD VALIDATION

    if (!values.password) {
      errors.password = 'Password is required!';
    }
    else if (values.password.includes(" ")) {
      errors.password = 'No spaces allowed!';

    }else if (values.password.length < 8) {
      errors.password = 'Password must contain minimum 8 characters!';

    }else if (!regexPassword.test(values.password)) {
      errors.password = 'Weak password';

    }

    // CONFIRM PASSWORD VALIDATION

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Field required!';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match!';
    } 
    return errors;
  };

  export default validate;