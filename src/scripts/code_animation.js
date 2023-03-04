let codeAnimationIndex = 0;
const CODE_ANIMATION_LENGHT = 30;

// for detecting scroll events
let oldScrollY;
let scrollDelta = 25;

export function codeAnimation(addRows=true, index=0) {
    // when the user scrolls down, each line of this array will be added to the dom
    // this array is of lenght 29
    let codeArray = [
        // '<p></p>',
        "<p>let pan = []</p>",
        "<p>let pot = [];</p>",
        "<p>let eatingPlate = [];</p>",
        '<p>let meatIngredients = ["raw ground beef", "seasoning", "garlic", "bbq sauce", "mustard"];</p>',
        '<p>let otherIngredients = [parmessan cheese", "bolognese sauce"];</p>',
        '<p><br></p>',

        '<p>// cook the pasta</p>',
        '<p>console.log("Turning on the stove");</p>',
        '<p>console.log("adding the pasta to the pot");</p>',
        '<p>pot.push("spagetti");</p>',
        '<p><br></p>',
        
        '<p>// add ingredients to the pot</p>',
        '<p>meatIngredients.forEach(ingredient => {</p>',
        '<p class="m-left-25px">pan.push(ingredient);</p>',
        '<p>})</p>',
        '<p><br></p>',

        '<p>// cook the meat</p>',
        '<p>setTimeout(function() {</p>',
        '<p class="m-left-25px">// ingredients already cooked</p>',
        '<p class="m-left-25px">console.log("Turning off the stove");</p>',
        '<p>}, (15*60*1000));</p>',
        '<p><br></p>',

        '<p>// taking away the prepared food</p>',
        '<p>pot = ["cooked pasta"];</p>',
        '<p>pan = ["prepared meat"];</p>',
        '<p><br></p>',

        '<p>// your favourite dish is ready</p>',
        '<p>eatingPlate.push(pot[0],pan[0], otherIngredients[0], otherIngredients[1]);</p>',
        '<p>console.log("Bon Apetit");</p>',
        '<p><br></p>',

    ];

    // get the dom element that contains the animated code
    let codeDomElement = document.getElementById("animation-field");

    if (addRows===true) {
        codeDomElement.innerHTML += codeArray[index]
    } else {
        codeDomElement.removeChild(codeDomElement.lastChild)
    }

    

} 

function callbackFunction (event) {
    event.preventDefault()
    if (event.deltaY>0) {
        console.log(codeAnimationIndex)
        // if scroll down, check if index did not surpass the limit
        if (codeAnimationIndex<CODE_ANIMATION_LENGHT) {
            // if it did not surpass the limit add more code to the dom element
            codeAnimation(true, codeAnimationIndex);
            codeAnimationIndex++;
            codeAnimation(true, codeAnimationIndex);
            codeAnimationIndex++;
        } else if (codeAnimationIndex===CODE_ANIMATION_LENGHT) {
            // enable scrolling again
            console.log("or else");
            document.getElementById("g-base").classList.remove("stop-scrolling");
            document.getElementById("g-base").unbind('touchmove')
        }
    } else {
        // if scroll up, check code index
        if (codeAnimationIndex>0) {
            // if code animation index above 0, substract rows
            // the screen scrolling is blocked until the end of the animation
            codeAnimation(false);
            codeAnimationIndex--;
            codeAnimation(false);
            codeAnimationIndex--;
        } 
    }
}

function mobileCallbackFunction (event) {
    document.getElementById("g-base").classList.remove("stop-scrolling");
    // event.preventDefault()
    if (oldScrollY===undefined) {
        oldScrollY = event.changedTouches[0].clientY;
    } else if (event.changedTouches[0].clientY < oldScrollY) {
        // scrolling down
        
            // check for a bigger change using a delta
            if (codeAnimationIndex<CODE_ANIMATION_LENGHT) {
                // if it did not surpass the limit add more code to the dom element
                
                
                codeAnimation(true, codeAnimationIndex);
                codeAnimationIndex++;
            } else if (codeAnimationIndex===CODE_ANIMATION_LENGHT) {
                // enable scrolling again
                console.log("or else");
                document.getElementById("g-base").classList.remove("stop-scrolling");
            }
        
    } else if (event.changedTouches[0].clientY > oldScrollY) {
        
            if (codeAnimationIndex>0) {
                // if code animation index above 0, substract rows
                // the screen scrolling is blocked until the end of the animation
                codeAnimation(false);
                codeAnimationIndex--;
            } 
    }
    
    
}

function main2() {


    document.addEventListener("mousewheel", callbackFunction);
    document.addEventListener("touchmove", mobileCallbackFunction);
    document.addEventListener("touchend", (event) => {
        oldScrollY = undefined
    })
    
}

main2()