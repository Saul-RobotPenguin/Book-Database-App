import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleBookInfo } from "../../services/api-calls";
import BookForm from "../shared/BookForm";
import axios from "axios";

const CreatePage = () => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    genres: [],
    title: "",
    author: "",
    year: "",
    ISBN: "",
    imageLink: "",
  });
  const [updated, setUpdated] = useState(false);

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };
    const editedBook = Object.assign(book, updatedField);
    setBook(editedBook);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: process.env.REACT_APP_BASE_URL + `/books`,
      method: "POST",
      data: book,
    })
      .then(() => setUpdated(true))
      .catch(console.error);
  };
  useEffect(() => {
    if (updated) {
      return navigate(`/`);
    }
  });

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Add Book</label>
      <input
        placeholder="book"
        defaultValue={book.title}
        name="title"
        onChange={(e) => handleChange(e)}
      />
      <input
        placeholder="author"
        defaultValue={book.author}
        name="author"
        onChange={(e) => handleChange(e)}
      />
      <input
        placeholder="year"
        defaultValue={book.year}
        name="year"
        onChange={(e) => handleChange(e)}
      />
      <input
        placeholder="ISBN"
        defaultValue={book.ISBN}
        name="ISBN"
        onChange={(e) => handleChange(e)}
      />

      <input
        placeholder="Image URL"
        defaultValue={book.imageLink}
        name="imageLink"
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default CreatePage;
