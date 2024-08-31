import React from "react";
import "./CircleAnimationExperience.css";
export default function CircleAnimationExperience({ experience }) {
  const backgroundImages = [
    "conic-gradient(transparent 0% 0.5%, #f58cb2 0.5% 12.5%, transparent 12.5% 13.5%, #f58cb223 13.5% 25%, transparent 25% 26%, #f58cb223 26% 37.5%, transparent 37.5% 38.5%, #f58cb223 38.5% 49%, transparent 49% 50%, #f58cb223 50% 62.5%, transparent 62.5% 63.5%, #f58cb223 64.5% 75%, transparent 75% 76%, #f58cb223 76% 87.5%, transparent 87.5% 88.5%, #f58cb223 88.5% 99.5%, transparent 99.5% 100%)",
    "conic-gradient(transparent 0% 0.5%, #f58cb2 0.5% 12.5%, transparent 12.5% 13.5%, #f58cb2 13.5% 25%, transparent 25% 26%, #f58cb223 26% 37.5%, transparent 37.5% 38.5%, #f58cb223 38.5% 49%, transparent 49% 50%, #f58cb223 50% 62.5%, transparent 62.5% 63.5%, #f58cb223 64.5% 75%, transparent 75% 76%, #f58cb223 76% 87.5%, transparent 87.5% 88.5%, #f58cb223 88.5% 99.5%, transparent 99.5% 100%)",
    "conic-gradient(transparent 0% 0.5%, #f58cb2 0.5% 12.5%, transparent 12.5% 13.5%, #f58cb2 13.5% 25%, transparent 25% 26%, #f58cb2 26% 37.5%, transparent 37.5% 38.5%, #f58cb223 38.5% 49%, transparent 49% 50%, #f58cb223 50% 62.5%, transparent 62.5% 63.5%, #f58cb223 64.5% 75%, transparent 75% 76%, #f58cb223 76% 87.5%, transparent 87.5% 88.5%, #f58cb223 88.5% 99.5%, transparent 99.5% 100%)",
    "conic-gradient(transparent 0% 0.5%, #f58cb2 0.5% 12.5%, transparent 12.5% 13.5%, #f58cb2 13.5% 25%, transparent 25% 26%, #f58cb2 26% 37.5%, transparent 37.5% 38.5%, #f58cb2 38.5% 49%, transparent 49% 50%, #f58cb223 50% 62.5%, transparent 62.5% 63.5%, #f58cb223 64.5% 75%, transparent 75% 76%, #f58cb223 76% 87.5%, transparent 87.5% 88.5%, #f58cb223 88.5% 99.5%, transparent 99.5% 100%)",
    "conic-gradient(transparent 0% 0.5%, #f58cb2 0.5% 12.5%, transparent 12.5% 13.5%, #f58cb2 13.5% 25%, transparent 25% 26%, #f58cb2 26% 37.5%, transparent 37.5% 38.5%, #f58cb2 38.5% 49%, transparent 49% 50%, #f58cb2 50% 62.5%, transparent 62.5% 63.5%, #f58cb223 64.5% 75%, transparent 75% 76%, #f58cb223 76% 87.5%, transparent 87.5% 88.5%, #f58cb223 88.5% 99.5%, transparent 99.5% 100%)",
    "conic-gradient(transparent 0% 0.5%, #f58cb2 0.5% 12.5%, transparent 12.5% 13.5%, #f58cb2 13.5% 25%, transparent 25% 26%, #f58cb2 26% 37.5%, transparent 37.5% 38.5%, #f58cb2 38.5% 49%, transparent 49% 50%, #f58cb2 50% 62.5%, transparent 62.5% 63.5%, #f58cb2 64.5% 75%, transparent 75% 76%, #f58cb223 76% 87.5%, transparent 87.5% 88.5%, #f58cb223 88.5% 99.5%, transparent 99.5% 100%)",
    "conic-gradient(transparent 0% 0.5%, #f58cb2 0.5% 12.5%, transparent 12.5% 13.5%, #f58cb2 13.5% 25%, transparent 25% 26%, #f58cb2 26% 37.5%, transparent 37.5% 38.5%, #f58cb2 38.5% 49%, transparent 49% 50%, #f58cb2 50% 62.5%, transparent 62.5% 63.5%, #f58cb2 64.5% 75%, transparent 75% 76%, #f58cb2 76% 87.5%, transparent 87.5% 88.5%, #f58cb223 88.5% 99.5%, transparent 99.5% 100%)",
    "conic-gradient(transparent 0% 0.5%, #f58cb2 0.5% 12.5%, transparent 12.5% 13.5%, #f58cb2 13.5% 25%, transparent 25% 26%, #f58cb2 26% 37.5%, transparent 37.5% 38.5%, #f58cb2 38.5% 49%, transparent 49% 50%, #f58cb2 50% 62.5%, transparent 62.5% 63.5%, #f58cb2 64.5% 75%, transparent 75% 76%, #f58cb2 76% 87.5%, transparent 87.5% 88.5%, #f58cb2 88.5% 99.5%, transparent 99.5% 100%)",
  ];

  const backgroundImageIndex = Math.floor(experience / 12.5);
  const selectedBackgroundImage = backgroundImages[backgroundImageIndex];
  return (
    <div className="circle-experience" style={{ backgroundImage: selectedBackgroundImage }}>
      <div className="circle-experience-part"></div>
      <div className="circle-experience-part"></div>
      <div className="circle-experience-part"></div>
      <div className="circle-experience-part"></div>
      <div className="inner">
        <h1>{experience}%</h1>
      </div>
    </div>
  );
}
