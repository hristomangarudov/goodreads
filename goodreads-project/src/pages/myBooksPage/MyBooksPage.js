import MyBooksTable from "../../Components/MyBooksTable";
function MyBooksPage(){
return(
    <div className="cards-wrapper">
    <div className="cards-container  general-container">
    <h1>Shelves</h1>
      <MyBooksTable />
    </div>
  </div>
)
}
export default MyBooksPage