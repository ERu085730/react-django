import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

export function Content() {
  const [article, setArticle] = useState([]);
  // const [now, setNow] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/")
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
      });
  }, []);
  return (
    <div className="content">
      <h2 className="content__title">Article</h2>
      {article !== []
        ? article.map((data, i) => {
            return (
              <div className="content__item" key={i}>
                <img src={data.image} alt="" className="content__item__img" />
                <a href={"/" + data.article_id}>
                  <h3 className="content__item__title">{data.title}</h3>
                </a>
                <p className="content__item__text">{data.description}</p>
              </div>
            );
          })
        : ""}
    </div>
  );
}
