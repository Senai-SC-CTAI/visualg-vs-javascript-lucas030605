document.getElementById("calcularButton").addEventListener("click", function() {
    const valorLivroUm = parseFloat(document.getElementById("livro1").value);
    const valorLivroDois = parseFloat(document.getElementById("livro2").value);
    const valorLivroTres = parseFloat(document.getElementById("livro3").value);
    
    const percentualDesconto = 15;
    
    const totalSemDesconto = valorLivroUm + valorLivroDois + valorLivroTres;
    
    const valorDesconto = (totalSemDesconto * percentualDesconto) / 100;
    
    const totalComDesconto = totalSemDesconto - valorDesconto;
    
    document.getElementById("resultado").innerHTML = `
        O total SEM desconto é R$: ${totalSemDesconto.toFixed(2)}<br>
        O total COM desconto é R$: ${totalComDesconto.toFixed(2)}
    `;
});
