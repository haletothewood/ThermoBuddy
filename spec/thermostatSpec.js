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
    for (var i = 0; i < 11; i++) {
      thermostat.turnDown();
    }
    expect(thermostat.getTemp()).toEqual(10);
  });

  it('starts with power save mode enabled', function () {
    expect(thermostat.isPowerSaveModeOn()).toBe(true);
  });

  it('has a maximum temperature of 25 degrees when in power save mode', function () {
    for (var i = 0; i <= 6; i++) {
      thermostat.turnUp();
    }
    expect(thermostat.getTemp()).toEqual(25);
  });

  it('has a function to disable power save mode', function () {
    thermostat.disablePowerSaveMode();
    expect(thermostat.isPowerSaveModeOn()).toBe(false)
  });

  it('has a function to enable power save mode', function () {
    thermostat.enablePowerSaveMode();
    expect(thermostat.isPowerSaveModeOn()).toBe(true)
  });

  it('has a maximum temperature of 32 degrees when not in power save mode', function () {
    thermostat.disablePowerSaveMode();
    for (var i = 0; i <= 13; i++) {
      thermostat.turnUp();
    }
    expect(thermostat.getTemp()).toEqual(32);
  });

  it('has a reset button that resets the temperature to 20 degrees', function () {
    thermostat.turnUp(4);
    thermostat.reset();
    expect(thermostat.getTemp()).toEqual(20);
  });

  describe('displaying usage levels', function () {
    describe('when the temperature is below 18 degrees', function () {
      it('it is considered low-usage', function () {
        for (var i = 0; i < 4; i++) {
          thermostat.turnDown();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });

    describe('when the temperature is between 18 and 25 degrees', function () {
      it('it is considered medium-usage', function () {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });

    describe('when the temperature is anything else', function () {
      it('it is considered high-usage', function () {
        thermostat.disablePowerSaveMode();
        for (var i = 0; i < 6; i++) {
          thermostat.turnUp();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
});