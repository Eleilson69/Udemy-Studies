// const test = document.querySelector('.teste');
// const data = new Date();
// const diaDaSemana = data.getDay();
// const dia = data.getDate();
// const mes = data.getMonth();
// const ano = data.getFullYear();
// const Segundos = data.getSeconds();

// const getDiaDaSemana = [
//     'domingo','Segunda-feira','terça-feira',
//     'quarta-feira','quinta-feira','sexta-feira','sabado'
// ];
// const getMesDoAno = [
//     'janeiro','fevereiro','março','abril','maio','junho',
//     'julio','agosto','setembro','outubro','novembro','dezembro'
// ]
// const outputDiaDaSemana = getDiaDaSemana[diaDaSemana];
// const outputMesDoAno = getMesDoAno[mes]

const getHours = () => {
const test = document.querySelector('.teste');
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hour = hours < 10 ? `0${hours}` : hours;
  const minute = minutes < 10 ? `0${minutes}` : minutes;
  const second = seconds < 10 ? `0${seconds}` : seconds;
  test.innerHTML = `${hour}:${minute}:${second}`
}
setInterval(() => {
    getHours()
}, 1000)

