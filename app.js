  let array = []

        function atualizarLista() {
           
            let saida = document.getElementById('saidaDeDados')
            saidaDeDados.innerHTML = "";
            array.forEach(element => {
                saidaDeDados.innerHTML += `<li>${element}</li>   `
            });
        }
        atualizarLista()
        function adicionar() {
            let entrada = document.getElementById("entradaDeDados").value
            array.push(entrada)

            atualizarLista()

        }
        function remover() {
            let entrada = document.getElementById("entradaDeDados").value
            array = []
            console.log(array)

            atualizarLista()
        }
        function removerUltimoItem() {
            let entrada = document.getElementById("entradaDeDados").value
            array.pop()
            atualizarLista()
        }