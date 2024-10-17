import { Link } from "react-router-dom";
// import Posts from "./Posts";

function Main() {
  return (
    <div className="header">
      <h1>
        <Link to="/">메인 페이지</Link>
      </h1>
      <div className="menu">
        <Link to="/create_post" className="link">
          게시물 추가
        </Link>
      </div>
      {/* <Posts /> */}
    </div>
  );
}

export default Main;
