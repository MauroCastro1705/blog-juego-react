import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function Post() {
  const { filename } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");
  const [PostTtitle, setTitle] = useState("");

  useEffect(() => {
    fetch(`/posts/${filename}.md`)
      .then((response) => response.text())
      .then((text) => {
        const lines = text.split("\n");
        const extractedTitle = lines.find((line) => line.startsWith("# "))?.substring(2) || "Sin título";
        setTitle(extractedTitle);
        setMarkdownContent(lines.filter((line) => !line.startsWith("# ")).join("\n"));
      });
  }, [filename]);

  return (
    
      <div class="container-fluid">
        <div className="row p-4">
          <div>
          
            <ol class="breadcrumb breadcrumb-custom">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item"><a href="/">Posts</a></li>
              <li class="breadcrumb-item active" aria-current="page">{PostTtitle}</li>
            </ol>

          </div>
          
          <div className="col-sm">
            <h1>columna1</h1>
          </div>
          <div className="col-8 p-2">
            <h1>{PostTtitle}</h1>
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
          </div>
          <div className="col-sm">
            <h1>columna2</h1>
          </div>        
      </div>
    </div>
    
  )
}

export default Post;