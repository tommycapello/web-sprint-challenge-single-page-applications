import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import schema from "../validation/formSchema";

//initial states

const initialValues = {
  name: '',
  size: '',
  pepperoni: false,
  mushrooms: false,
  onions: false,
  peppers: false,
  instructions: ''
}

const initialErrors = {
  name: '',
  size: ''
}

const initialDisabled = true;

function Form() {

//states

const [order, setOrder] = useState([])
const [formValues, setForm] = useState(initialValues)
const [orderErrors, setOrderErrors] = useState(initialErrors)
const [disabled, setDisabled] = useState(initialDisabled)

  //post the order
  const postOrder = (order) => {
    axios
    .post('https://reqres.in/api/pizza', order)
      .then( (res) => {
        console.log(res.data)
        setOrder([res.data,...order]);
        setForm(initialValues)
      })
      .catch(err => {
        console.log(err);
      })
  }

  const inputChange = (name, value) => {
    yup.reach(schema, name) // reaching into schema and testing each input
      .validate(value)
      .then(() => {
        setOrderErrors({
          ...orderErrors,
          [name]: "",
        });
      })
      .catch(err => {
        setOrderErrors({
          ...orderErrors,
          [name]: err.errors[0]
        })
      });
      setForm({
        ...formValues,
        [name]: value, // NOT AN ARRAY
      });
    };



  const onChange = (event) => {
    const { name, value, type, checked} = event.target
    const valueToUse = type === 'checkbox' ? checked : value
    inputChange(name, valueToUse)
}

  const submit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: ['pepperoni', 'olives', 'onions', 'peppers'].filter(topping => formValues[topping])
    }
    postOrder(newOrder)
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);


    return (
        <>
         <form className="form-container" onSubmit={onSubmit}>
            <h2>Build your own pizza!</h2>
            {/* display errors */}
            <div className="errors">
                <div>{order.name}</div>
                <div>{order.size}</div>
            </div>
            <div className="form-group inputs">
                <h3>Order Info</h3>
                {/* Text Input */}
                <label>Enter your Name:
                    <input
                    name="name"
                    type="text"
                    value={order.name}
                    onChange={onChange}/>
                </label>

                {/* Dropdown Input */}
                <label>Choose your Pizza size:
                    <select
                    name='size'
                    onChange={onChange}
                    value={order.size}
                    >
                        <option value = ''>--Select size--</option>
                        <option value = 'medium'>Medium</option>
                        <option value = 'large'>Large</option>
                        <option value = 'xlarge'>X-Large</option>
                    </select>
                </label>

                {/* Checkbox Inputs */}
                <h3>Add Toppings:</h3>
                <label>Pepperoni
                    <input
                        type='checkbox'
                        name='pepperoni'
                        checked={order.pepperoni}
                        onChange={onChange}
                    />
                </label>

                <label>Olives
                    <input
                        type='checkbox'
                        name='olives'
                        checked={order.olives}
                        onChange={onChange}
                        />
                </label>

                <label>Onions
                    <input
                        type='checkbox'
                        name='onions'
                        checked={order.onions}
                        onChange={onChange}
                        />
                </label>

                <label>Peppers
                    <input
                        type='checkbox'
                        name='peppers'
                        checked={order.peppers}
                        onChange={onChange}
                        />
                </label>

                <label>Special Instructions
                    <input
                    name='instructions'
                    type='text'
                    onChange={onChange}
                    value={order.instructions}/>
                </label>

                <Link to={
                  {pathname:"/confirmation", values:{order}
                }}>
                <button id={'submitButton'} disabled={disabled}>Add to Order</button>
                </Link>
               </div>
        </form>
        </>
    );}

export default Form