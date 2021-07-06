import React from 'react';
import classes from './ProductPreview.module.css'

const currentHour = new Date().getHours() > 9 ? new Date().getHours() : "0" + new Date().getHours();
const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : "0" + new Date().getMinutes();

const ProductPreview = () => {
    return (
        <div className={classes.productPreview}>
            <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview" />

            {/*Time Section */}
            <div className={classes.timeSection}>
                <p>{`${currentHour}:${currentMinutes}`}</p>
            </div>
            {/* <div className={classes.heartBeatSection}>
                <i class="fas fa-heartbeat"></i>
                <p>78</p>
            </div> */}
        </div>
    );

}

export default ProductPreview;