function estoque(quantidade) {
    if (quantidade < 5) {
        console.log('Estoque critico');
    } else {
        console.log('Estoque normal');
    }
}
estoque(1);
estoque(99);