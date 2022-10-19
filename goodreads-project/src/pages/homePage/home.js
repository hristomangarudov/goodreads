import BookCard from "../../Components/BookCard";
import ListGroupHome from "../../Components/ListGroupHome";
function HomePage(){
    return(
        <div>
        <div className="cards-wrapper">
          <ListGroupHome></ListGroupHome>
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
    )
}
export default HomePage