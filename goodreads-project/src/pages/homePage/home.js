import BookCard from "../../Components/BookCard";
import ListGroupHome from "../../Components/ListGroupHome";
function HomePage() {
  return (
    <div className="cards-wrapper">
      <div className="general-list-container">
      <ListGroupHome></ListGroupHome>
      </div>
      <div className="general-container">
        <h1>Discover</h1>
        <div className="cards-container">
          <BookCard cardWidth="15rem" />
          <BookCard cardWidth="15rem" />
          <BookCard cardWidth="15rem" />
          <BookCard cardWidth="15rem" />
          <BookCard cardWidth="15rem" />
          <BookCard cardWidth="15rem" />
          <BookCard cardWidth="15rem" />
          <BookCard cardWidth="15rem" />
          <BookCard cardWidth="15rem" />
          <BookCard cardWidth="15rem" />
          <BookCard cardWidth="15rem" />
          <BookCard cardWidth="15rem" />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
