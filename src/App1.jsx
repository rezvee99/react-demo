// import react from 'react';
import Blog from './BlogCard';
import { isArrayEmpty } from './utils';
import { useState } from 'react';


import {blogArr} from './data/data';


const App1 = () => {

    const [check, setChek] = useState(false);
    const [blogs, setblogs] = useState(blogArr);


    const onLikeBntClick = (id) => {
        // alert("Button Clicked at pos => " + pos);
        // const selectedBlog = blogs.find(b => b.id === id);
        // selectedBlog.likeCount += 1;

        const newBlogs = blogs.map(b => {
            if (b.id === id) {
                b.likeCount += 1;
            }
            return b;
        })

        setblogs(newBlogs);


    }

    const blogCards = isArrayEmpty(blogs) ? [] : blogs.map((item, pos) => {
        return (
            <Blog key={pos} title={item.title} description={item.description}
                likeCount={item.likeCount} onLikeBntClick={() => onLikeBntClick(item.id)} />
        )
    });



    const onHideBtnClick = () => {
        setChek(!check);
    }
    // console.log(check); 

    return (
        <div className="App1"  >
            <button onClick={onHideBtnClick}>{check ? "Show List" : "Hide List"}</button>
            <br />
            <div hidden={check}>
                {blogCards}
            </div>

        </div>
    )
}

export default App1
