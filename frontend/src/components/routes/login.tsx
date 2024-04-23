import { useState } from "react";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import {login} from '../../redux/authSlice'
import { useNavigate } from "react-router";
import IDecodedToken from "../../interfaces/IDecodedToken";
import { useDispatch } from "react-redux";

const Login = () => {
  const labels: string[] = [
    'Your Username',
    'Password',
  ];
  const names:string[] = [
    'username',
    'password',
  ];
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/user/login', formData);
      if (response.status === 200) {
        const { token } = response.data;
        if (token) {
          sessionStorage.clear();
          sessionStorage.setItem('token', token);
          const decodedToken = jwtDecode<IDecodedToken>(token);
          const userData = { username: decodedToken.username};
          dispatch(login(userData));
          navigate("/");
        } else {
          console.log('Usuario no válido');
        }
      } 
    } catch (error) {
      console.error('Error al enviar los datos al servidor:', error);
    }
  };

  return (
    <div className="w-full h-full  absolute font-raleway flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl border-gray-500  w-full max-w-sm mx-auto">
        <div className="flex flex-col items-center justify-center mb-5">
          <h1 className="text-black text-3xl font-bold">Sign In</h1>
        </div>
        {labels.map((text, index) => (
          <div key={index} className="mx-2 my-3">
            <label htmlFor={`${names[index]}`} className="text-sm font-bold">{text}</label>
            <input
              type={index === 1 ? 'password' : 'text'}
              className="p-1 text-base rounded-lg shadow-sm border w-full "
              name={`${names[index]}`}
              onChange={handleInputChange}
              required
            />
          </div>
        ))}
        <div className="mx-2 mt-5">
          <input type="submit" value="Continue" className="cursor-pointer border text-lg font-bold p-3 rounded-xl w-full transition-all duration-700 ease-in-out transform text-white bg-[#143D59] bg-opacity-90 hover:bg-opacity-100 hover:outline-1 hover:outline shadow-md" />
        </div>
        <div className="flex flex-row items-center justify-center mt-5 mb-2 text-sm font-light text-gray-500">
            <span className="w-1/3 h-[1px] bg-gray-500 bg-opacity-35"></span>
            <p className="mx-2">New here?</p>
            <span className="w-1/3 h-[1px] bg-gray-500 bg-opacity-35"></span>
        </div>
        <div className="flex flex-col justify-center items-center">
            <button onClick={()=>navigate('/register')} className="text-blue-500 cursor-pointer p-2 underline font-medium">Create account</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

function dispatch(arg0: { payload: any; type: "auth/login"; }) {
  throw new Error("Function not implemented.");
}
