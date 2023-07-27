'use strict';

export class selection{
    constructor(){};

    static formatAndQuality(filteredInfo, selector){
        for(let i=0; i<filteredInfo.length; i++){
            const OptionElement = document.createElement('option');
            OptionElement.setAttribute('value', [i]);
            OptionElement.textContent = filteredInfo[i].qualityLabel;
            // if(OptionElement === selector.firstElementChild){
            //     OptionElement.setAttribute('selected', 'selected');
            // }else{};
            selector.appendChild(OptionElement);
        };
    };
};