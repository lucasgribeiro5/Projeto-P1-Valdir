const openMenu = document.getElementById("openMenu")
const closeMenu = document.getElementById("closeMenu")

const form = document.getElementById("form")
const namePerson = document.getElementById("name")
const email = document.getElementById("email")
const subject = document.getElementById("subject")
const message = document.getElementById("message")
const result = document.getElementById("result")

  
openMenu.addEventListener("click", () =>{
  $("#Modalmenu").modal("show")
});
closeMenu.addEventListener("click", () =>{
  $("#Modalmenu").modal("hide")
});


form.addEventListener("submit" ,  (event) =>{
event.preventDefault()

if (!namePerson.value){
result.innerHTML = "Por favor digite o seu nome"
result.className = "error"
namePerson.className = "errorBorder col-6 py-2 border border-2 rounded"
namePerson.focus()
return
}
namePerson.className = "right col-6 py-2 border border-2 rounded"


if (!email.value){
  result.innerHTML = "Por favor digite o seu E-mail"
  result.className = "error"
  email.className = "errorBorder col py-2 border border-2 rounded"
  email.focus()
  return
  }
  email.className = "right col py-2 border border-2 rounded"

  if (!subject.value){
    result.innerHTML = "Por favor digite o assunto"
    result.className = "error"
    subject.className = "errorBorder col py-2 border border-2 rounded"
    subject.focus()
    return
    }
    subject.className = "right col-12 py-2 border border-2 rounded"

    
  if (!message.value){
    result.innerHTML = "Por favor digite a sua mensagem"
    result.className = "error"
    message.className = "errorBorder col-12 py-2 border border-2 rounded"
    message.focus()
    return
    }
  
  result.innerHTML = ""
  namePerson.focus()
  namePerson.value = email.value =  subject.value = message.value = ""
})
