function Q1() {
    console.log('Q1');
    var x = Number.parseInt(document.getElementById('x').value);
    var y = Number.parseInt(document.getElementById('y').value);
    // Segue aqui seu código
    console.log('X = ' + x);
    console.log('Y = ' + y);
    console.log('Quociente = ' + Math.floor(x/y));
    console.log('Resto =' + (x%y));
}
function Q2() {
    console.log('Q2');
    var a = Number.parseFloat(document.getElementById('a').value);
    var b = Number.parseFloat(document.getElementById('b').value);
    // Segue aqui seu código
    console.log('A = ' + a);
    console.log('B = ' + b);
    console.log('Hipotenusa = ' + Math.sqrt (Math.pow(a,2) + Math.pow(b,2)));
}
function Q3() {
    console.log('Q3');
    var aux = document.getElementById('profissoes');
    var profissao = aux.options[aux.selectedIndex].text;
    // Segue aqui seu código
    if(profissao.endsWith('or'))
    {
        console.log('Profissão: ' + profissao);
        console.log('Substantivo Masculino')
    }
    else if(profissao.endsWith('iz'))
    {
        console.log('Profissão: ' + profissao);
        console.log('Substantivo Feminino')
    }
    else if(profissao == 'Musicista' || profissao == 'Presidente')
    {
        console.log('Profissão: ' + profissao);
        console.log('Substantivo Masculino ou Feminino')
    }
    else if(profissao.endsWith('a'))
    {
        console.log('Profissão: ' + profissao);
        console.log('Substantivo Feminino')
    }
    else if(profissao.endsWith('o'))
    {
        console.log('Profissão: ' + profissao);
        console.log('Substantivo Masculino')
    }
    else
    {
        console.log('Profissão: ' + profissao);
        console.log('Substantivo Masculino ou Feminino')
    }
}
function Q4() {
    console.log('Q4');
    var m_str = document.getElementById('m').value;
    var n_str = document.getElementById('n').value;
    var o_str = document.getElementById('o').value;
    // Segue aqui seu código
    if (m_str) {
        console.log('M = ' + m_str);
    }
    else {
        console.log('M = ' + Math.sqrt (Math.pow(o_str,2) - Math.pow(n_str,2)));
    }
    if (n_str){
        console.log('N = ' + n_str);
    }
    else {
        console.log('N = ' + Math.sqrt (Math.pow(o_str,2) - Math.pow(m_str,2)));
    }
    if (o_str) {
        console.log('O = ' + o_str);
    }
    else {
        console.log('O = ' + Math.sqrt (Math.pow(m_str,2) + Math.pow(n_str,2)));
    }
}
function Q5() {
    console.log('Q5');
    var altura = Number.parseFloat(document.getElementById('altura').value);
    var peso = Number.parseFloat(document.getElementById('peso').value);
    var aux = document.getElementById('generos');
    var genero = aux.options[aux.selectedIndex].text;
    // Segue aqui seu código
    console.log('Altura = ' + altura);
    console.log('Peso = ' + peso);
    console.log('IMC = ' + (Math.round(peso) / Math.pow(altura, 2)))
    // Masculino abaixo
    if (genero == 'Masculino' && Math.round(peso) / Math.pow(altura, 2) < 18.5){
        console.log('Genero: ' + genero);
        console.log('Resultado: Magro')
    } 
    else if (genero == 'Masculino' && Math.round(peso) / Math.pow(altura, 2) > 18.5 && Math.round(peso) / Math.pow(altura, 2) < 24.9){
        console.log('Resultado: Sarado')
    }
    else if (genero == 'Masculino' && Math.round(peso) / Math.pow(altura, 2) > 25 && Math.round(peso) / Math.pow(altura, 2) < 29.9){
        console.log('Resultado: Rechonchudo')
    }
    else if (genero == 'Masculino' && Math.round(peso) / Math.pow(altura, 2) > 30){
        console.log('Resultado: Obeso')
    }
    // Feminino abaixo
    if (genero == 'Feminino' && Math.round(peso) / Math.pow(altura, 2) < 18.5){
        console.log('Genero: ' + genero);
        console.log('Resultado: Magra')
    } 
    else if (genero == 'Feminino' && Math.round(peso) / Math.pow(altura, 2) > 18.5 && Math.round(peso) / Math.pow(altura, 2) < 24.9){
        console.log('Resultado: Sarada')
    }
    else if (genero == 'Feminino' && Math.round(peso) / Math.pow(altura, 2) > 25 && Math.round(peso) / Math.pow(altura, 2) < 29.9){
        console.log('Resultado: Rechonchuda')
    }
    else if (genero == 'Feminino' && Math.round(peso) / Math.pow(altura, 2) > 30){
        console.log('Resultado: Obesa')
    }
}