import MyBooksTable from "../../Components/MyBooksTable/MyBooksTable";
import ListGroupMyBooks from "../../Components/ListGroupMyBooks"
import { useEffect, useState } from "react";
import { getActiveUser } from "../../server/users";
import { useParams } from "react-router-dom";
function MyBooksPage() {
  const user = getActiveUser()
  const [shelfName,setShelfName] = useState('Currently Reading')
  const params = useParams()
  const [currentTab,setCurrentTab] = useState([])


useEffect(()=>{
  switch(params.shelf){
      case "want-to-read":
        setCurrentTab(user.bookshelf.wantToRead || []);
        setShelfName("Want to read")
        break;
      case "read-books":
          setCurrentTab(user.bookshelf.read || []);
          setShelfName("Read")
          break;
      case "currently-reading":
            setShelfName("Currently Reading")
            setCurrentTab(user.bookshelf.currentlyReading || []);
            break;

  }
},[params])

  return (
    <div className="cards-wrapper">
      <div className="general-list-container list-my-books">
        <ListGroupMyBooks></ListGroupMyBooks>
      </div>
      <div className="cards-container  general-container">
        <h1>Shelves</h1>
        <MyBooksTable books={currentTab} shelf={shelfName}/>
      </div>
    </div>
  );
}
export default MyBooksPage;
