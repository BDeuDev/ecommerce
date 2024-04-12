import registerSchema from "../schemas/register";

export const validateData = async(data:any,schema:any) =>{
    try {
        const result = schema.validate(data, { abortEarly: false });
        console.error(result.error.details.path);
    if(result.error){
        return result.error
    }
    } catch (error) {
        console.log(error);
    }
}