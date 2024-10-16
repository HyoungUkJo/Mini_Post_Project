import { Link } from "react-router-dom";

function Main() {
    return (
      <div>
        <h1>
          <Link to = "/main">메인 페이지</Link>
        </h1>
        <div>
          <Link to = "/create_post" className = "link">
          게시물 추가
          </Link>
        </div>
      </div>
    );
  }
  
  export default Main;
  