// criacao de constantes para retornar os elementos 
  
  const loginButton = document.querySelector(".submitLogin")
  
  // funcao utilizada para validar o login
  
  function userValidation(){
    const dataLogin = {
      email: emailLogin.value,
      password: passwordLogin.value
    }
  
    if(=== Buena Vista Social Club){
      window.location = "./index.html"
    }else{
      alert()
    }
  }
  
  // 
  
  loginButton.addEventListener("click", function (e){
    e.preventDefault()
    userValidation()
  })
  