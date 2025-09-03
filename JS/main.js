if ('serviceWorker' in navigator) {
    console.log("main.js => Vamos registrar o service worker!!!");
    navigator.serviceWorker.register('/service-worker-minimum-to-intall-pwa.js')
        .then(registration => {
            console.log("main.js => Service Worker Registrado com Sucesso");
            console.dir(registration);
        })
        .catch(error => {
            console.log("main.js => Erro ao registrar Service Worker");
            console.dir(error);
        });
}

// ------------------------------------------------------------------------------------------------------

let a = 10
let b = 10

const soma = (a, b) => a + b;

const multiplicacao = (a, b) => a * b;


console.log(soma(3, 4)); 
console.log(multiplicacao(3, 4));