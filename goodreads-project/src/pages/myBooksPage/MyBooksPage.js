import MyBooksTable from "../../Components/MyBooksTable/MyBooksTable";
import ListGroupMyBooks from "../../Components/ListGroupMyBooks"
function MyBooksPage() {
  return (
    <div className="cards-wrapper">
      <div className="general-list-container list-my-books">
        <ListGroupMyBooks></ListGroupMyBooks>
      </div>
      <div className="cards-container  general-container">
        <h1>Shelves</h1>
        <MyBooksTable />
      </div>
    </div>
  );
}
export default MyBooksPage;
