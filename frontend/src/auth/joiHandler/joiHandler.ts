

export const validateData = async(data:any,schema:any) =>{
    try {
        const result = schema.validate(data, { abortEarly: false });
   
    if(result.error){
        return result.error.details
    }
    } catch (error) {
        console.log(error);
    }
}