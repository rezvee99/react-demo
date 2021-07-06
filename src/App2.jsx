import React from 'react';
import classes from './App2.module.css';
import { ProductData } from './data/data';
import ProductPreview from './ProductPreview';
const logo = "https://governmentjobswork.com/wp-content/uploads/2020/10/Amazon-Jobs.png";



export default function App2() {
    return (
        <div className="App2">
            <header className="App-header">
                <nav className={classes.topbar}>
                    <img src={logo} alt="Amazon Logo" />
                </nav>
            </header>
            <div className={classes.mainContainer}>
                <div className={classes.productPreview}>
                    <ProductPreview />
                </div>


                <div className={classes.productData}>
                    <h1 className={classes.productTitle}>{ProductData.title} </h1>
                    <p className={classes.productDescription}>{ProductData.description} </p>
                    <h3 className={classes.selectionHeading}>Select Color</h3>
                    <div>
                        <img className={[classes.productionImage, classes.selectedProductImage].join(" ")} src="https://imgur.com/iOeUBV7.png"
                            alt="Black Colored Watch" />
                        <img className={classes.productionImage} src="https://imgur.com/PTgQlim.png"
                            alt="Red Colored Watch" />
                        <img className={classes.productionImage} src="https://imgur.com/Mplj1YR.png"
                            alt="Blue Colored Watch" />
                        <img className={classes.productionImage} src="https://imgur.com/xSIK4M8.png"
                            alt="Purple Colored Watch" />
                    </div>
                    <h3 className={classes.selectionHeading}>Features</h3>
                    <div>
                        <button className={[classes.featureItem, classes.selectedFeatureItem].join(' ')}>Time</button>
                        <button className={classes.featureItem}>Heart Rate</button>
                    </div>
                    <button className={classes.primaryButton}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}
