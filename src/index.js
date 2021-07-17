import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./sass/main.scss";
import { Header } from "./js/header.js";
import { Sidebar } from "./js/sidebar.js";
import { Footer } from "./js/footer.js";
import { Routes } from "./js/routes.js";

function Container() {
  // const [article, setArticle] = useState([]);
  // // const [now, setNow] = useState("");

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setArticle(data);
  //     });
  // }, []);
  return (
    <div className="container">
      <Header />
      <Router>
        <Routes />
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
  document.getElementById("root")
);
