const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const results = this.journeys.map(journey => journey.startLocation);
  return results;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const results = this.journeys.map(journey => journey.endLocation);
  return results;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const results = this.journeys.filter(journey => journey.transport === transport);
  return results;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const results = this.journeys.filter(journey => journey.distance >= minDistance);
  return results;
};

Traveller.prototype.getDistances = function () {
  const results = this.journeys.map(journey => journey.distance);
  return results;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const distances = this.getDistances();
  const total = distances.reduce( (accumulator, distance) => {
    return accumulator + distance;
  }, 0 );
  return total;
};

Traveller.prototype.getModesOfTransport = function () {
  const results = this.journeys.map(journey => journey.transport);
  return results;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const alltransports = this.getModesOfTransport();
  return alltransports.filter( (item, index) => {
    return alltransports.indexOf(item) === index;
  });
};


module.exports = Traveller;
