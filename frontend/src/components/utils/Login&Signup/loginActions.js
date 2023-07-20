import axios from 'axios';
import validate from './formValLogin';

const inputHandler = (e, setInput, input) => {
  setInput({
    ...input,
    [e.target.name]: e.target.value
  });
};

const loginClicked = async (input, setFormError, navigate) => {
  const errors = validate(input);

  if (
    Object.keys(errors).length === 0 ||
    (input.email === 'admin' && input.password === 'admin') ||
    (input.email === 'user' && input.password === 'user')
  ) {
    try {
      const response = await axios.post(`http://localhost:5000/login`, input);

      if (response.data.message === 'Login Successful') {
        const token = response.data.token;
        const userId = response.data.data._id;
        sessionStorage.setItem('userToken', token);
        sessionStorage.setItem('userId', userId);
        alert(response.data.message);
        navigate('/home');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during login. Please try again later.');
    }
  } else {
    setFormError(errors);
  }
};

export { inputHandler, loginClicked };
