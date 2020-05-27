let login = {
 id: 5544,
 senha: 123456
};

const checkLogin = () => {
  let data = {
    code: Number(document.getElementById('code').value),
    password: Number(document.getElementById('pass').value)
  };

  if(data.code === login.id && data.password === login.senha) {
    window.location = "/src/pages/adm.html";
  }
  else{ 
    alert("Dados incorretos.")
  }



  console.log(data);
}