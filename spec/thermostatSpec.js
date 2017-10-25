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
});