let rs = require('readline-sync');
let Pergunta1 = rs.questionFloat('Qual o seu peso?\n');
let Pergunta2 = rs.questionFloat('Qual a sua altura?\n');
let IMC = (Pergunta1 / (Pergunta2*Pergunta2));
    if (IMC < 18.5) {
        console.log ("Seu IMC é" + IMC + ' Você está abaixo do peso.')
    } 
    else if (IMC >= 18.5 && IMC < 24.9) {
        console.log ('Seu IMC é ' + IMC + " Você está no seu peso ideal, parabéns!")
    }
    else if (IMC >= 24.9 && IMC < 29.9) {
        console.log ('Seu IMC é ' + IMC + " Você está Levemente acima do peso.")
    }
    else if (IMC > 29.9 && IMC < 34.9) {
        console.log ('Seu IMC é ' + IMC + " Obesidade grau 1.")
    }
    else if (IMC > 34.9 && IMC < 39.9) {
        console.log ('Seu IMC é ' + IMC + ' Obesidade grau 2. (Severa)')
    }
    else if (IMC > 39.9) {
        console.log ('Seu IMC é ' + IMC + ' Obesidade grau 3. (Mórbida)')
    }
    


    else {
        console.log ('Digite valores válidos');
    }
