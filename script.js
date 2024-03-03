const autorProduto = document.getElementById('autor-produto');
const tituloProduto = document.getElementById('titulo-produto');
const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const opcaoImagem0 = document.getElementById('0-imagem-miniatura');
const opcaoImagem1 = document.getElementById('1-imagem-miniatura');
const opcaoImagem2 = document.getElementById('2-imagem-miniatura');

const dezX = {
  nome: '10X, Diferença Entre o Sucesso X Fracasso',
  autor: "Grant Cardone",
  nomePastaImagens: '10X',
  resumo: "Por definição, o sucesso extraordinário é aquele que resulta de ações que vão além da média, do que tudo mundo faz. Se você quer atingi-lo, não pode seguir o mesmo caminho que as outras pessoas e se acostumar com a mediocridade. Precisa eliminar o fator 'sorte' da sua equação. 10X pode lhe ensinar a fazer isso! O sucesso é seu direito, dever e responsabilidade, e este livro oferece o passo-a-passo para chegar até ele!\n\nCom o 10X, você vai descobrir qual o nível de esforço necessário para obter o sucesso que deseja e como manter essa energia ao longo de sua vida. A maioria das pessoas quer ser bem-sucedida e até tem ótimas ideias, mas não age de acordo para alcançar os seus sonhos extraordinários.\n\nAo ler este livro, você vai acabar com seus medos, fortalecer sua fé em si mesmo, parar de procrastinar e estabelecer o seu objetivo de vida. Como resultado, ele também fará com que você se destaque no mercado de trabalho – e isso acontecerá porque você saberá fazer o que os outros se recusam. Pare de pensar pequeno e comece a almejar o que há de melhor e mais extraordinário – para todas as áreas da sua vida.\n\nO livro 10X ensina a linha de pensamento das pessoas de sucesso: almeje dez vezes mais do que você tem agora – e, se você não alcançar, ainda assim estará na frente do que se tivesse mantido seu status quo. Você aprenderá a:\n\n• Alcançar objetivos antes considerados impossíveis\n• Estabelecer metas corretamente e atingi-las com confiança\n• Criar níveis inigualáveis de felicidade e satisfação em todas as áreas da sua vida\n• Usar o medo como combustível para se mexer, e nunca se acomodar\n• Vencer a concorrência e se tornar um modelo de sucesso"
};

const leisDoPoder = {
  nome: 'As 48 Leis do Poder',
  autor: "Robert Greene",
  nomePastaImagens: '48-leis-do-poder',
  resumo: "Resumo do livro 10X...",
};
const arteDaGuerra = {
  nome: 'A Arte da Guerra',
  autor: "Sun Tzu",
  nomePastaImagens: 'a-arte-da-guerra',
  resumo: "Resumo do livro 10X...",
};
const maisEsperto = {
  nome: '+ Esperto Que o Diabo',
  autor: "Napoleon Hill",
  nomePastaImagens: 'mais-esperto-do-que',
  resumo: "Resumo do livro 10X...",
};
const sutilArte = {
  nome: 'A Sutil Arte de Ligar o Foda-se',
  autor: "Mark Manson",
  nomePastaImagens: 'a-sutil-arte',
  resumo: "Resumo do livro 10X...",
};

const opcoesLivros = [dezX, leisDoPoder, arteDaGuerra, maisEsperto, sutilArte];

const tipoProduto = ['Áudio-Book', 'E-Book'];

let livroSelecionado = 0;
let tipoSelecionado = 1;
let imagemSelecionada = 1;

function atualizarLivroSelecionado() {
  const numeroLivroSelecionado = document.querySelector('[name="opcao-livro"]:checked').id.charAt(0); 
  livroSelecionado = numeroLivroSelecionado;
  const autorNome = opcoesLivros[livroSelecionado].autor;
  autorProduto.innerText = `Autor - ${autorNome}`; 
  imagemVisualizacao.src = `imagens/Livros/${opcoesLivros[livroSelecionado].nomePastaImagens}/imagem-${imagemSelecionada}.jpg`;
  opcaoImagem0.src = `imagens/Livros/${opcoesLivros[livroSelecionado].nomePastaImagens}/imagem-0.jpg`;
  opcaoImagem1.src = `imagens/Livros/${opcoesLivros[livroSelecionado].nomePastaImagens}/imagem-1.jpg`;
  opcaoImagem2.src = `imagens/Livros/${opcoesLivros[livroSelecionado].nomePastaImagens}/imagem-2.jpg`;
  tituloProduto.innerText = `${opcoesLivros[livroSelecionado].nome} versão: ${tipoProduto[tipoSelecionado]}`;
}


function atualizarTipo() {
  const opcaoTipoSelecionado = document.querySelector('[name="opcao-produto"]:checked').id; 
  tipoSelecionado = parseInt(opcaoTipoSelecionado); 
  if (tipoProduto[tipoSelecionado] === 'Áudio-Book') {
    tituloProduto.innerText = `${opcoesLivros[livroSelecionado].nome} versão: ${tipoProduto[tipoSelecionado]}`;
    return;
  }
  tituloProduto.innerText = `${opcoesLivros[livroSelecionado].nome} versão: ${tipoProduto[tipoSelecionado]}`;
}

function atualizarImagemSelecionada() {
  const opcaoImagemSelecionada = document.querySelector('[name="opcao-imagem"]:checked');
  if (opcaoImagemSelecionada) {
    imagemSelecionada = opcaoImagemSelecionada.id.charAt(0); 
    imagemVisualizacao.src = `/imagens/Livros/${opcoesLivros[livroSelecionado].nomePastaImagens}/imagem-${imagemSelecionada}.jpg`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var saibaMais = document.getElementById("saiba-mais");
  var informacoesAdicionais = document.getElementById("informacoes-adicionais");

  saibaMais.addEventListener("click", function() {
    if (informacoesAdicionais.style.display === "none") {
      informacoesAdicionais.style.display = "block";
      saibaMais.innerHTML = "Esconder informações <b>&#8249;</b>";
    } else {
      informacoesAdicionais.style.display = "none";
      saibaMais.innerHTML = "Saiba mais sobre os formatos <b>&#8250;</b>";
    }
  });
});

var timeLeft = 300; // 5 minutos em segundos

var countdown = setInterval(function() {
  
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timer").innerHTML = "Tempo restante: " + minutes + ":" + seconds;

    if (timeLeft === 0) {
        clearInterval(countdown);
        alert("Tempo esgotado!");
    } else {
        timeLeft--;
    }
}, 1000); 

    function abrirModal() {
      document.getElementById("modal-duvidas").style.display = "block";
  }

  function fecharModal() {
      document.getElementById("modal-duvidas").style.display = "none";
  }

 function armazenarDadosSelecionados() {
 
  var tituloProduto = document.getElementById("titulo-produto").textContent;
  var autorProduto = document.getElementById("autor-produto").textContent;
  var precoProduto = document.getElementById("preco").textContent;

  localStorage.setItem("tituloProduto", tituloProduto);
  localStorage.setItem("autorProduto", autorProduto);
  localStorage.setItem("precoProduto", precoProduto);
}

document.getElementById("irParaPagamento").addEventListener("click", function() {
  armazenarDadosSelecionados();
  window.location.href = "checkout.html"; 
});
