import { useEffect, useRef, useState } from 'react';
import '../HomePage/HomePage.css';

const Homepage = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [showFirstVideo, setShowFirstVideo] = useState(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const videoRefs = [useRef(null), useRef(null)];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const videos = [
    "/src/assets/IM.mp4",
    "/src/assets/IM2.mp4",
    "/src/assets/IM3.mp4"
  ];

  useEffect(() => {
    const handleTransition = () => {
      setShowFirstVideo((prev) => !prev);
      setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
    };

    const timer = setInterval(handleTransition, 3000); // Change every 3 seconds

    return () => clearInterval(timer);
  }, [videos.length]);

  useEffect(() => {
    const currentVideoRef = videoRefs[showFirstVideo ? 0 : 1].current;
    const nextVideoRef = videoRefs[showFirstVideo ? 1 : 0].current;

    currentVideoRef.src = videos[currentVideo];
    currentVideoRef.play();

    setTimeout(() => {
      nextVideoRef.src = videos[(currentVideo + 1) % videos.length];
      nextVideoRef.play();
    }, 1000); // Delay for smoother transition
  }, [currentVideo, videos, showFirstVideo, videoRefs]);

  return (
    <div className="homepage">
      <div className="videoWrapper">
        <video
          ref={videoRefs[0]}
          className={`video ${showFirstVideo ? 'visible' : 'hidden'}`}
          autoPlay
          muted
          loop
        >
          <source src={videos[currentVideo]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          ref={videoRefs[1]}
          className={`video ${showFirstVideo ? 'hidden' : 'visible'}`}
          autoPlay
          muted
          loop
        >
          <source src={videos[(currentVideo + 1) % videos.length]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h2>WHEN YOU ARE READY TO BAKE</h2> 
        <p>We partner with businesses who want to level up their website. Using our proven process, we align marketing and operations and optimize users funnels to create impact on the business sales & profits.</p>
        <div className="buttons">
          <button className="btn">SignIn</button>
          <button className="btn">See Our Recipes</button>
        </div>
        <img className="img" src='/src/assets/GoBuy.png' alt="GoBuy" className="overlayImage" />
      </div>
    </div>
  );
};

export default Homepage;
