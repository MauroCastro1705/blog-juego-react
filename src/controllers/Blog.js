import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

// Function to dynamically import Markdown files
function importAll(r) {
  return r.keys().map(fileName => ({
    fileName,
    module: r(fileName)
  }));
}

function MarkdownPostsViewer() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // This uses webpack's require.context to dynamically import all .md files
    const markdownFiles = importAll(require.context('../posts/', false, /\.md$/));
    
    const parsedPosts = markdownFiles.map(file => ({
      slug: file.fileName.replace('./', '').replace('.md', ''),
      title: file.fileName.replace('./', '').replace('.md', '').replace(/-/g, ' '),
      content: null,
      fileName: file.fileName
    }));

    setPosts(parsedPosts);
  }, []);

  const loadPostContent = async (post) => {
    try {
      const content = await fetch(post.fileName).then(response => response.text());
      setSelectedPost({ ...post, content });
    } catch (error) {
      console.error('Error loading post content:', error);
    }
  };

  const resetSelectedPost = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return (
      <div className="post-viewer">
        <button 
          onClick={resetSelectedPost} 
          className="back-button"
        >
          Back to Posts
        </button>
        <div className="post-detail">
          <h1>{selectedPost.title}</h1>
          <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
        </div>
      </div>
    );
  }

  return (
    <div className="posts-list">
      {posts.map((post) => (
        <div 
          key={post.slug} 
          onClick={() => loadPostContent(post)}
          className="post-preview"
        >
          <h2>{post.title}</h2>
          <p>Click to read full post</p>
        </div>
      ))}
    </div>
  );
}

export default MarkdownPostsViewer;