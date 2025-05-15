import React from 'react';
import "/styles/globals.css";
import Link from "next/link";

const BlogPage = () => {
  const blogPosts = [
    {
      date: "May 19, 2025",
      title: "Raising Dust: Learning From Dark Forest, MUD, Biomes, and Beyond",
      url: "/blog/raising-dust"
    }
  ];

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px'
  };

  const innerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  };

  const postContainerStyle = {
    marginBottom: '8px'
  };

  const dateStyle = {
    color: '#666',
    fontSize: '14px',
    fontWeight: '400'
  };

  const linkStyle = {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '1.4',
    display: 'inline-block',
    marginTop: '4px',
    transition: 'color 0.2s ease'
  };

  const dividerStyle = {
    height: '1px',
    backgroundColor: '#eee',
    marginTop: '8px'
  };

  return (
    <div style={containerStyle}>
      <div style={innerContainerStyle}>
        {blogPosts.map((post, index) => (
          <div key={index} style={postContainerStyle}>
            <span style={dateStyle}>{post.date}</span>
            <br />
            <a 
              href={post.url} 
              style={linkStyle}
              target={post.isExternal ? "_blank" : ""}
              rel={post.isExternal ? "noreferrer noopener" : ""}
            >
              {post.title}
            </a>
            <div style={dividerStyle}></div>
          </div>
        ))}
        <div style={{ height: '8px' }}></div>
      </div>
    </div>
  );
};

export default BlogPage;