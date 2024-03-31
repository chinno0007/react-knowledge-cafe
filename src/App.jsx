import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState([]);

  const handleAddToBookmark = blog => {
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = time =>{
    // console.log("Marking as read", time );
    const newReadingTime = parseInt(readingTime + time);
    // console.log(newReadingTime);
    setReadingTime(newReadingTime);
  }


  return (
    <>
      
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto mt-5'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTimes={readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App
