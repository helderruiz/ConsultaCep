
function buscarCep() {
    let = input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function() {
        document.getElementById('texto').innerHTML = this.responseText;
        //Transformei o texto em objeto
        let objeto = JSON.parse(this.responseText);

        //Aqui peguei os texto que eu queria
        let logradouro = objeto.logradouro;
        let bairro = objeto.bairro;
        let localidade = objeto.localidade;
        let uf = objeto.uf;

        document.getElementById('texto').innerHTML = 'Logradouro:' + logradouro +   
        '<br> Bairro: ' + bairro + '<br> Localidade: ' + localidade + '<br> UF: ' + uf;
    }
}

