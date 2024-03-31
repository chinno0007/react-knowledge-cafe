import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks, readingTimes}) => {
    return (
        <div className="md:w-1/3 text-center bg-slate-400 ml-5 space-y-5 pt-3">
            <div>
                <h2 className='text-2xl'>Reading TIme: {readingTimes}</h2>
                
            </div>


           <h2 className="text-2xl">Bookmarked Blogs: {bookmarks.length}</h2>
           {
            bookmarks.map( bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
           } 
        </div>
    );
};


Bookmarks.propTypes={
    bookmarks: PropTypes.array,
    readingTimes: PropTypes.number
}
export default Bookmarks;