'use strict';

// import { APIService } from "./APIservice.js";

// export class videoFilter extends APIService{
export class videoFilter{
  constructor(){
    // super()
  }

  static async filter(video){
    // this.videoInfo();
    // const video = await videoInfo();
    let videoFiltered = video.filter((quality) => {
      return quality.mimeType === 'video/mp4' || quality.qualityLabel > '144p';
    }).map((desc) => {
      return {URL:desc.url, Type: desc.mimeType, qualityLabel: desc.qualityLabel};
    })
    console.log(videoFiltered);
  }
}