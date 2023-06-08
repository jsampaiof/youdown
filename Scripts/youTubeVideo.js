'use strict';

import { videoInfo } from "./APIservice.js";

async function filter(){
    const video = await videoInfo();
    let videoFiltered = video.filter((quality) => {
      return quality.mimeType === 'video/mp4' || quality.qualityLabel > '144p';
    }).map((desc) => {
      return {URL:desc.url, Type: desc.mimeType, qualityLabel: desc.qualityLabel};
    })
    console.log(videoFiltered);
  }
  
  filter()