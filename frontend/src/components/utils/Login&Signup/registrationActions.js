import axios from 'axios';
import validate from './formValRegister';

const inputHandler = (e, setFormValues, formValues) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const registerClicked = async(formValues, setFormError, navigate) => {
    const errors = validate(formValues);
    setFormError(errors);
    if (Object.keys(errors).length === 0) {

        try {
            const response = await axios
            .post('http://localhost:5000/register', formValues);

            if (response.data.message === 'Registration Successful') {
                alert(response.data.message);
                navigate('/');}
            else{
                alert(response.data.message);

            }
        } catch (error) {
                console.error(error);
                alert('An error occurred during registration. Please try again later.');
        }  
        }else{
            setFormError(errors);
        }};
    
export { inputHandler, registerClicked};