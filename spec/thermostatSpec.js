describe ('Thermostat', function() {

  var thermostat;

  beforeEach( function() {
    thermostat = new Thermostat();
  })

  it('has a default temperature upon creation', function() {
    expect(thermostat._temp).toEqual(20);
  });
});