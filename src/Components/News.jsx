import React, { useEffect, useState } from "react";
import Items from "./Items";
import "./styling.css";
import Spinner from "./Spinner";
import ProgressBar from "react-top-loading-bar";

const News = () => {
  const [dice, setDice] = useState([]);
  const [page, setPage] = useState(1);
  const [progress, setProgress] = useState(10);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  // CATEGORY
  const Sports = (event) => {
    event.preventDefault()
    setCategory("Sports");
    window.location.reload();

  };
  const Health = (event) => {
    event.preventDefault();
    window.location.reload();
    setCategory("Health");
  };
  const Technology = (event) => {
    event.preventDefault()
    setCategory("Technology");
    window.location.reload();

  };
  const Entertainment = (event) => {
    event.preventDefault()
    setCategory("Entertainment");
    window.location.reload();
  };
  const General = (event) => {
    event.preventDefault()
    setCategory("General");
    window.location.reload();
  };
  const Science = (event) => {
    event.preventDefault()
    setCategory("Science");
    window.location.reload();
  };
  const FetchApi = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=2cd18d4f143942eeaab23d8f85e1f409&page=${page}&pagesize=5`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let parsed = data.articles;
        console.log(parsed);
        setDice(parsed);
        setLoading(false);
        setProgress(100);
      });
  };
  useEffect(() => {
    FetchApi();
    // eslint-disable-next-line
  }, [page]);
  const Move = () => {
    setPage(page + 1);
  };
  const MoveBack = () => {
    setProgress(100)
    setPage(page - 1);
  };
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            NEWS_MONKEY
          </a>
        </div>
      </nav>
      {/* PROGRESS_BAR */}
      <ProgressBar progress={progress} />
      {/* NEWS_CONTAINER */}
      <div className="container">
        <div className="row">
          <div className="col text-center bn">
          <div className="button">
          <button onClick={General} className="btn btn-dark m-1">
            General
          </button>
          <button onClick={Health} className="btn btn-dark m-1" key="health">
            Health
          </button>
          <button onClick={Technology} className="btn btn-dark m-1">
            Science
          </button>
          
          <button onClick={Science} className="btn btn-dark m-1">
            Scicence
          </button>
          <button onClick={Sports} className="btn btn-dark m-1">
            Sports
          </button>
          <button onClick={Entertainment} className="btn btn-dark m-1">
            Entertainment
          </button>
          </div>
            <h2>
              <b>BREAKING NEWS {category}</b>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col items">
            {dice.map((Element) => {
              return (
                <div key={Element.id}>
                  <Items
                    img={Element.urlToImage}
                    url={Element.url}
                    title={Element.title}
                    desc={Element.description}
                  />
                </div>
              );
            })}
          </div>
          {/* SPINNER */}
          {loading && <Spinner />}
          {/* BUTTON */}
        </div>
        <div className="buttons m-2">
          <button onClick={MoveBack} id="btn" disabled={page === 0}>
            Previous
          </button>
          <button onClick={Move} id="btn" disabled={page === 7}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default News;
