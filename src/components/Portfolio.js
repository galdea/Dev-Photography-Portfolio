import { CodeIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const videoLinks = [
    {
      videoUrl:
        'https://www.youtube.com/embed/IMRO7PH6SGc?autoplay=1&modestbranding=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&fs=0&mute=1',
      websiteUrl: 'https://australescapes.com',
      videoName: 'Austral Escapes',
      videoDescription:
        'Website created for a Patagonian tourist agency, targeting American and Canadian travelers, offering curated tour packages.',
    },
    {
      videoUrl:
        'https://www.youtube.com/embed/umQhd0LE2Y0?autoplay=1&modestbranding=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&fs=0&mute=1',
      websiteUrl: 'https://europeanhobeessociety.org',
      videoName: 'European Hobbes Society',
      videoDescription:
        'Website created for the European Hobbes Society, promoting scholarly research and discussion on Thomas Hobbes, fostering a community of academics worldwide.',
    },
    {
      videoUrl:
        'https://www.youtube.com/embed/GZtDlMj8W9E?autoplay=1&modestbranding=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&fs=0&mute=1',
      websiteUrl: 'https://antonioelizalde.cl',
      videoName: 'Antonio Elizalde Photography',
      videoDescription:
        'Website created for scholar Antonio Elizalde, featuring APIs to access private drives containing publications and extensive malacology data, facilitating research and collaboration in the academic studies.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videoLinks.length);
    }, 50000); // Auto-switch every 50 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const onVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoLinks.length);
  };

  const onIframeClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoLinks.length);
  };

  return (
    <div className="container px-5 mx-auto text-center lg:px-40 pb-10 ">
      <div className="flex flex-col w-full mb-8">
        <CodeIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Portfolio
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Last three websites I've built
        </p>
      </div>
      <div className="carousel-controls">
        {videoLinks.map((_, index) => (
          <button
            key={index}
            className={`carousel-button ${
              index === currentIndex ? 'active' : ''
            }`}
            onClick={() => handleClick(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="video-carousel">
        <div
          className="video-container"
          style={{ position: 'relative', width: '100%', height: '60vh' }}
        >
          <a
            href={videoLinks[currentIndex].websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              className="responsive-video"
              src={videoLinks[currentIndex].videoUrl}
              title={`Video ${currentIndex + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              onEnded={onVideoEnd}
              onClick={onIframeClick}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                borderRadius: '10px',
              }}
            ></iframe>
          </a>
          <div className="video-info">
            <a
              href={videoLinks[currentIndex].websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>{videoLinks[currentIndex].videoName}</h1>
              <h2>{videoLinks[currentIndex].videoDescription}</h2>
            </a>
          </div>
        </div>
      </div>
      ...
      <style jsx>{`
        .responsive-video {
          left: 50%;
          transform: translate(-50%, 0); /* Adjust the transform */
          width: 80%;
          height: 100%;
          border-radius: 10px;
        }

        @media (max-width: 768px) {
          .responsive-video {
            width: 100%;
            height: 60vh; /* Adjust the height for mobile */
          }
          .video-info {
            margin-top: 5px; /* Reduce the margin-top for mobile */
          }
        }

        .video-info {
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease,
            background-color 0.3s ease;
          padding: 10px 20px;
          width: 80%;
          background-color: rgba(31, 41, 55, 0.6);
          margin-top: 10px;
          margin-bottom: 20px;
          top: 80%;
        }

        .video-info:hover {
          transform: translateX(-50%) scale(0.9);
        }

        h1 {
          font-size: 1.5rem;
          color: rgb(16, 185, 129);
          margin-bottom: 0.5rem;
        }

        h2 {
          font-size: 1rem;
          color: white;
        }

        .carousel-button {
          background-color: rgb(31, 41, 55);
          border: none;
          border-radius: 50%;
          padding: 10px;
          margin: 0 10px 10px;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: background-color 0.4s ease, transform 0.3s ease;
        }

        .carousel-button:hover {
          background-color: rgba(255, 255, 255, 1);
          transform: scale(1.1);
        }

        .carousel-button.active {
          background-color: rgb(71, 86, 132);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
      `}</style>
      ...
    </div>
  );
};

export default Portfolio;
