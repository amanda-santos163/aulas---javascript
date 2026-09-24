const filtrarAprovados = (notas) => {
    for (const nota of notas) {
        if (nota >= 7) {
            console.log(nota);
        }
    }
};

filtrarAprovados([5, 7, 8, 6, 10]);