function convertMtoFt(meters) {
    const feet = meters * 3.28084;
    const feetInt = Math.floor(feet);
    const inches = Math.round((feet - feetInt) * 12);
    return `${feetInt}' ${inches}"`;
}

function convertKgtoLb(kilos) {
    const pounds = kilos * 2.20462;
    return `${pounds} lbs`;
}

function changePageElement(elemClasses, index=0) {
    // Bringing the classes together for the query
    const selector = elemClasses.join('');
    const heightElems = document.querySelectorAll(selector);
    console.log(heightElems)
    // Check if the element for showing a person's height is not on the page
    if(heightElems.length < 1) return
    const heightElem = heightElems[index]
    console.log(heightElem.innerText)
    const heightElemText = heightElem.innerText.trim()
    console.log(heightElemText.endsWith("m"))
    // Making sure the text is height
    if(!heightElemText.endsWith("m")) return
    // Removing the m from the height
    const heightElemRemoveChar = heightElemText.substring(0,heightElemText.length-2);
    console.log(heightElemRemoveChar)
    mToFt = convertMtoFt(heightElemRemoveChar)
    console.log(mToFt)
    heightElem.innerText = mToFt
}

// Main height shown: #Z0LcW.t2b5Cf
// Bio height shown: #LrzXr.kno-fv.wHYlTd.z8gr9e
// 'Also search for': #C9iYEe.ellip
changePageElement(['.Z0LcW', '.t2b5Cf']);
changePageElement(['.LrzXr', '.kno-fv', '.wHYlTd', '.z8gr9e'], index=1);



