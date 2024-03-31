import PropTypes from 'prop-types';
import { PiBookmarkSimpleDuotone } from "react-icons/pi";

const Blog = ( {blog, handleAddToBookmark, handleMarkAsRead} ) => {
    // console.log(blog);
    const {title, cover_img, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-15 p-5'>
            <img className='w-full mb-8' src={cover_img} alt={`Cover picture of the title: ${title}`} />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex'>
                    <img className='w-16 h-14 border rounded-full' src={author_img} alt={`Image of author ${author}`} />

                    <div className='ml-6'>
                        <h3 className='text-xl'>{author}</h3>
                        <h5 className='text-xs'>{posted_date}</h5>
                    </div>
                </div>

                <div className='flex items-center'>
                    <span>{reading_time} minute read</span>
                    <button 
                    onClick={()=> handleAddToBookmark(blog)}
                    className='ml-2 text-red-400 text-xl'
                    ><PiBookmarkSimpleDuotone></PiBookmarkSimpleDuotone></button>
                </div>
            </div>
            <h2 className='text-4xl mb-2'>{title}</h2>
            <p>
                {
                   hashtags.map((hashtag, index) => <span key={index}><a href=""> #{hashtag}</a></span>) 
                }
            </p>
            <button 
                    onClick={()=>handleMarkAsRead(reading_time)}
                    className='text-purple-800 font-bold underline'
            >Mark As Read</button>
        </div>
    );
};




Blog.propTypes = {
    blog: PropTypes.object,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;