function exibirInfoAnimal(nome, especie, Região, descricao, imagem) {
    const animalDiv = document.getElementById("Felinos");

    const infoHTML =
    `<p>Nome: ${nome}</p>
    <p>Especie: ${especie}</p>
    <p>Região: ${Região}</p>
    <p>${descricao}</p>
    <p><img src="${imagem}" alt=""></p>`;

    animalDiv.innerHTML = infoHTML;
}

function Animal() {
    
    const nome = "Onça-Pintada";
    
    const especie = "Panthera onca";
    
    const Região = "Ocorre em vários tipos de habitat, desde florestas como a Amazônica e a Mata Atlântica, até em ambientes abertos como o Pantanal e o Cerrado";

    const descricao = "A onça-pintada é o maior felino do continente americano, podendo chegar a 135 kg. É um animal robusto, com grande força muscular, sendo a potência de sua mordida considerada a maior dentre os felinos de todo o mundo.";
   
    const imagem = "download.jpeg";

    exibirInfoAnimal(nome, especie, Região, descricao, imagem);
}


function Animal1() {
   
    const nome = "Leão";
    const especie = "Panthera leo";
    const Região = "A maior parte dos leões que hoje vive na natureza são encontrados nas savanas da África e demais regiões semi-desérticas. Ele já foi extinto de muitas áreas de florestas da Ásia e Europa. Eles vivem em grupos de até 40 indivíduos, sendo em sua maioria fêmeas, lideradas pelo macho alfa.";
    const descricao = "Segundo maior felino do mundo, o leão perde em tamanho apenas para o tigre. Os leões apresentam de 1,37 a 2 m de tamanho (corpo e cabeça), e sua cauda pode atingir até 100 cm de comprimento. O peso varia entre 120 e 190 quilos, mas vale destacar que já foram descritos indivíduos com mais de 250 kg.";
    const imagem = "leaojuba-cke.webp";
    exibirInfoAnimal(nome, especie, Região, descricao, imagem);
       
}

function Animal2() {
    
    const nome = "Tigre";
    const especie = "Panthera Tigris";
    const Região = "Habita florestas tropicais e subtropicais úmidas de folhas largas e floresta secas em preferencialmente regiões montanhosas.";
    const descricao = "O tigre é o maior felino do mundo e apresenta pescoço curto e grosso, ombros largos, grandes membros e longas garras. Esse animal possui caninos compridos, sendo o tigre-de-bengala portador dos maiores caninos de felinos do planeta. O canino de um tigre-de-bengala pode medir entre 7,5 e 10 cm de comprimento.";
    const imagem = "download (1).jpeg";

    exibirInfoAnimal(nome, especie, Região, descricao, imagem);

}

function Animal3() {
  
    const nome = "Guepardo";
    const especie = "Acinonyx jubatus";
    const Região = "Tendo como seu habitat a savana, vive principalmente na África, península Arábica e no sudoeste da Ásia.";
    const descricao = "O guepardo ou chita (Acinonyx jubatus) é um animal da família dos felídeos (Felidae), ainda que de comportamento atípico, se comparado com outros da mesma família. É a única espécie vivente do gênero Acinonyx. Tendo como habitat a savana, vive na África, península Arábica e no sudoeste da Ásia.";
    const imagem = "download.jpg";

    exibirInfoAnimal(nome, especie, Região, descricao, imagem);
}

function Animal4() {
    
    const nome = "Gato";
    const especie = "Felis silvestris lybica";
    const Região = "Tem uma distribuição mundial.Atualmente, podemos falar sobre o habitat do gato doméstico, que seria o correspondente as espécimes que vivem sob cuidado dos seres humanos em suas casas e de outros gatos, considerados selvagens, encontrados em ambientes naturais sem contato com pessoas.";
    const descricao = "De nome científico Felis catus, o gato é um mamífero carnívoro e quadrúpede, ou seja, que anda sobre quatro patas. Este animal conta com ouvidos e olfações bem aguçadas, unhas retráteis, visão noturna avantajada e um corpo bastante flexível.";
    const imagem = "images.jpg";

    exibirInfoAnimal(nome, especie, Região, descricao, imagem);
}