let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

document.getElementById('vars').innerHTML = " \
  let numeroUm = 1;<br>\
  let stringUm = '1';<br>\
  let numeroTrinta = 30;<br>\
  let stringTrinta = '30';<br>\
  let numeroDez = 10;<br>\
  let stringDez = '10';<br>\
"

// Há um bug caso numeroUm e stringUm sejam do mesmo tipo e mesmo valor
// Neste caso será executado o else porém com msg incorreta (valores são iguais)
// Para corrigir a partir do else:
// }else if(numeroUm != stringUm){
//   console.log('As variáveis numeroUm e stringUm não tem o mesmo valor');
// else{
//   console.log('As variáveis numeroUm e stringUm são identicas');
// }
//
// O mesmo para numeroDez stringDez

/*if (COMPARAR O numeroUm e a stringUm) {*/
if(numeroUm == stringUm && numeroUm !== stringUm ){
  document.getElementById('res1').innerHTML = 'As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes';
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes');
} else {
  document.getElementById('res1').innerHTML = 'As variáveis numeroUm e stringUm não tem o mesmo valor';
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor');
}

// removida comparação redundante
/*if (COMPARAR O numeroTrinta e a stringTrinta) {*/
if(numeroTrinta === stringTrinta){
  document.getElementById('res2').innerHTML = 'As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo';
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo');
} else {
  document.getElementById('res2').innerHTML = 'As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo';
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo');
}

/*if (COMPARAR O numeroDez e a stringDez) {*/
if(numeroDez == stringDez && numeroDez !== stringDez){
  document.getElementById('res3').innerHTML = 'As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes';
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes');
} else {
  document.getElementById('res3').innerHTML = 'As variáveis numeroDez e stringDez não tem o mesmo valor';
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor');
}

