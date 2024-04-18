import { useState } from "react";
import axios from 'axios';
import { validateData } from "../../auth/joiHandler/joiHandler";
import { username, name, lastname, email, password, registerSchema } from "../../auth/schemas/register";
import { useNavigate } from "react-router";
import IMessage from "../../interfaces/IMessage";
import IValidationError from "../../interfaces/IValidationError";
const Register = () => {
    const labels: string[] = [
        'Username',
        'Your Name',
        'Lastname',
        'Email',
        'Password',
    ];
    const placeholders: string[] = [
        'Username',
        'Name',
        'Lastname',
        'example@gmail.com',
        'Password',
    ]
    const names: string[] = [
        'username',
        'name',
        'lastname',
        'email',
        'password',
    ];
    const schemas = [
        username,
        name,
        lastname,
        email,
        password
    ]

    const [formData, setFormData] = useState<{ [key: string]: string }>({});
    const [errores, setErrores] = useState<IValidationError>();
    const [message, setMessage] = useState<IMessage>()
    const [register,setRegister] = useState<boolean>(false)
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = await validateData(formData, registerSchema)
        setErrores(result)

        if (!errores) {

            await axios.post('http://localhost:3000/user/register', formData)
                .then((res) => {
                    setRegister(true)
                })
                .catch((err) => {
                    if(err.response.status === 409){
                        setMessage({message:err.response.data.error,display:true});
                    }
                })

        }
    };

    const inputCheck = (data: string, index: number) => {
        if (data) {
            const { error } = schemas[index].validate(data)
            if (error) {
                return <span className="text-red-600 bg-red-400 p-1 bg-opacity-25 font-semibold rounded-md text-sm"
                >{error.message}</span>
            } else {
                return false;
            }
        }
    }

    const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {

        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
        setMessage({message:'',display:false})

    };

    return (
        <div className="w-full h-full bg-[#F0F0F0] absolute font-raleway flex justify-center items-center">
            {register && <div className="bg-white p-4 rounded-xl w-full max-w-sm mx-auto flex flex-col items-center justify-center font-raleway">
                    <div className="bg-green-400 text-green-600 bg-opacity-25 p-4 rounded-xl font-bold text-3xl my-2">
                        <h1>User created!😃</h1>
                    </div>
                    <div className="my-2 text-lg">
                        <h1 className="text-gray-500 font-extralight">
                            Now you can <button onClick={()=>navigate('/login')} className="text-sky-600 font-bold underline p-2">Sign In</button>
                        </h1>
                    </div>
                </div>}
            {!register &&
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl w-full max-w-sm mx-auto">
            <div className="flex flex-col items-center justify-center mb-5">
                <h1 className="text-black text-3xl font-bold">Create account</h1>
            </div>
            {labels.map((text, index) => (
                <div key={index} className="mx-2 my-1">
                    <label htmlFor={`${names[index]}`} className="text-sm font-bold">{text}</label>
                    <input
                        type={index === 4 ? 'password' : 'text'}
                        className="p-1 text-base rounded-lg shadow-sm outline-1 w-full border mb-1"
                        placeholder={placeholders[index]}
                        name={`${names[index]}`}
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                    {index === 0 && message?.display && <span className="text-red-600 bg-red-400 p-1 bg-opacity-25 font-semibold rounded-md text-sm"
            >{message?.message}😢</span>}
                    {inputCheck(formData[names[index]], index)}
                </div>
            ))}
            <div className="mx-2 mt-5">
                <input type="submit" value="Continue" className="cursor-pointer border text-lg font-bold p-3 rounded-xl w-full transition-all duration-700 ease-in-out transform text-white bg-[#143D59] bg-opacity-90 hover:bg-opacity-100 hover:outline-1 hover:outline shadow-md" />
            </div>
        </form>
            }
            
        </div>
    );
}

export default Register;