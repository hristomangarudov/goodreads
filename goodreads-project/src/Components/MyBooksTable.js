import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import StarRating from "./StartRating/StarRating";
function MyBooksTable(props) {
  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>Cover</th>
          <th>Title</th>
          <th>Author</th>
          <th>Average Rating</th>
          <th>Shelves</th>
          <th>Review</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Link to="/mybooks">
              <img
                width={50}
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651426717i/60784641._SX300_.jpg"
              />
            </Link>
          </td>
          <td>
            <Link to="/mybooks">The Villa</Link>
          </td>
          <td>
            <Link to="/mybooks">Catherine Steadman</Link>
          </td>
          <td>
          <span>4.5<StarRating/></span>
          </td>
          <td>
            <Link to="/mybooks">Currently Reading</Link>
          </td>
          <td>
            <Link to="/mybooks">Write a Review</Link>
          </td>
          <td>
            <button>X</button>
          </td>
        </tr>
        <tr>
          <td>
            <Link to="/mybooks">
              <img
                width={50}
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651426717i/60784641._SX300_.jpg"
              />
            </Link>
          </td>
          <td>
            <Link to="/mybooks">The Villa</Link>
          </td>
          <td>
            <Link to="/mybooks">Catherine Steadman</Link>
          </td>
          <td>
          <span>4.5<StarRating/></span>
          </td>
          <td>
            <Link to="/mybooks">Currently Reading</Link>
          </td>
          <td>
            <Link to="/mybooks">Write a Review</Link>
          </td>
          <td>
            <button>X</button>
          </td>
        </tr>
        <tr>
          <td>
            <Link to="/mybooks">
              <img
                width={50}
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651426717i/60784641._SX300_.jpg"
              />
            </Link>
          </td>
          <td>
            <Link to="/mybooks">The Villa</Link>
          </td>
          <td>
            <Link to="/mybooks">Catherine Steadman</Link>
          </td>
          <td>
          <span>4.5<StarRating/></span>
          </td>
          <td>
            <Link to="/mybooks">Currently Reading</Link>
          </td>
          <td>
            <Link to="/mybooks">Write a Review</Link>
          </td>
          <td>
            <button>X</button>
          </td>
        </tr>
        <tr>
          <td>
            <Link to="/mybooks">
              <img
                width={50}
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651426717i/60784641._SX300_.jpg"
              />
            </Link>
          </td>
          <td>
            <Link to="/mybooks">The Villa</Link>
          </td>
          <td>
            <Link to="/mybooks">Catherine Steadman</Link>
          </td>
          <td>
          <span>4.5<StarRating/></span>
          </td>
          <td>
            <Link to="/mybooks">Currently Reading</Link>
          </td>
          <td>
            <Link to="/mybooks">Write a Review</Link>
          </td>
          <td>
            <button>X</button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MyBooksTable;
