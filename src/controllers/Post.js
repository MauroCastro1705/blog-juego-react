import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function Post() {
  const { filename } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");
  console.log(markdownContent)
  useEffect(() => {
    fetch(`/posts/${filename}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, [filename]);

  return <ReactMarkdown>{markdownContent}</ReactMarkdown>;
}

export default Post;