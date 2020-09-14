function validar()
{
    var email = document.getElementById("inputEmail");
    var senha = document.getElementById("inputSenha");
    var end = document.getElementById("inputAddress");
    var comple = document.getElementById("inputComplemento");
    var city = document.getElementById("inputCity");
    var estado = document.getElementById("inputState");
    var cep = document.getElementById("inputCep");
    var mErro = document.getElementById("erro");

    mErro.innerHTML = "";

    if(email.value == "")
    {
        mErro.innerHTML = "<p style='color:red'>Email é um campo obrigatório</p>";
        return false;
    }
    if(senha.value == "")
    {
        mErro.innerHTML = "<p style='color:red'>Senha é um campo obrigatório</p>";
        return false;
    }
    if(end.value == "")
    {
        mErro.innerHTML = "<p style='color:red'>Endereço é um campo obrigatório</p>";
        return false;
    }
    if(comple.value == "")
    {
        mErro.innerHTML = "<p style='color:red'>Complemento é um campo obrigatório</p>";
        return false;
    }
    if(city.value == "")
    {
        mErro.innerHTML = "<p style='color:red'>Cidade é um campo obrigatório</p>";
        return false;
    }
    if(estado.value == "Escolher...")
    {
        mErro.innerHTML = "<p style='color:red'>Estado é um campo obrigatório que precisa ser escolhido</p>";
        return false;
    }
    if(cep.value == "")
    {
        mErro.innerHTML = "<p style='color:red'>Cep é um campo obrigatório</p>";
        return false;
    }

    alert("Cadastro Realizado com Sucesso!!!");
    
   
}
