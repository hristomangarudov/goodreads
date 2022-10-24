import BookCard from "../../Components/BookCard/BookCard";
import ListGroupHome from "../../Components/ListGroupHome";
import { useState,useEffect } from "react";
function HomePage(props) {
  const [data,setData] = useState(null)
  const [loading,setLoading]= useState(true)
  useEffect(()=>{
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:fantasy&startIndex=0&maxResults=8&printType=books"
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setData(data);
      })
      .finally(()=>{
        setLoading(false)
      })
  },[])

  return (
    <div className="cards-wrapper">
      <div className="general-list-container">
      <ListGroupHome></ListGroupHome>
      </div>
      <div className="general-container">
        <h1>Discover</h1>
        <div className="cards-container">
          {/* {console.log(data)} */}
          {loading?<div>loading</div>:data.items.map(card =>
          (<BookCard 
          cardWidth="15rem"
          key={card.id}
          cover={card.volumeInfo.imageLinks.thumbnail}
          author={card.volumeInfo.authors}
          title={card.volumeInfo.title}
          averageRating={card.volumeInfo.averageRating}
          ratingsCount={card.volumeInfo.ratingsCount}
          />)
          )}
        </div>
      </div>
    </div>
  );
}
export default HomePage;
