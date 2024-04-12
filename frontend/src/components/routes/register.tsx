import { useState } from "react";
import axios from 'axios';
import { validateData } from "../../auth/joiHandler/joiHandler";
import registerSchema from "../../auth/schemas/register";

const Register = () => {
    const labels: string[] = [
        'Username',
        'Your Name',
        'Lastname',
        'Email',
        'Password',
    ];
    const placeholders:string[] = [
        'At least 8 characters',
        'At least 8 characters',
        'At least 8 characters',
        'example@gmail.com',
        'At least 8 characters',
    ]
    const names:string[] = [
        'username',
        'name',
        'lastname',
        'email',
        'password',
    ];
    const [formData, setFormData] = useState<{ [key: string]: string }>({});
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors: { [key: string]: string } = {};
    if (!formData.username) {
        newErrors.username = 'El nombre de usuario es requerido';
    }
    if (!formData.password) {
        newErrors.password = 'La contraseña es requerida';
    }
    setErrors(newErrors);
    validateData(formData,registerSchema)
    if(Object.keys(newErrors).length === 0 ){
        try {
            const response = await axios.post('http://localhost:3000/user/register', formData);
            console.log(response.data);
        } catch (error) {
            console.error('Error al enviar los datos al servidor:', error);
        }
    }
};

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value
    });

    // Limpiar el mensaje de error cuando se modifica el input
    setErrors({
        ...errors,
        [event.target.name]: '',
    });
};

return (
    <div className="w-full h-full bg-[#F0F0F0] absolute font-raleway flex justify-center items-center">
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl w-full max-w-sm mx-auto">
        <div className="flex flex-col items-center justify-center mb-5">
                    <h1 className="text-black text-3xl font-bold">Create account</h1>
                </div>
            {labels.map((text, index) => (
                <div key={index} className="mx-2 my-3">
                    <label htmlFor={`${names[index]}`} className="text-sm font-bold">{text}</label>
                    <input
                        type={index === 4 ? 'password' : 'text'}
                        className="p-1 text-base rounded-lg shadow-sm outline-1 w-full border mb-2"
                        placeholder={placeholders[index]}
                        name={`${names[index]}`}
                        onChange={handleInputChange}
                    />
                    {errors[names[index]] && <span className="text-red-600 bg-red-400 p-1 bg-opacity-25 font-semibold rounded-md text-sm">{errors[names[index]]}</span>}
                </div>
            ))}
            <div className="mx-2 mt-5">
                    <input type="submit" value="Continue" className="cursor-pointer border text-lg font-bold p-3 rounded-xl w-full transition-all duration-700 ease-in-out transform text-white bg-[#143D59] bg-opacity-90 hover:bg-opacity-100 hover:outline-1 hover:outline shadow-md" />
                </div>
        </form>
    </div>
);
}

export default Register;