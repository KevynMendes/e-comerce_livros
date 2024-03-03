
function exibirDadosSelecionados() {
   
    var tituloProduto = localStorage.getItem("tituloProduto");
    var autorProduto = localStorage.getItem("autorProduto");
    var precoProduto = localStorage.getItem("precoProduto");

   
    document.getElementById("titulo-produto").textContent = tituloProduto;
    document.getElementById("autor-produto").textContent = autorProduto;
    document.getElementById("preco-produto").textContent = precoProduto;
}


exibirDadosSelecionados();  

document.getElementById("form-finalizar-compra").addEventListener("submit", function(event) {
   
    event.preventDefault();

 
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

   
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Telefone:", telefone);

    localStorage.clear();


    window.location.href = "obrigado.html";
});

document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var cardNumber = document.getElementById("card-number").value;
    var expiry = document.getElementById("expiry").value;
    var cvv = document.getElementById("cvv").value;


    if (cardNumber && expiry && cvv) {
        alert("Pagamento processado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos do formulário.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const cardMethod = document.getElementById("card");
    const pixMethod = document.getElementById("pix");
    const cardDetails = document.getElementById("card-details");
    const pixDetails = document.getElementById("pix-details");

    cardMethod.addEventListener("change", function() {
        if (cardMethod.checked) {
            cardDetails.style.display = "block";
            pixDetails.style.display = "none";
        }
    });

    pixMethod.addEventListener("change", function() {
        if (pixMethod.checked) {
            cardDetails.style.display = "none";
            pixDetails.style.display = "block";
        }
    });

});

function copyToClipboard() {

    var inputText = document.getElementById("myInput");
    inputText.select();
    inputText.setSelectionRange(0, 99999);
  
    document.execCommand("copy");
    alert(" Chave PIX copiada.");
  }