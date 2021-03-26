import * as yup from "yup";

//schema
export default  yup.object().shape({
    name: yup.string()
        .required('Name is required.')
        .min(2, 'Name must be at least 2 characters long'),
    size: yup.string()
        .required('Size is required'),
    pepperoni: yup.boolean(),
    olives: yup.boolean(),
    onions: yup.boolean(),
    peppers: yup.boolean(),
    instructions: yup.string()
})