import React, { useEffect, useState } from "react";

export function Detail(props) {
  const [article, setArticle] = useState([]);
  // const [now, setNow] = useState("");

  useEffect(() => {
    const id = props.match.params.articleId;
    fetch(`http://127.0.0.1:8000/api/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
      });
  }, [props.match.params.articleId]);
  return (
    <div className="detail">
      <div className="detail__item">
        <img src={article.image} alt="" className="detail__item__img" />
        <h3 className="detail__item__title">{article.title}</h3>
        <p className="detail__item__text">{article.description}</p>
      </div>
    </div>
  );
}
