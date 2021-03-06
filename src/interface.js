$(document).ready(function () {

  var thermostat = new Thermostat();
  updateTemperature();

  $('#turn-up').click(function () {
    thermostat.turnUp();
    updateTemperature();
  });

  $('#turn-down').click(function () {
    thermostat.turnDown();
    updateTemperature();
  });

  $('#reset').click(function () {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersave-on').click(function () {
    thermostat.enablePowerSaveMode();
    $('#power-save-status').text('on');
    updateTemperature();
  })

  $('#powersave-off').click(function () {
    thermostat.disablePowerSaveMode();
    $('#power-save-status').text('off');
    updateTemperature();
  })

  function updateTemperature() {
    $('#temp').text(thermostat.getTemp());
    $('#temp-box').attr('class', thermostat.energyUsage());
  }

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text('Current temperature: ' + data.main.temp + String.fromCharCode(176) + 'C');
    })
  })
});