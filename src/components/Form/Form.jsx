import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";
import MoviesContext from "../../context/MoviesContext";

function Form() {
  const { movies, setMovies } = useContext(MoviesContext);
  const navigate = useNavigate(); // Use the hook at the top level

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    type: "",
  });

  const { title, date, poster, type } = formData;

  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);
  const [isTypeError, setIsTypeError] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      addMovie();
    }
  }

  function validate() {
    let valid = true;
    if (title === "") {
      setIsTitleError(true);
      valid = false;
    } else {
      setIsTitleError(false);
    }
    if (date === "") {
      setIsDateError(true);
      valid = false;
    } else {
      setIsDateError(false);
    }
    if (poster === "") {
      setIsPosterError(true);
      valid = false;
    } else {
      setIsPosterError(false);
    }
    if (type === "") {
      setIsTypeError(true);
      valid = false;
    } else {
      setIsTypeError(false);
    }
    return valid;
  }

  function addMovie() {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: type,
      poster: poster,
    };

    setMovies([...movies, movie]);

    // Redirect to home page
    navigate("/");
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt="placeholder"
          />
        </div>

        <div className={styles.form__right}>
          <form onSubmit={handleSubmit}>
            <h1 className={styles.form__title}>Add Movie</h1>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={handleChange}
              />
              {isTitleError && <Alert>Title wajib diisi</Alert>}
            </div>
            <div>
              <label htmlFor="date">Date:</label>
              <input
                type="number"
                id="date"
                name="date"
                value={date}
                onChange={handleChange}
              />
              {isDateError && <Alert>Date wajib diisi</Alert>}
            </div>
            <div>
              <label htmlFor="poster">Poster URL:</label>
              <input
                type="text"
                id="poster"
                name="poster"
                value={poster}
                onChange={handleChange}
              />
              {isPosterError && <Alert>Poster URL wajib diisi</Alert>}
            </div>
            <div>
              <label htmlFor="type">Type:</label>
              <select
                id="type"
                name="type"
                value={type}
                onChange={handleChange}>
                <option value="">Select type</option>
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Horror">Horror</option>
                <option value="Comedy">Comedy</option>
              </select>
              {isTypeError && <Alert>Type wajib diisi</Alert>}
            </div>
            <button className={styles.form__button} type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Form;
