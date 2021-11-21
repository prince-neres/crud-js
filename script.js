function addToTable() {

    //Definindo as variaveis e recebendo os dados
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let job = document.getElementById('job').value;
    let table = document.getElementById("myTable");

    //Calculando o tamanho da Tabela
    let tableSize = table.rows.length;
    let linha = table.insertRow(tableSize);
    let cell1 = linha.insertCell(0);
    let cell2 = linha.insertCell(1);
    let cell3 = linha.insertCell(2);
    let cell4 = linha.insertCell(3);
    let cell5 = linha.insertCell(4);
    let cell6 = linha.insertCell(5);
    linha.id = tableSize;

    //Criando o codigo do botão para remover a linha
    let btn = "<button class='remove-btn' onclick='removeToTable(this)'>Remove</button>";

    //Criando o codigo do botão para atualizar a linha	
    let edit = "<button class='update-btn' onclick='updateTable(this)'>Update</button>";

    //Preenchendo os campos da linha
    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = phone;
    cell4.innerHTML = job;
    cell5.innerHTML = btn;
    cell6.innerHTML = edit;

    //Limpando os campos
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('job').value = "";
}

//Atualiza dados através de novos inseridos nos campos ded adição
function updateTable(elemento) {
    let linha = elemento.parentNode.parentNode;
    let cells = linha.getElementsByTagName('td')

    //Captura os dados inseridos nos campos de adição
    let dado1 = document.getElementById('name').value;
    let dado2 = document.getElementById('email').value;
    let dado3 = document.getElementById('phone').value;
    let dado4 = document.getElementById('job').value;

    //Modificaos dados das celulas da linha correspondente somente se os campos de adição não
    //estiverem vázios
    if (dado1 != "") { cells[0].innerText = dado1 }
    if (dado2 != "") { cells[1].innerText = dado2 }
    if (dado3 != "") { cells[2].innerText = dado3 }
    if (dado4 != "") { cells[3].innerText = dado4 }

    //Limpando os campos
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('job').value = "";
}

//Função para remover uma linha
function removeToTable(elemento) {

    let linha = elemento.parentNode.parentNode.getAttribute('id');
    linha = document.getElementById(linha);
    linha.parentNode.removeChild(linha);
}