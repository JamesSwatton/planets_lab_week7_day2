const PubSub = require('../helpers/pub_sub.js')

const NavInfo = function(element){
    this.element = element;
    console.log(element)
}

NavInfo.prototype.bindEvents = function () {
    this.element.addEventListener('click', (event) => {
        console.log(event.target.id)
    const selectedPlanet = event.target.id;
    PubSub.publish('NavInfo:click', selectedPlanet);
    })
}





module.exports = NavInfo;