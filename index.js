const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const message = document.getElementById('message')

form.addEventListener('submit', (e) => {
      e.preventDefault()

      checkInputs()
})


function checkInputs() {

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const messageValue = message.value.trim()

    if(usernameValue === '') {
        errorValidation(username, 'Preencha esse campo')
   } else {
       successValidation(username)
   }

   if(emailValue === '') {
       errorValidation(email, 'preecha esse campo')
   } else {
       successValidation(email)
   }

   if(messageValue === '') {
       errorValidation(message, 'preencha esse campo')
   } else {
       successValidation(message)
   }
}

function errorValidation(input, message) {
    const formControl = input.parentElement;

    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function successValidation(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'

}

function carregarRepos(){
    fetch("https://api.github.com/users/Annefedy/repos")
    .then((resposta)=>{
        return resposta.json();
    })
    .then((repos)=>{
        for(item of repos){
            let tagProj=document.querySelector("#projetos");
            let div=document.createElement("div");
            let h3=document.createElement("h3");
            let a=document.createElement("a");
            let p=document.createElement("p");

            h3.textContent=item.name;
            a.href=item.html_url;
            a.target="_blank";
            a.appendChild(h3);
            p.textContent=item.description;
            div.setAttribute("class","items-proj");
            div.append(a, p);

            tagProj.appendChild(div);
        }
    })
    .finally(()=>{
    })
    .catch((erro)=>{
    });

}

document.addEventListener("DOMContentLoaded", carregarRepos);

