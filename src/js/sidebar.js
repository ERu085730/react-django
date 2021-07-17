import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar__title">Navigation</h2>
      <ul className="sidebar__lists">
        <Link to="/">
          <li className="sidebar__list">All Article</li>
        </Link>
        <Link to="/about">
          <li className="sidebar__list">About</li>
        </Link>
      </ul>
    </div>
  );
}
