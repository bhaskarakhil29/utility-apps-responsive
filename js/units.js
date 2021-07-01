const centimeter = document.querySelector("#centimeter");
const meter = document.querySelector("#meter");
const kilometer = document.querySelector("#kilo");
const miles = document.querySelector("#miles");

centimeter.addEventListener("input", (e) => {
  meter.value = centimeter.value / 100.0;
  kilometer.value = meter.value / 1000.0;
  miles.value = kilometer.value / 1.60934;
});

meter.addEventListener("input", (e) => {
  centimeter.value = meter.value * 100;
  kilometer.value = meter.value / 1000.0;
  miles.value = kilometer.value / 1.60934;
});
kilometer.addEventListener("input", (e) => {
  centimeter.value = kilometer.value * 100000;
  meter.value = kilometer.value * 1000;
  miles.value = kilometer.value / 1.60934;
});
miles.addEventListener("input", (e) => {
  kilometer.value = miles.value * 1.60934;
  meter.value = kilometer.value * 1000;
  centimeter.value = meter.value * 100;
});
