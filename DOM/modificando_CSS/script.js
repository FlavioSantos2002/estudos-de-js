/*vale lembra que a modificação é inline ou seja se ouver uma tag inteira sobre algum documento externo css ele sera sobrescrito
Ou seja o melhor sao modificações pequenas que por meio ne class
*/

var subtitulo = document.querySelector(".teste")
subtitulo.style.color = "red"

//note que sobreescreve o css externo

//podemos tambem trazer o css diretamente pro js

var paragrafo = document.querySelector("#paragrafo")
console.log(paragrafo)

paragrafo.style.cssText = "color: yellow; font-size: 0.5cm" //css no js

/*obs: em funções css que tenham - (hirfem), ele é removido e escrito conforme js 
            no JS: backgroundColor / no CSS: background-color
*/
subtitulo.style.backgroundColor = "black"
