const PubSub = require('../helpers/pub_sub.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('NavInfo:click', (event) => {
    const selectedPlanetName = event.detail;
    console.log(event.detail)
    this.publishPlanetDetail(selectedPlanetName);
  })
}

SolarSystem.prototype.publishPlanetDetail = function(planetName) {
  let selectedPlanet = {}
  
  for (const planet of this.planets) {
    if (planet['name'] === planetName) {
      selectedPlanet = planet;
    }
  }
  PubSub.publish('Planets:selected-planet-ready', selectedPlanet)
};

module.exports = SolarSystem;
