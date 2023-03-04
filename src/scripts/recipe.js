function makePasta() {
    let pan = [];
    let pot = [];
    let eatingPlate = [];
    let meatIngredients = ["raw ground beef", "seasoning", "garlic", "bbq sauce", "mustard"];
    let otherIngredients = ["parmessan cheese", "bolognese sauce"];

    // cook the pasta
    console.log("Turning on the stove");
    console.log("adding the pasta to the pot");
    pot.push("spagetti");

    // add ingredients to the pot
    meatIngredients.forEach(ingredient => {
        pan.push(ingredient);
    })

    // cook the meat
    setTimeout(function() {
        // ingredients already cooked
        console.log("Turning off the stove");

    }, (15*60*1000));
    
    // taking away the prepared food
    pot = ["cooked pasta"];
    pan = ["prepared meat"];

    // your favourite dish is ready
    eatingPlate.push(pot[0],pan[0], otherIngredients[0], otherIngredients[1]);
    console.log("Bon Apetit");
}