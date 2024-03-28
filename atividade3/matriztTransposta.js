function transporMatriz(A) {
    
    console.log("Matriz original:");
    for (let linha of A) {
        console.log(linha.join(' '));
    }

    
    let transposta = [];
    for (let i = 0; i < A[0].length; i++) {
        let novaLinha = [];
        for (let j = 0; j < A.length; j++) {
            novaLinha.push(A[j][i]);
        }
        transposta.push(novaLinha);
    }

    
    console.log("\nMatriz transposta:");
    for (let linha of transposta) {
        console.log(linha.join(' '));
    }
}


let matrizExemplo = [[1, 2], [3, 4], [5, 6]];
transporMatriz(matrizExemplo);
