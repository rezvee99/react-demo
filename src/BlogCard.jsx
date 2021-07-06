import React from 'react';
import {dumplogs} from './utils'

import classes from './BlogCard.module.css'

const BlogCard = (prop) => {
    dumplogs(prop);
    // const[like,likeCount]=useState(0);

// const onLikeButton =()=>{
//     likeCount(like+1);
//     console.log(like);
// }
    return (
        <div className={classes.blogCard} >
            <h3>{prop.title} </h3>
            <p>{prop.description}</p>
            <p>Like Count {prop.likeCount}</p>
            <button onClick={prop.onLikeBntClick}>Like</button>

        </div>
    )
}


export default BlogCard;
