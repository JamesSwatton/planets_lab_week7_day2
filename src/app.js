const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const NavInfo = require('./views/nav_info_view');
const PlanetInfo = require('./views/planet_info_view')

document.addEventListener('DOMContentLoaded', () => {
  console.log('Html Loaded');

  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();

  const selectElement = document.querySelector('.planets-menu')
  const navSelector = new NavInfo(selectElement);
  navSelector.bindEvents();
  
  const divInfo = document.querySelector('.planet-details')
  const planetInfo = new PlanetInfo(divInfo);
  planetInfo.bindEvents();

});
