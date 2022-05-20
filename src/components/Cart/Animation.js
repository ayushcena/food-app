import React from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const Animation = () => {
    const history = useHistory();
    React.useEffect(() => {
        setTimeout(async() => {
            try {
                await axios
                    .get("https://api.eatx.in/api/food_order")
                    .then((response) => {
                        history.push('/');
                        window.prompt("Order Placed!!");
                        // console.log(response);
                    })
                    .catch((err) => {
                        window.prompt("Something unusual happened");
                        console.log(err);
                    });
            } catch (error) {
                console.log(error);
            }
        }, 1000);
    }, []);

    return (
        <div><img src='../../images/orderplaced.gif'></img></div>
    )
}

export default Animation