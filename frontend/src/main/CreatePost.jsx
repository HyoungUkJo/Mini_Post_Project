import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CreatePost() {
  //   const dayRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  function CreatePostCard(e) {
    e.preventDefault();
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        title: titleRef.current.value,
        content: contentRef.current.value,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        alert(data.message);
        if (data.message === "게시글 작성 성공") navigate("/main");
      })
      .catch((error) => {
        alert(error);
        console.error("There was a problem with the fetch operation: ", error);
      });
  }
  return (
    <>
      <h2>
        <Link to="/main">형욱민성크로스</Link>
      </h2>
      <form onSubmit={CreatePostCard}>
        <div className="input_area">
          <label>제목</label>
          <input type="text" placeholder="computer" ref={titleRef} />
        </div>
        <div className="input_area">
          <label>내용</label>
          <input type="text" placeholder="컴퓨터" ref={contentRef} />
        </div>
        <div className="input_area"></div>
        <button>저장</button>
      </form>
    </>
  );
}
