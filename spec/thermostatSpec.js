'use strict';

describe('Thermostat', function () {

  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  })

  it('has a default temperature upon creation', function () {
    expect(thermostat._temp).toEqual(20);
  });

  it('has a function to turn the temperature up', function () {
    thermostat.turnUp(2);
    expect(thermostat._temp).toEqual(22);
  });

  it('has a function to turn the temperature down', function () {
    thermostat.turnDown(3);
    expect(thermostat._temp).toEqual(17);
  });

  it('has a minimum temperature of 10 degrees', function () {
    expect(thermostat._minTemp).toEqual(10);
  });

  it('starts with power save mode enabled', function () {
    expect(thermostat._powerSaveMode).toBe(true);
  });

  it('has a maximum temperature of 25 degrees when in power save mode', function () {
    expect(thermostat._maxTemp).toEqual(25);
  })

  it('has a maximum temperature of 32 degrees when not in power save mode', function () {
    thermostat.turnOffPowerSaveMode();
    expect(thermostat._maxTemp).toEqual(32);
  })

  it('has a reset button that resets the temperature to 20 degrees', function () {
    thermostat.turnUp(4);
    thermostat.reset();
    expect(thermostat._temp).toEqual(20);
  })
});