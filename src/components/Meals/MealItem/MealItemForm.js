import { Button } from "@material-ui/core";
import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "/Users/vatsalkapadia/Downloads/React Food Delivery app/fooddelivery/src/components/Meals/MealItem/MealForm.module.css"
const MealItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef= useRef();

    const submitHandler = (event) => 
    {
        event.reventDefault();
        const eneteredAmount = amountInputRef.current.value;
        const enteredAmountNumber= eneteredAmount;

        if(
            eneteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 10
        ){
            setAmountIsValid(false);
            return;
        }
        amountInputRef.current.value="0";
    };

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
            ref={amountInputRef}
            lable="Amount"
            input= {{
                id:"amount_" + props.id,
                type:"number",
                min:"1",
                max:"10",
                step:"1",
                defaultValue:"0"}}/>
        
            <Button>+add</Button>
            {!amountIsValid && <p>Please enter a valid amount (1-10)</p>}
        </form>

    );
};

export default MealItemForm;