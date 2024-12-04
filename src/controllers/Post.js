import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function MarkdownPost() {
  const [content, setContent] = useState('');
  const { slug } = useParams();

  useEffect(() => {
    async function loadMarkdownFile() {
      try {
        const file = await import(`../posts/${slug}.md`);
        const response = await fetch(file.default);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error loading markdown file:', error);
        setContent('# Post Not Found');
      }
    }

    loadMarkdownFile();
  }, [slug]);

  return (
    <div className="markdown-content">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default MarkdownPost;