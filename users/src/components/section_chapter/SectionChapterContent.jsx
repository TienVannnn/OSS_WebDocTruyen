import React, { useEffect, useState } from "react";

function SectionChapterContent({ data }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(data.sound));

  const handlePlayAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
      setIsPlaying(true);
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    return () => {
      audio.pause();
      audio.currentTime = 0; 
    };
  }, [audio]);

  return (
    <>
      <div className="chapter-content mb-3">
        {data.sound && (
          <button className="btn btn-primary my-4" onClick={handlePlayAudio}>
            {isPlaying ? "Dừng" : "Đọc tự động"}
          </button>
        )}
        <div
          className="py-2 text-left mt-2"
          style={{ fontSize: "25px" }}
          dangerouslySetInnerHTML={{ __html: data.content }}
        ></div>
      </div>
    </>
  );
}

export default SectionChapterContent;
