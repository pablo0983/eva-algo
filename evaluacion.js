// Evaluación de Algorítmos - Ibec
console.log('Iniciando Evaluación de Algorítmos');

//Ejercicio 1
const cartProducts = [
  {
    id: 1,
    name: 'Pan baguette',
    price: 120,
    description: 'Variedad de pan originaria de Francia que se caracteriza por una forma alargada. Contiene harina de trigo, agua, levadura y sal.',
    image: 'https://images.pexels.com/photos/14998136/pexels-photo-14998136.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: ['baguette', 'pan frances', 'pan flauta', 'pan'],
    sale: false,
    stock: 120,
  },
  {
    id: 2,
    name: 'Pan ciabatta',
    price: 150,
    description: 'Pan italiano clásico con un alto contenido líquido. Reconocible por el gran panal de la miga y la corteza generalmente café y crujiente.',
    image:'https://images.pexels.com/photos/15388879/pexels-photo-15388879.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: ['pan chabata', 'pan chapata', 'pan crujiente', 'pan'],
    sale: true,
    stock: 90,
  },
  {
    id: 3,
    name: 'Pan lactal',
    price: 200,
    description: 'Tipo de pan esponjoso, suave y blando.',
    image: 'https://images.pexels.com/photos/1070462/pexels-photo-1070462.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: ['pan de molde', 'pan de sandwiches', 'pan'],
    sale: true,
    stock: 60,
  },
  {
    id: 4,
    name: 'Pan de salvado',
    price: 180,
    description: 'Elaborado con harina no refinada lo que incluye el salvado, posee cantidad de fibra dietetica.',
    image: 'https://images.pexels.com/photos/15634527/pexels-photo-15634527.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: ['pan negro', 'pan integral', 'pan'],
    sale: true,
    stock: 50,
  },
  {
    id: 5,
    name: 'Pan dulce',
    price: 250,
    description: 'Pan de molde cilíndrico, relleno de frutos secos.',
    image: 'https://images.pexels.com/photos/14000021/pexels-photo-14000021.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: ['pan navideño', 'pan'],
    sale: true,
    stock: 40,
  },
  {
    id: 6,
    name: 'Vigilante azucarado',
    price: 15,
    description: 'Factura de panadería, alargada y azucarda en la parte superior.',
    image: 'https://www.recetas-argentinas.com/base/stock/Recipe/249-image/249-image_web.jpg',
    category: ['factura', 'bizcochos'],
    sale: false,
    stock: 200,
  },
  {
    id: 7,
    name: 'Cañones con dulce de leche',
    price: 20,
    description: 'Masa de hojaldre con forma de tubo o canutillo relleno de dulce de leche.',
    image: 'https://i.pinimg.com/550x/69/6d/36/696d36ae91559f4d2768200d91a96ea6.jpg',
    category: ['factura', 'bizcochos'],
    sale: false,
    stock: 150,
  },
  {
    id: 8,
    name: 'Donas',
    price: 50,
    description: 'Rosca esponjosa, frita y con glaseado en la parte superior.',
    image: 'https://images.pexels.com/photos/4686958/pexels-photo-4686958.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: ['reposteria', 'factura'],
    sale: false,
    stock: 4,
  },
  {
    id: 9,
    name: 'Lemon pie',
    price: 250,
    description: 'Tarta rellena con crema de limón con merengue.',
    image: 'https://media.istockphoto.com/id/1466264250/es/foto/tarta-de-lim%C3%B3n-o-tarta-de-lim%C3%B3n.jpg?b=1&s=612x612&w=0&k=20&c=j9JE4tjC3vPk6ej5ubELrMyQ2gAi3Ho8PJ5hjiF9j5s=',
    category: ['reposteria', 'postre', 'tarta'],
    sale: true,
    stock: 45,
  },
  {
    id: 10,
    name: 'Pastafrola de membrillo',
    price: 120,
    description: 'Tarta rellena de dulce de membrillo con tiras de masa delgadas por encima dando aspecto de cuadrícula en su parte superior.',
    image: 'https://media.istockphoto.com/id/1441632876/es/foto/pasta-caserafrola-tarta-rellena-de-membrillo-y-jalea-de-manzana-receta-de-pastafrola-argentina.jpg?b=1&s=612x612&w=0&k=20&c=91mj_ugHGqfLEdEuqc6biKQMXREM6Rf-dgoh1CBHupQ=',
    category: ['reposteria', 'postre', 'tarta'],
    sale: false,
    stock: 20,
  },
];

//Ejercicio 2

const ordenAsc = (a, b) => a.price - b.price;
const ordenDes = (a, b) => b.price - a.price;

const ordenPorPrecio = (arrayProductos, callback) => {const result = arrayProductos.sort(callback);
  return result;
};


console.log(ordenPorPrecio(cartProducts, ordenAsc));

console.log(ordenPorPrecio(cartProducts, ordenDes));