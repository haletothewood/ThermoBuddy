'use strict';

function Thermostat() {
  this._temp = 20
};

Thermostat.prototype.turnUp = function() {
  this._temp += 1
};