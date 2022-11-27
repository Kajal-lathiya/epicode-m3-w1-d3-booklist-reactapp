import { Component, useState } from "react";
import { Container, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
  const [search, setSearch] = useState("");

 const filterBookList = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <Container>
      <input
        className="input mb-3"
        type="text"
        placeholder="Search book"
        value={search}
        onChange={filterBookList}
      />
      {books &&
        books
          .filter((book) => book.title.includes(search))
          .map(({ asin, title, img, price, category }) => (
            <SingleBook
              key={asin}
              subTitle={title}
              image={img}
              prices={price}
              cat={category}
            />
          ))}
    </Container>
  );
};
export default BookList;
