import React, {useEffect, useRef} from 'react';
import {makeStyles} from "@material-ui/core";
import { useSelector } from 'react-redux';
import { selectPrice} from '../features/PriceSlice';

const Paypal = () =>{
    //const classes = useStyles();
    const price = useSelector(selectPrice);

    const paypal = useRef()

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Netflix Subscription",
                            amount: {
                                currency_code: "USD",
                                value: price,
                            }
                        }
                    ]
                })
            },
            onApprove :async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
            },
            onError :err => console.error(err),
        })
    }, [])
    return (
        <div ref={paypal}>
            paypal
        </div>
    )
}


/*const useStyles = makeStyles((theme) => ({
    root:{
      
    },
  }));*/
export default Paypal;