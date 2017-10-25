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
    thermostat.turnUp()
    expect(thermostat._temp).toEqual(21);
  });
});