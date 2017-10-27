'use strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
  this._temp = this.DEFAULT_TEMPERATURE;
  this._powerSaveMode = true;
};

Thermostat.prototype.getTemp = function () {
  this.reduceIfOverPSMOnMax();
  return this._temp;
};

Thermostat.prototype.isMinimumTemperature = function () {
  return this._temp === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.isMaximumTemperature = function () {
  if (this.isPowerSaveModeOn()) {
    return this._temp === this.MAX_TEMP_PSM_ON;
  }
  return this._temp === this.MAX_TEMP_PSM_OFF;
}

Thermostat.prototype.turnUp = function () {
  if (this.isMaximumTemperature()) {
    return;
  }
  this._temp += 1;
};

Thermostat.prototype.turnDown = function () {
  if (this.isMinimumTemperature()) {
    return;
  }
  this._temp -= 1;
};

Thermostat.prototype.isPowerSaveModeOn = function () {
  return this._powerSaveMode === true;
}

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

Thermostat.prototype.energyUsage = function () {
  if (this.getTemp() < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return ('low-usage');
  }
  if (this.getTemp() > this.MAX_TEMP_PSM_ON) {
    return ('high-usage');
  }
  return ('medium-usage');
}

Thermostat.prototype.reduceIfOverPSMOnMax = function () {
  if (this._temp > this.MAX_TEMP_PSM_ON && this._powerSaveMode === true) {
    this._temp = this.MAX_TEMP_PSM_ON;
  }
}