document.getElementById("whatsappForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const message = encodeURIComponent(document.getElementById("message").value.trim());
    const cleanNumber = phoneNumber.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cleanNumber.length >= 11) { // Verifica se o número tem pelo menos DDD + número
        let whatsappLink = `https://wa.me/55${cleanNumber}`;
        if (message) {
            whatsappLink += `?text=${message}`;
        }

        // Atualiza o conteúdo da página com o link gerado
        window.location.href = `result.html#${encodeURIComponent(whatsappLink)}`;
    } else {
        alert("Por favor, insira um número válido com DDD.");
    }
}); 