'use strict';

function Thermostat() {
  this._temp = 20;
  this._minTemp = 10;
  this._maxTemp = 25;
  this._powerSaveMode = true;
};

Thermostat.prototype.turnUp = function (amount) {
  this._temp += amount;
};

Thermostat.prototype.turnDown = function (amount) {
  this._temp -= amount;
};

Thermostat.prototype.disablePowerSaveMode = function () {
  this._maxTemp = 32;
  this._powerSaveMode = false;
};

Thermostat.prototype.reset = function () {
  this._temp = 20;
};