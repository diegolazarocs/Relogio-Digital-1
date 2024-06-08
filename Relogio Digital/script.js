function atualizarTempo() {
  const dislay = document.querySelector(".visor");
  const agora = new Date();

  const horario =
    corrigirHorario(agora.getHours()) +
    ":" +
    corrigirHorario(agora.getMinutes()) +
    ":" +
    corrigirHorario(agora.getSeconds());

  dislay.textContent = horario;
}
function corrigirHorario(numero) {
  if (numero < 10) {
    numero = "0" + numero;
  }
  return numero;
}
setInterval(atualizarTempo, 1000);
