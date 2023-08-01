'use strict';

let fileUrl;

export class selection{
    button;
    quality;
    constructor(button, quality){
        this.button = button;
        this.quality = quality;

    };

    static formatAndQuality(filteredInfo, selector){
        fileUrl = filteredInfo;
        for(let i=0; i<filteredInfo.length; i++){
            const OptionElement = document.createElement('option');
            OptionElement.setAttribute('value', [i]);
            OptionElement.textContent = filteredInfo[i].qualityLabel;
            selector.appendChild(OptionElement);
        };
    };

    download(){
        let videoUrl = fileUrl.filter((quality) => {
            return this.quality === quality.qualityLabel;
        }).map((url) => {
            return url.URL;
        });

        const fileName = 'myvideo.mp4';
        const blob = new Blob([videoUrl], {type: 'video/mp4'});

        this.button.href = URL.createObjectURL(blob);
        this.button.download = fileName;
    }
};