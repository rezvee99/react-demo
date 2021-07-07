import React from 'react';
// import { ProductData } from './data/data';
import classes from './ProductDetails.module.css';

const ProductDetails = (prop) => {
   

    const colorOptions=prop.data.colorOptions.map((item,pos)=>{
        const classArr=[classes.productionImage];
        if(pos===prop.previewImagePos){
            classArr.push(classes.selectedProductImage);
        }
        return(
            <img key={pos} className={classArr.join(" ")} src={item.imageUrl} alt={item.styleName} onClick={()=>prop.onColorOPtionClick(pos)} />
        );
    });

    const featureList=prop.data.featureList.map((item,pos)=>{
        const classArr=[classes.featureItem];
        if(pos===prop.featurePos){
            classArr.push(classes.selectedFeatureItem);
        }
        return(
            <button key={pos} className={classArr.join(' ')} onClick={()=>prop.onFeatureItemClick(pos)} >{item}</button>
        );
    })

    return (
        <div className={classes.productData}>
            <h1 className={classes.productTitle}>{prop.data.title} </h1>
            <p className={classes.productDescription}>{prop.data.description} </p>
            <h3 className={classes.selectionHeading}>Select Color</h3>
            <div>
                {colorOptions}
               
            </div>
            <h3 className={classes.selectionHeading}>Features</h3>
            <div>
               {featureList}
            </div>
            <button className={classes.primaryButton}>Buy Now</button>
        </div>
    )
}

export default ProductDetails
