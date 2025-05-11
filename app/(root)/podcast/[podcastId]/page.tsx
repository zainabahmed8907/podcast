import React from "react";

const PodcastId = ({ params }: { params: { podcastId: string } }) => {
  return (
    <div className="text=[#ffffff] ">
      <p className="text-[#ffffff]">Podcast Id {params.podcastId}</p>
    </div>
  );
};

export default PodcastId;
