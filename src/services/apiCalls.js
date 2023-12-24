import axios from 'axios';


// Register
export const registerUser = async (body) => {

    return await axios.post('http://localhost:3000/register', body);
  };