import MyBooksTable from "../../Components/MyBooksTable/MyBooksTable";
import ListGroupMyBooks from "../../Components/ListGroupMyBooks"
import { GetSpecificBook } from "../../utils";
import { useEffect, useState } from "react";
import { getActiveUser } from "../../server/users";
import { useDispatch, useSelector } from "react-redux";
import {getBookshelf,getNewBookshelf,getUserShelf} from "../../store/bookshelfTabSlice"
function MyBooksPage() {
  const active = getActiveUser()
  const newShelf = useSelector((state) =>state.bookshelfTab.bookshelf)
  const userShelf = useSelector((state) =>state.bookshelfTab.currentShelf)
  const newShelfTitle = useSelector((state) =>state.bookshelfTab.bookshelfTitle)
  const dispatch = useDispatch()
  const [shelfName,setShelfName] = useState('Currently Reading')

useEffect(()=>{
  switch(newShelfTitle){
    case "wantToRead":
      dispatch(getUserShelf(active.bookshelf.wantToRead || []))
      setShelfName("Want to read")
      break;
    case "read":
      dispatch(getUserShelf(active.bookshelf.read || []))
        setShelfName("Read")
        break;
    case "currentlyReading":
          setShelfName("Currently Reading")
          dispatch(getUserShelf(active.bookshelf.currentlyReading || []))
          break;
    default:
      dispatch(getUserShelf(active.bookshelf.currentlyReading || []))
      setShelfName("Currently Reading")
      return

  }
},[newShelfTitle])

  return (
    <div className="cards-wrapper">
      <div className="general-list-container list-my-books">
        <ListGroupMyBooks></ListGroupMyBooks>
      </div>
      <div className="cards-container  general-container">
        <h1>Shelves</h1>
        <MyBooksTable books={userShelf} shelf={shelfName}/>
      </div>
    </div>
  );
}
export default MyBooksPage;
