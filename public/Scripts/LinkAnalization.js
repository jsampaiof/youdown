'use strict';

import { videoFilter } from './VideoInfo.js';
import { selection } from './FormatAndQuality.js';

const link = document.querySelector('#ytlink');
const linkButton = document.querySelector('#image-button');
const selector = document.querySelector('#options');
const downloadButton = document.querySelector('.download');
let quality;

linkButton.addEventListener('click', async function(){
    while(selector.firstChild){
        selector.removeChild(selector.firstChild)
    }
    const url = link.value;
    if(url){
        const lastEleven = url.slice(-11);
        const response = await fetch(`/api?link=${lastEleven}`)
        const info = await response.json();
        const filter = videoFilter.filter(info);
        selection.formatAndQuality(filter, selector);
        quality = selector.options[selector.selectedIndex].text;
    }else{
        window.alert('Link não encontrado!')
    };
});

selector.addEventListener('change', function(event){
    quality = event.target.options[event.target.selectedIndex].text;
})

downloadButton.addEventListener('click', function(){
    const download = new selection(downloadButton, quality);
    download.download();
})