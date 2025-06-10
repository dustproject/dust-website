'use client';

import React, { useState, useRef, useEffect } from 'react';

const PapersGallery = ({ category = 'one' }) => {
  const paperCollections = {
    three: [
      {
        title: 'Autonomous Worlds',
        field: "Cryptographic Automata",
        author: 'Ludens',
        pdfPath: '/pdfs/Cryptographic Automata/Autonomous Worlds - Ludens.pdf',
      },
      {
        title: 'Atoms, Institutions, Blockchains',
        field: "Cryptographic Automata",
        author: 'Josh Stark',
        pdfPath: '/pdfs/Cryptographic Automata/Atoms, Institutions, Blockchains — Josh Stark.pdf',
      },
      {
        title: 'Programmable Cryptography',
        field: "Cryptographic Automata",
        author: 'Gubsheep',
        pdfPath: '/pdfs/Cryptographic Automata/Programmable Cryptography - Gubsheep.pdf',
      },
      {
        title: 'The God Protocols',
        field: "Cryptographic Automata",
        author: 'Nick Szabo',
        pdfPath: '/pdfs/Cryptographic Automata/The God Protocols - Nick Szabo.pdf',
      },
      {
        title: 'True Nyms and Crypto Anarchy',
        field: "Cryptographic Automata",
        author: 'Timothy May',
        pdfPath: '/pdfs/Cryptographic Automata/True Nyms and Crypto Anarchy - Timothy May.pdf',
      },
      {
        title: 'Blockchains Response to The Sweep of History',
        field: "Cryptographic Automata",
        author: 'GuiltyGyoza',
        pdfPath: '/pdfs/Cryptographic Automata/Blockchains Response to The Sweep of History - Guiltygyoza.pdf',
      }
    ],
    
    one: [
      {
        title: 'On the Design of Escaped Realities',
        field: "Generative Anthropology",
        author: 'Venkatesh Rao',
        pdfPath: '/pdfs/Generative Anthropology/On the Design of Escaped Realities - Venkatesh Rao.pdf',
      },
      {
        title: 'The History and Future of Memeing Things Into Reality',
        field: "Generative Anthropology",
        author: 'Venkatesh Rao',
        pdfPath: '/pdfs/Generative Anthropology/The History and Future of Memeing Things Into Reality - Venkatesh Rao.pdf',
      },
      {
        title: 'The Originary Scene',
        field: "Generative Anthropology",
        author: 'Eric Gans',
        pdfPath: '/pdfs/Generative Anthropology/The Originary Scene - Eric Gans.pdf',
      },
      {
        title: 'The Straussian Moment',
        field: "Generative Anthropology",
        author: 'Peter Thiel',
        pdfPath: '/pdfs/Generative Anthropology/The Straussian Moment - Peter Thiel.pdf',
      },
      {
        title: 'Amusing Ourselves to Death',
        field: "Escpaism Critique",
        author: 'Neil Postman',
        pdfPath: '/pdfs/Escapism Critique/Amusing Ourselves to Death - Neil Postman.pdf',
      },
      {
        title: 'Hyperreality',
        field: "Escpaism Critique",
        author: '',
        pdfPath: '/pdfs/Escapism Critique/Hyperreality.pdf',
      },
      {
        title: 'Non-Things',
        field: "Escpaism Critique",
        author: 'Byung Chul Han',
        pdfPath: '/pdfs/Escapism Critique/Non-Things - Byung Chul Han.pdf',
      },
      {
        title: 'Simulacra and Simulation',
        field: "Escpaism Critique",
        author: 'Jean Baudrillard',
        pdfPath: '/pdfs/Escapism Critique/Simulacra and Simulation - Jean Baudrillard.pdf',
      },
      {
        title: 'The Society of the Spectacle',
        field: "Escpaism Critique",
        author: 'Guy Debord',
        pdfPath: '/pdfs/Escapism Critique/The Society of the Spectacle - Guy Debord.pdf',
      },
    ],
    
    two: [
      {
        title: 'Mathematical Universe Hypothesis',
        field: "Mathematical Philosophy",
        author: '',
        pdfPath: '/pdfs/Mathematical Philosophy/Mathematical Universe Hypothesis.pdf',
      },
      {
        title: 'Modal Realism',
        field: "Mathematical Philosophy",
        author: '',
        pdfPath: '/pdfs/Mathematical Philosophy/Modal Realism.pdf',
      },
      {
        title: 'Parallel Universes',
        field: "Mathematical Philosophy",
        author: 'Max Tegmark',
        pdfPath: '/pdfs/Mathematical Philosophy/Parallel Universes - Max Tegmark.pdf',
      },
      {
        title: 'The Emperor\'s New Mind',
        field: "Mathematical Philosophy",
        author: 'Roger Penrose',
        pdfPath: '/pdfs/Mathematical Philosophy/The Emperor_s New Mind - Roger Penrose.pdf',
      },
      {
        title: 'The Unreasonable Effectivenss Of Mathematics in the Natural Sciences',
        field: "Mathematical Philosophy",
        author: 'Eugene Wigner',
        pdfPath: '/pdfs/Mathematical Philosophy/The Unreasonable Effectivenss Of Mathematics in the Natural Sciences - Eugene Wigner.pdf',
      },
      {
        title: 'Three Worlds Model',
        field: "Mathematical Philosophy",
        author: 'Roger Penrose',
        pdfPath: '/pdfs/Mathematical Philosophy/Three Worlds Model - Roger Penrose.pdf',
      },
      {
        title: 'Anthropic Bias',
        field: "Simulation Theory",
        author: 'Nick Bostrom',
        pdfPath: '/pdfs/Simulation Theory/Anthropic Bias - Nick Bostrom.pdf',
      },
      {
        title: 'Are You Living in a Simulation',
        field: "Simulation Theory",
        author: 'Nick Bostrom',
        pdfPath: '/pdfs/Simulation Theory/Are You Living in a Simulation - Nick Bostrom.pdf',
      },
      {
        title: 'Ontological Anti-Realism',
        field: "Simulation Theory",
        author: 'David Chalmers',
        pdfPath: '/pdfs/Simulation Theory/Ontological Anti-Realism - David Chalmers.pdf',
      },
      {
        title: 'Reality+ Excerpt',
        field: "Simulation Theory",
        author: 'David Chalmers',
        pdfPath: '/pdfs/Simulation Theory/Reality+ Excerpt - David Chalmers.pdf',
      },
      {
        title: 'The Matrix as Metaphysics',
        field: "Simulation Theory",
        author: 'David Chalmers',
        pdfPath: '/pdfs/Simulation Theory/The Matrix as Metaphysics - David Chalmers.pdf',
      },
      {
        title: 'The Virtual and the Real',
        field: "Simulation Theory",
        author: 'David Chalmers',
        pdfPath: '/pdfs/Simulation Theory/The Virtual and the Real - David Chalmers.pdf',
      },
      {
        title: 'Why Make a Matrix, And Why You Might Be In One',
        field: "Simulation Theory",
        author: 'Nick Bostrom',
        pdfPath: '/pdfs/Simulation Theory/Why Make a Matrix_ And Why You Might Be In One - Nick Bostrom.pdf',
      },
    ],
    
    four: [
      {
        title: 'Permutation of the Real',
        field: "Substrate Independence Futurism",
        author: 'Dorata Mckay',
        pdfPath: '/pdfs/Substrate Independence Futurism/Permutation of the Real - Dorata Mckay.pdf',
      },
      {
        title: 'Pigs in Cyberspace',
        field: "Substrate Independence Futurism",
        author: 'Hans Moravec',
        pdfPath: '/pdfs/Substrate Independence Futurism/Pigs in Cyberspace - Hans Moravec.pdf',
      },
      {
        title: 'The Age of Em Preview',
        field: "Substrate Independence Futurism",
        author: 'Robin Hanson',
        pdfPath: '/pdfs/Substrate Independence Futurism/The Age of Em Preview - Robin Hanson.pdf',
      },
    ],
  };


  // Select the papers based on the category parameter
  const papers = paperCollections[category] || paperCollections.all;

  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [thumbnails, setThumbnails] = useState({});
  const [pdfJsLoaded, setPdfJsLoaded] = useState(false);
  const [thumbnailsToGenerate, setThumbnailsToGenerate] = useState([]);

  // Load PDF.js library
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if PDF.js is already loaded
    if (window.pdfjsLib) {
      setPdfJsLoaded(true);
      return;
    }

    const loadPdfJs = async () => {
      try {
        // Load PDF.js from CDN
        const pdfJsScript = document.createElement('script');
        pdfJsScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
        pdfJsScript.async = true;
        
        pdfJsScript.onload = () => {
          // Set the worker source
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
          setPdfJsLoaded(true);
        };
        
        document.head.appendChild(pdfJsScript);
      } catch (error) {
        console.error('Error loading PDF.js:', error);
      }
    };

    loadPdfJs();
  }, []);

  // Initialize the list of PDFs that need thumbnails
  useEffect(() => {
    // Only run once when the component mounts
    const pdfsNeedingThumbnails = papers
      .map(paper => paper.pdfPath)
      .filter(pdfPath => !thumbnails[pdfPath]);
    
    if (pdfsNeedingThumbnails.length > 0) {
      setThumbnailsToGenerate(pdfsNeedingThumbnails);
    }
  }, []);

  // Process one PDF thumbnail at a time when PDF.js is loaded
  useEffect(() => {
    if (!pdfJsLoaded || thumbnailsToGenerate.length === 0) return;

    // Generate one thumbnail at a time
    const generateNextThumbnail = async () => {
      const pdfPath = thumbnailsToGenerate[0];
      
      try {
        const thumbnail = await generatePdfThumbnail(pdfPath);
        
        // Update thumbnails state with the new thumbnail
        setThumbnails(prev => ({
          ...prev,
          [pdfPath]: thumbnail
        }));
        
        // Remove the processed PDF from the queue
        setThumbnailsToGenerate(prev => prev.slice(1));
      } catch (error) {
        console.error(`Failed to generate thumbnail for ${pdfPath}:`, error);
        
        // Mark as failed but still remove from queue
        setThumbnails(prev => ({
          ...prev,
          [pdfPath]: null
        }));
        setThumbnailsToGenerate(prev => prev.slice(1));
      }
    };
    
    generateNextThumbnail();
  }, [pdfJsLoaded, thumbnailsToGenerate]);

  // Function to generate a thumbnail from a PDF
  const generatePdfThumbnail = async (pdfPath) => {
    try {
      // Load the PDF file
      const loadingTask = window.pdfjsLib.getDocument(pdfPath);
      const pdf = await loadingTask.promise;
      
      // Get the first page
      const page = await pdf.getPage(1);
      
      // Set the scale for the thumbnail
      const viewport = page.getViewport({ scale: 0.5 });
      
      // Create a canvas for rendering
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      
      // Render the PDF page to the canvas
      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      
      await page.render(renderContext).promise;
      
      // Convert the canvas to a data URL
      return canvas.toDataURL('image/jpeg', 0.8);
    } catch (error) {
      console.error('Error generating PDF thumbnail:', error);
      return null;
    }
  };

  // Check scroll buttons when component mounts or window resizes
  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, []);

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
  
  // Function to open PDF from the public folder
  const openPdf = (pdfPath) => {
    window.open(pdfPath, '_blank');
  };

  // Helper to get thumbnail status
  const getThumbnailStatus = (pdfPath) => {
    if (thumbnails[pdfPath]) {
      return 'loaded';
    } else if (thumbnails[pdfPath] === null) {
      return 'failed';
    } else if (thumbnailsToGenerate.includes(pdfPath)) {
      return 'pending';
    } else {
      return 'unknown';
    }
  };

  return (
    <div className="gallery-container">      
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
          {papers.map((paper, index) => {
            const thumbnailStatus = getThumbnailStatus(paper.pdfPath);
            
            return (
              <div 
                key={index} 
                className="paper-card" 
                onClick={() => openPdf(paper.pdfPath)}
              >
                <div className="thumbnail-container">
                  {thumbnailStatus === 'loaded' ? (
                    <img 
                      src={thumbnails[paper.pdfPath]}
                      alt={paper.title}
                      className="thumbnail-image"
                    />
                  ) : (
                    <div className="thumbnail-loading">
                      {!pdfJsLoaded ? 'Loading PDF.js...' : 
                       thumbnailStatus === 'pending' ? 'Generating preview...' : 
                       thumbnailStatus === 'failed' ? 'Preview unavailable' : 
                       'Waiting...'}
                    </div>
                  )}
                </div>
                <div className="paper-info">
                  <div className="paper-title">{paper.title}</div>
                  <div className="paper-field">{paper.field}</div>
                  <div className="paper-author">{paper.author}</div>
                </div>
              </div>
            );
          })}
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
          margin: 1rem auto;
          padding: 2rem 24px;
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
          background-color: #f3f3f3;
          border: 2px solid black;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .paper-card:hover {
          background: black;
          color: white
        }
        
        .paper-card:hover .thumbnail-image {
          transform: scale(1.05);
        }
        
        .paper-card:hover .thumbnail-overlay {
          opacity: 1;
        }
        
        .thumbnail-container {
          width: 100%;
          height: 224px;
          background-color: black;
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
        
        .thumbnail-loading {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1rem;
          color: #666;
          font-size: 0.875rem;
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
          margin-bottom: 0.15rem;
        }

        .paper-field {
          font-style: italic;
          font-size: 0.75rem;
          margin-bottom: 0.5rem;
        }
        
        .paper-author {
          font-size: 0.875rem;
        }
        
        .scroll-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background-color: #f3f3f3;
          padding: 0.5rem;
          border: 1px solid black;
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
          color: white;
          background-color: black;
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