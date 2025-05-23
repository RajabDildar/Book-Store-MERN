import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton.jsx";
import Spinner from "../components/Spinner.jsx";

const ShowBook = () => {
  const [Book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/books/${id}`)
      .then((res) => {
        setLoading(false);
        setBook(res.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 ">Id</span>
            <span>{Book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 ">title</span>
            <span>{Book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 ">Author</span>
            <span>{Book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 ">Publish Year</span>
            <span>{Book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 ">Create Time</span>
            <span>{new Date(Book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 ">
              Last Updated Time
            </span>
            <span>{new Date(Book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
