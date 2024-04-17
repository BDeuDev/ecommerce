import Joi from 'joi';
import DataType from '../../types/dataType';

async function validateData(data: DataType, schema: Joi.ObjectSchema<any>) {
    try {
        const {error} = schema.validate(data);

        if (error) return true
        else return false

    } catch (error) {
        console.log(error)
    }
}
export default validateData;