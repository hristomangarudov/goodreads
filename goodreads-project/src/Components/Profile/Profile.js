import "./Profile.scss";
import SmallBookCard from "../SmallBookCard/SmallBookCard";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getActiveUser } from "../../server/users";
import { useState,useEffect } from "react";

function Profile() {
  const editProfile = useSelector((state) => state.editProfile);
  const navigate = useNavigate()
  const toEdit = () => {
    navigate("/edit-profile")
  }
  let active = getActiveUser()
  const [readBooks,setReadBooks] = useState(active.bookshelf.read)
  const [newBooks, setNewBooks] = useState([]);
  useEffect(()=>{
    setReadBooks(active.bookshelf.read)
  },[])
  useEffect(() => {
    let requestsRead = readBooks.map((id) => {
      return new Promise((resolve, reject) => {
        return fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then(res =>{
          resolve(res.json())
        })
      });
    });
    Promise.all(requestsRead)
    .then((values)=>{
      setNewBooks(values)
    })
  }, [readBooks]);

  return (
    <div className="profile-main-wrapper">
      <div className="profile-wrapper">
        <div className="profile-img">
          <img src={editProfile.profileImg}></img>
        </div>
        <div className="profile-data">
          <div className="profile-name">
            <h4>{editProfile.profileUsername}</h4>
            <a className="edit-profile-a" onClick={toEdit}>(edit profile)</a>
          </div>
          <div className="profile-details">
            <span>
              <strong>Age:</strong> {editProfile.age}
            </span>
            <span>
              <strong>Gender:</strong> {editProfile.gender}
            </span>
            <span>
              <strong>Country:</strong> {editProfile.country}
            </span>
            <span>
              <strong>Profession:</strong> {editProfile.profession}
            </span>
          </div>
        </div>
      </div>
      <div className="bookshelf-wrapper">
        <div className="bookshelf-user">
          <h6 className="profile-h6"> {editProfile.profileUsername} BOOKSHELF</h6>
        </div>
        <div className="bookshelf-links">
        <Link className="link-decoration underline" to='/mybooks/currently-reading'><span>Currenty reading</span></Link>
        <Link className="link-decoration underline" to='/mybooks/want-to-read'><span>Want to read</span></Link>
        <Link className="link-decoration underline" to='/mybooks/read-books'><span>Read</span></Link>
        </div>
      </div>
      <div className="currently-reading-wrapper">
        <div className="currently-reading-user">
          <h6 className="profile-h6">{editProfile.profileUsername} READ BOOKS</h6>
        </div>
        <div className="currently-reading-books">
          {newBooks.length>0?(
            newBooks.map((book,index)=>{
              console.log(readBooks)
              return(
                <>
                <SmallBookCard
                  key={index}
                  picture={book.volumeInfo.imageLinks === undefined
                    ? "https://books.google.bg/googlebooks/images/no_cover_thumb.gif"
                    : `${book.volumeInfo.imageLinks.thumbnail}`}
                  title={book.volumeInfo.title}
                  author={book.volumeInfo.authors}
                  id={book.id}
                />
              </>
              )
              
            })
          ):<div></div>

          }
        </div>
      </div>
    </div>
  );
}

export default Profile;
