"use strict"

let text = "De winnende lottonummers van deze week: 05,09,13,18,27,44. Proficiat aan alle deelnemers.";
const lottoNumbers = text.substring(40,56);
const formattedLottoNumbers = lottoNumbers.replace(",","|");

console.log(formattedLottoNumbers)