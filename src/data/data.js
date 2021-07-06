const blogArr = [
    {
        id: 1,
        title: "Blog Title 1",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quos, facere id debitis itaque eaque
        facilis cupiditate iste aspernatur doloribus quisquam similique, totam fuga iusto quaerat voluptate
        laboriosam asperiores sit.`,
        likeCount: 0,
    },
    {
        id: 2,
        title: "Blog Title 2",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quos, facere id debitis itaque eaque
        facilis cupiditate iste aspernatur doloribus quisquam similique, totam fuga iusto quaerat voluptate
        laboriosam asperiores sit.`,
        likeCount: 0,
    },
    {
        id: 3,
        title: "Blog Title 3",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quos, facere id debitis itaque eaque
        facilis cupiditate iste aspernatur doloribus quisquam similique, totam fuga iusto quaerat voluptate
        laboriosam asperiores sit.`,
        likeCount: 0,
    }
];
const ProductData = {
    title: 'FitBit 19 - The Smartest Watch',
    description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
}

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export { blogArr,ProductData};