import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "html-react-parser";
import { Link } from "react-router-dom";
import "../css/NoticeB.css";

export const NoticeBw = (props) => {
  const [CafeContent, setCafeContent] = useState({
    title: "",
    content: "",
  });

  const [viewContent, setViewContent] = useState([]);

  const getValue = (e) => {
    const { name, value } = e.target;
    setCafeContent({
      ...CafeContent,
      [name]: value,
    });
    console.log(CafeContent);
  };

  return (
    <div className="backGroundSet">
      <h1 className="Notice_title">NOTICE</h1>
      <div className="form-wrapper">
        <input
          className="title-input"
          type="text"
          placeholder="제목"
          onChange={getValue}
          name="title"
        />

        <CKEditor
          editor={ClassicEditor}
          data=""
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setCafeContent({
              ...CafeContent,
              content: data,
            });
            console.log(CafeContent);
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
      <Link to="/NotcieB">
        <button
          type="button"
          className="submit-button"
          onClick={() => setViewContent(viewContent.concat({ ...CafeContent }))}
        >
          작성하기
        </button>
      </Link>
      {viewContent.map((element) => (
        <div style={{ border: "1px solid #333" }}>
          <h2>{element.title}</h2>
          <div>{ReactHtmlParser(element.content)}</div>
        </div>
      ))}
    </div>
  );
};
