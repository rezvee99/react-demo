import React, { useState } from 'react';
import classes from './App2.module.css';
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import Topbar from './Topbar';
import { ProductData } from './data/data'


export default function App2() {
    const [productData, setproductData] = useState(ProductData);
    const [previewImagePos, setPreviewImagePos] = useState(0);
    const [featurePos, setfeaturePos] = useState(0);
    

    const onColorOPtionClick = (pos) => {
        setPreviewImagePos(pos);
    }
    const onFeatureItemClick = (pos) => {
        setfeaturePos(pos);
    }
    // console.log(details);

    return (
        <div className="App2">
            <header className="App-header">
                <Topbar />
            </header>
            <div className={classes.mainContainer}>
                <div className={classes.productPreview}>
                    <ProductPreview previewImage={ProductData.colorOptions[previewImagePos].imageUrl} featurePos={featurePos} />
                </div>
                <div className={classes.productData}>
                    <ProductDetails data={productData} previewImagePos={previewImagePos} onColorOPtionClick={onColorOPtionClick}
                     onFeatureItemClick={onFeatureItemClick} featurePos={featurePos} />
                </div>
            </div>
        </div>
    )
}
