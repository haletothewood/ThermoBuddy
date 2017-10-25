'use strict';

function Thermostat() {
  this._temp = 20
};

Thermostat.prototype.turnUp = function(amount) {
  this._temp += amount
};

Thermostat.prototype.turnDown = function(amount) {
  this._temp -= amount
};