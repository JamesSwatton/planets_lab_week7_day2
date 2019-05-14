const PubSub = require('../helpers/pub_sub.js')

const PlanetView = function(container) {
    this.container = container;
}

PlanetView.prototype.bindEvents = function () {
    PubSub.subscribe('Planets:selected-planet-ready', (event) => {
        const planet = event.detail;
        console.log(planet);
        this.render(planet);
    })
}

PlanetView.prototype.render = function(planet){
    this.container.innerHTML = '';
    const infoHeader = document.createElement('h2');
    infoHeader.textContent = `${planet['name']}`
    this.container.appendChild(infoHeader)
    
    const planetKeys = (Object.keys(planet))
    for (i = 1; i < planetKeys.length -1; i++){
        const infoParagraph = document.createElement('p');
        infoParagraph.textContent = `${planetKeys[i]}: ${planet[planetKeys[i]]}`
        this.container.appendChild(infoParagraph)
    }
    
    
    
    
    
    
    
    // const planetPropertiesArray = Object.entries(planet)
    // for (i = 1; i < planetPropertiesArray.length; i++){
    //     const infoParagraph = document.createElement('p');
    //     infoParagraph.textContent = Object.entries(planetPropertiesArray)[i]
    //     this.container.appendChild(infoParagraph)
    // }

    
};
 
module.exports = PlanetView;