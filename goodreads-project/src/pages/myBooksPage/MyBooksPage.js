import MyBooksTable from "../../Components/MyBooksTable/MyBooksTable";
import ListGroupMyBooks from "../../Components/ListGroupMyBooks"
import { GetSpecificBook } from "../../utils";
import { useEffect, useState } from "react";
import { getActiveUser } from "../../server/users";
function MyBooksPage() {
  const user = getActiveUser()
  const [bookshelf,setBookShelf] = useState({
  currentlyReading:user.bookshelf.currentlyReading || [],
  wantToRead:user.bookshelf.wantToRead || [],
  read:user.bookshelf.read || [],
});
const [shelfName,setShelfName] = useState('Currently Reading')
  const [currentTab,setCurrentTab] = useState(user.bookshelf.currentlyReading || [])


const getShelf = (shelfGroup)=>{
  switch(shelfGroup){
    case "wantToRead":
      setCurrentTab(user.bookshelf.wantToRead || []);
      setShelfName("Want to read")
      break;
    case "read":
        setCurrentTab(user.bookshelf.read || []);
        setShelfName("Read")
        break;
    case "currentlyReading":
          setShelfName("Currently Reading")
          setCurrentTab(user.bookshelf.currentlyReading || []);
          break;
    default:
      setCurrentTab(user.bookshelf.currentlyReading || []);
      setShelfName("Currently Reading")
      return

  }
}
  return (
    <div className="cards-wrapper">
      <div className="general-list-container list-my-books">
        <ListGroupMyBooks getShelf={getShelf}></ListGroupMyBooks>
      </div>
      <div className="cards-container  general-container">
        <h1>Shelves</h1>
        <MyBooksTable books={currentTab} shelf={shelfName}/>
      </div>
    </div>
  );
}
export default MyBooksPage;
