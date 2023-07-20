
const validate = (values) => {

    const errors = {};
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
    const validEmails = ['admin', 'user'];
    const validPasswords = ['admin', 'user'];



    // EMAIL VALIDATION

    if (!values.email) {
      errors.email = 'Email is required!';
    }else if (validEmails.includes(values.email)) {
      errors.email = undefined;
      }
     else if (!regexEmail.test(values.email)) {
      errors.email = 'Enter a valid email';
    }else if (values.email.includes(" ")) {
      errors.email = 'No spaces allowed!';
    }

    // PASSWORD VALIDATION

    if (!values.password) {
      errors.password = 'Password is required!';
    }else if (validPasswords.includes(values.password)) {
      errors.password = undefined;
    }else if (values.password.includes(" ")) {
      errors.password = 'No spaces allowed!';

    }else if (values.password.length < 8) {
      errors.password = 'Password must contain minimum 8 characters!';

    }else if (!regexPassword.test(values.password)) {
      errors.password = 'Weak password';

    }
  return errors}
  
  export default validate;
  