const frutas = ['Maçã', 'Banana', 'Uva'];

frutas.push('Laranja'); // Adiciona 'Laranja' ao final do array

var ultimo = frutas.pop(); // remove Laranja (do final)
// ['Maçã', 'Banana'];

for (const fruta of frutas) {
  console.log(fruta);
}