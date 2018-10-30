var input = document.querySelector('#inpCep');

input.addEventListener("input", function() {
    
    var cep = document.querySelector('#inpCep').value;

    if(cep.length == 8) {

    
    $.ajax({
        url: "https://viacep.com.br/ws/"+cep+"/json/",
        type: "GET",
        dataType: "JSON",
        success: function (resposta) {
            console.log(resposta.logradouro);
            var inputRua = document.querySelector("#rua");
            inputRua.value = resposta.logradouro;
            var inputBairro = document.querySelector("#bairro");
            inputBairro.value = resposta.bairro;

            // if(inputRua.value = "undefined" || inputBairro.value = "undefined") {

            // };
        },
        
        error: function () {
            console.log("ERROU");
        }
    });
    } 
    
});