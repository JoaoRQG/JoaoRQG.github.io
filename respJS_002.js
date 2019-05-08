function Q1() {
    console.log('Q1');
    var x = Number.parseInt(document.getElementById('x').value);
    var y = Number.parseInt(document.getElementById('y').value);
    // Segue aqui seu código
    var resp = divide (x,y);
    console.log (resp);
    document.getElementById('RQ1').innerHTML = " " + resp;
    }
    function divide(x, y) {
        return 'X = ' + x + ' , Y = ' + y + ' com Quociente = ' + Math.floor(x/y) + ' e Resto = ' + (x%y)
}   
function Q2() {
    console.log('Q2');
    var a = Number.parseFloat(document.getElementById('a').value);
    var b = Number.parseFloat(document.getElementById('b').value);
    // Segue aqui seu código
    var resp2 = hipotenusa(a, b);
        console.log (resp2);
        document.getElementById('RQ2').innerHTML = " " + resp2;
    }
    function hipotenusa(a, b) {
        return 'A = ' + a + ' , B = ' + b + ' e a Hipotenusa = ' + Math.sqrt (Math.pow(a,2) + Math.pow(b,2))
}
function Q3() {
    console.log('Q3');
    var aux = document.getElementById('profissoes');
    var profissao = aux.options[aux.selectedIndex].text;
    // Segue aqui seu código
    var resp3 = profissoes(profissao);
    console.log (resp3);
    document.getElementById('RQ3').innerHTML = " " + resp3;
    }
    function profissoes(profissao) {
        if(profissao.endsWith('or'))
        return 'Profissão : ' + profissao + ' , Substantivo: Masculino '
        else if((profissao.endsWith('iz')))
        return 'Profissão : ' + profissao + ' , Substantivo: Feminino'
        else if(profissao == 'Musicista' || profissao == 'Presidente')
        return 'Profissão : ' + profissao + ' , Substantivo: Masculino ou Feminino'
        else if(profissao.endsWith('a'))
        return 'Profissão : ' + profissao + ' , Substantivo: Feminino'
        else if(profissao.endsWith('o'))
        return 'Profissão : ' + profissao + ' , Substantivo: Masculino'
        else
        return 'Profissão : ' + profissao + ' , Substantivo: Masculino ou Feminino'
}
function Q4() {
    console.log('Q4');
    var m_str = document.getElementById('m').value;
    var n_str = document.getElementById('n').value;
    var o_str = document.getElementById('o').value;
    // Segue aqui seu código
    var resp4 = lado(m_str, n_str, o_str);
    console.log (resp4);
    document.getElementById('RQ4').innerHTML = " " + resp4;
    }
function lado(m_str, n_str, o_str) {
    if (m_str && n_str && o_str)
        return ' M = ' + m_str + ' , N = ' + n_str + ' e O = ' + o_str
    else if (!m_str && n_str && o_str)
        return ' M = ' + Math.sqrt (Math.pow(o_str,2) - Math.pow(n_str,2)) + ' , N = ' + n_str + ' e O = ' + o_str
    else if (!n_str && m_str && o_str)
        return ' M = ' + m_str + ' , N = ' + Math.sqrt (Math.pow(o_str,2) - Math.pow(m_str,2)) + ' e O = ' + o_str  
    else if (!o_str && m_str && n_str)
        return ' M = ' + m_str + ' , N = ' + n_str + ' e O = ' + Math.sqrt (Math.pow(m_str,2) + Math.pow(n_str,2)) 
}
function Q5() {
    console.log('Q5');
    var altura = Number.parseFloat(document.getElementById('altura').value);
    var peso = Number.parseFloat(document.getElementById('peso').value);
    var aux = document.getElementById('generos');
    var genero = aux.options[aux.selectedIndex].text;
    // Segue aqui seu código
    var resp5 = IMC(altura, peso);
    var resp5_1 = Resultado(genero, altura, peso);
    console.log (resp5);
    console.log (resp5_1);
    document.getElementById('RQ5').innerHTML = " " + resp5 + resp5_1;
    }
    function IMC(altura, peso) {
        return 'Altura = ' + altura + ' , Peso = ' + peso + ' , IMC = ' + (Math.round(peso) / Math.pow(altura, 2)) + ' com '
    }
    function Resultado(genero, altura, peso) {
        if (genero == 'Masculino' && Math.round(peso) / Math.pow(altura, 2) < 18.5)
            return ' Gênero: ' + genero + ' e o Resultado: Magro '
        else if (genero == 'Masculino' && Math.round(peso) / Math.pow(altura, 2) > 18.5 && Math.round(peso) / Math.pow(altura, 2) < 24.9)
            return ' Gênero: ' + genero + ' e o Resultado: Sarado ' 
        else if (genero == 'Masculino' && Math.round(peso) / Math.pow(altura, 2) > 25 && Math.round(peso) / Math.pow(altura, 2) < 29.9)
            return ' Gênero: ' + genero + ' e o Resultado: Rechonchudo '
        else if (genero == 'Masculino' && Math.round(peso) / Math.pow(altura, 2) > 30)
            return ' Gênero: ' + genero + ' e o Resultado: Obeso '
        else if (genero == 'Feminino' && Math.round(peso) / Math.pow(altura, 2) < 18.5)
            return ' Gênero: ' + genero + ' e o Resultado: Magra '
        else if (genero == 'Feminino' && Math.round(peso) / Math.pow(altura, 2) > 18.5 && Math.round(peso) / Math.pow(altura, 2) < 24.9)
            return ' Gênero: ' + genero + ' e o Resultado: Sarada '
        else if (genero == 'Feminino' && Math.round(peso) / Math.pow(altura, 2) > 25 && Math.round(peso) / Math.pow(altura, 2) < 29.9)
            return ' Gênero: ' + genero + ' e o Resultado: Rechonchuda '
        else if (genero == 'Feminino' && Math.round(peso) / Math.pow(altura, 2) > 30)
            return ' Gênero: ' + genero + ' e o Resultado: Obesa '
}