
//COMMENT: 9 images provided for use 1-9 (request for 20 to be displayed in bootstrap grid met by repeating images)
const I1 = `https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg`
const I2 = `https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg`
const I3 = `https://acre-images.s3.amazonaws.com/image-5acac631504581523238449_medium.jpeg`
const I4 = `https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg`
const I5 = `https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg`
const I6 = `https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg`
const I7 = `https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg`
const I8 = `https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg`
const I9 = `https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg`

const AllImages = [I1,I2,I3,I4,I5,I6,I7,I8,I9]
const rowBreaks = [3,7,11,15]

function addImages(pictures){

    let finalGrid = []
    ///COMMENT: ensure 20 photos are used and displayed

    for(let i= 0; i<20;i++){
        let num = i+1
        let image = pictures[i % 9 ? i % 9 : 0]
        let rowStart = `<div class="row">`
        let rowEnd =  `</div>`

        if(i==0){
        //COMMENT: Initial Row started
        finalGrid.push(rowStart + 
            `<div class="col-sm single">
            <input type="checkbox" id="image${num}"/>
            <label for="image${num}">
                <img src="${image}"/>
            </label>
            </div>`
        )
        //COMMENT: newRows generated
        } else if (rowBreaks.includes(i)){
            finalGrid.push(
                `<div class="col-sm single">
                <input type="checkbox" id="image${num}"/>
                <label for="image${num}">
                    <img src="${image}"/>
                </label>
                </div>` + rowEnd + rowStart
            )
            //COMMENT: final row 
        } else if (i==19){
            finalGrid.push(
                `<div class="col-sm single">
                <input type="checkbox" id="image${num}"/>
                <label for="image${num}">
                    <img src="${image}"/>
                </label>
                </div>` + rowEnd
            )
            //COMMENT: the columns within rows
        } else {
            finalGrid.push(
                `<div class="col-sm single">
                <input type="checkbox" id="image${num}"/>
                <label for="image${num}">
                    <img src="${image}"/>
                </label>
                </div>` 
            )
        }
    }
  
    return finalGrid.join(" ")
}

let grid = addImages(AllImages)
//COMMENT: insert composed bootstrap grid into the html file
document.getElementById("grid").innerHTML = grid
