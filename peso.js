function calcularPeso(id) {
    document.getElementById('formFeminino').style.display = 'none';
    document.getElementById('formMasculino).style.display = 'none';


     if (id) {
        document.getElementById(id).style.display = 'block';
    }
}


function converterPesoIdealF() {
    var feminino= document.getElementById('feminino').value;
    var alturaF = ((62.1*h) -44);
    document.getElementById('resultadoPesoIdealF').innerText = 'Resultado: ' + alturaF }


function converterPesoIdealM() {
    var masculino s= document.getElementById('masculino').value;
    var alturaM = (72.7*h) -58);
    document.getElementById('resultadoPesoIdealF').innerText = 'Resultado: ' + alturaM }




function consultarPesos() {
        var pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];
        var lista = pessoas.map(p => `Nome: ${p.nome}, Peso Ideal: ${p.pesoIdeal} kg`).join('\n');
// Converte a string JSON recuperada de volta para um array de objetos JavaScript. Se não houver dados, retorna


        alert(lista || 'Nenhuma informação armazenada.');
// || 'Nenhuma informação armazenada.': Se lista estiver vazia (o que acontece quando não há dados armazenados),
 //exibe a mensagem 'Nenhuma informação armazenada.' em vez de uma janela de alerta vazia.




    }




