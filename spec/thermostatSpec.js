'use strict';

describe('Thermostat', function () {

  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  })

  it('has a default temperature of 20 degrees', function () {
    expect(thermostat.getTemp()).toEqual(20);
  });

  it('has a function to turn the temperature up', function () {
    thermostat.turnUp();
    expect(thermostat.getTemp()).toEqual(21);
  });

  it('has a function to turn the temperature down', function () {
    thermostat.turnDown();
    expect(thermostat.getTemp()).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees', function () {
    for (var i=0; i < 11; i++) {
      thermostat.turnDown();
    }
    expect(thermostat.getTemp()).toEqual(10);
  });

  it('starts with power save mode enabled', function () {
    expect(thermostat.isPowerSaveModeOn()).toBe(true);
  });

  it('has a maximum temperature of 25 degrees when in power save mode', function () {
    expect(thermostat._maxTemp).toEqual(25);
  })

  it('has a function to disable power save mode', function () {
    thermostat.disablePowerSaveMode();
    expect(thermostat.isPowerSaveModeOn()).toBe(false)
  })

  it('has a function to enable power save mode', function () {
    thermostat.enablePowerSaveMode();
    expect(thermostat.isPowerSaveModeOn()).toBe(true)
  })

  it('has a maximum temperature of 32 degrees when not in power save mode', function () {
    thermostat.disablePowerSaveMode();
    expect(thermostat._maxTemp).toEqual(32);
  })

  it('has a reset button that resets the temperature to 20 degrees', function () {
    thermostat.turnUp(4);
    thermostat.reset();
    expect(thermostat.getTemp()).toEqual(20);
  })
});