'use client';

import React, { useState, useRef } from 'react';

const PapersGallery = () => {
  // Sample papers data
  const papers = [
    {
      id: "1EW2J4sRQNjRSnV2-2qPo6VduJJfXlf4p",
      title: "Bitcoin: A Peer-to-Peer Electronic Cash System",
      author: "Nakamoto Institute",
      image: "/api/placeholder/300/320"
    },
    {
      id: "1hrcKNNn85UReS0xuixCREorkW5XaDxCh",
      title: "The Bitcoin Reformation",
      author: "Adamant Research",
      image: "/api/placeholder/300/320"
    },
    {
      id: "1EW2J4sRQNjRSnV2-2qPo6VduJJfXlf4p",
      title: "Bitcoin's academic pedigree",
      author: "Arvind Naryanan, Jeremy Clark",
      image: "/api/placeholder/300/320"
    },
    {
      id: "1EW2J4sRQNjRSnV2-2qPo6VduJJfXlf4p",
      title: "Seetee.io Shareholder Letter",
      author: "Seetee.io",
      image: "/api/placeholder/300/320"
    },
    {
      id: "1EW2J4sRQNjRSnV2-2qPo6VduJJfXlf4p",
      title: "Stone Ridge 2020 Shareholder Letter",
      author: "Stone Ridge Asset Management",
      image: "/api/placeholder/300/320"
    }
  ];

  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  };
  
  // Function to open PDF in a new tab
  const openPdf = (fileId) => {
    window.open(`https://drive.google.com/file/d/${fileId}/view`, '_blank');
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Papers</h1>
      
      <div className="gallery-wrapper">
        {/* Left scroll button */}
        <button 
          onClick={scrollLeft} 
          className={`scroll-button left-button ${!canScrollLeft ? 'hidden-button' : ''}`}
          disabled={!canScrollLeft}
        >
          ‹
        </button>
        
        {/* Scrollable container */}
        <div 
          ref={scrollContainerRef}
          className="scrollable-container"
          onScroll={checkScrollButtons}
        >
          {papers.map((paper, index) => (
            <div 
              key={index} 
              className="paper-card" 
              onClick={() => openPdf(paper.id)}
            >
              <div className="thumbnail-container">
                <img 
                  src={`https://drive.google.com/thumbnail?id=${paper.id}&sz=w1000`}
                  alt={paper.title}
                  className="thumbnail-image"
                  onError={(e) => {
                    // Fallback to a placeholder if thumbnail fails to load
                    e.target.src = paper.image || "/api/placeholder/300/320";
                  }}
                />
                <div className="thumbnail-overlay">
                  <span className="view-icon">👁️</span>
                </div>
              </div>
              <div className="paper-info">
                <h3 className="paper-title">{paper.title}</h3>
                <p className="paper-author">{paper.author}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Right scroll button */}
        <button 
          onClick={scrollRight} 
          className={`scroll-button right-button ${!canScrollRight ? 'hidden-button' : ''}`}
          disabled={!canScrollRight}
        >
          ›
        </button>
      </div>
      
      <style jsx>{`
        .gallery-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        
        .gallery-title {
          font-size: 2.25rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: #333;
        }
        
        .gallery-wrapper {
          position: relative;
        }
        
        .scrollable-container {
          display: flex;
          overflow-x: auto;
          padding-bottom: 1.5rem;
          gap: 1.5rem;
          padding-left: 1rem;
          padding-right: 1rem;
          scroll-behavior: smooth;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollable-container::-webkit-scrollbar {
          display: none;
        }
        
        .paper-card {
          flex-shrink: 0;
          width: 256px;
          background-color: #f9f9f9;
          border-radius: 0.5rem;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .thumbnail-container {
          width: 100%;
          height: 224px;
          background-color: #f0f0f0;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .thumbnail-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }
        
        .thumbnail-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.1);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.3s;
        }
        
        .view-icon {
          font-size: 2rem;
          color: white;
          filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5));
        }
        
        .paper-info {
          padding: 1rem;
        }
        
        .paper-title {
          font-weight: 500;
          font-size: 1.125rem;
          color: #333;
          margin-bottom: 0.25rem;
        }
        
        .paper-author {
          color: #666;
          font-size: 0.875rem;
        }
        
        .scroll-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background-color: white;
          padding: 0.5rem;
          border-radius: 9999px;
          border: none;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          font-size: 1.5rem;
          line-height: 1;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .scroll-button:hover {
          background-color: #f5f5f5;
        }
        
        .left-button {
          left: -16px;
        }
        
        .right-button {
          right: -16px;
        }
        
        .hidden-button {
          opacity: 0;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default PapersGallery;