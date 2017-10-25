'use strict';

function Thermostat() {
  this._temp = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this._maxTemp = 25;
  this._powerSaveMode = true;
};

Thermostat.prototype.getTemp = function () {
  return this._temp;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this._temp === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.turnUp = function () {
  this._temp += 1;
};

Thermostat.prototype.turnDown = function () {
  if (this.isMinimumTemperature()) {
    return;
  }
  this._temp -= 1;
};

Thermostat.prototype.disablePowerSaveMode = function () {
  this._maxTemp = 32;
  this._powerSaveMode = false;
};

Thermostat.prototype.enablePowerSaveMode = function () {
  this._maxTemp = 25;
  this._powerSaveMode = true;
};

Thermostat.prototype.reset = function () {
  this._temp = 20;
};