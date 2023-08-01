'use strict';

export class videoFilter{
  constructor(){};

  static filter(video){
    let videoFiltered = video.filter((quality) => {
      return quality.mimeType === 'video/mp4' || quality.qualityLabel > '144p';
    }).map((desc) => {
      return {URL:desc.url, Type: desc.mimeType, qualityLabel: desc.qualityLabel};
    });
  
    return videoFiltered;
  };
};