
const products = [
    {
      id: 1,
      name: "Bolsas compostables",
      description: "Biodegradables.",
      stock: 10,
      price: 300,
      image: "Images/bolsas_compostables.jpeg",
      category: "Hogar"
    },
    {
      id: 2,
      name: "Mochila",
      description: "Fabricada a partir de materiales reciclados, incluyendo textiles y microplásticos.",
      stock: 5,
      price: 1500,
      image: "Images/backpack.png",
      category: "Aire libre"
    },
    {
      id: 3,
      name: "Cubiertos ecológicos",
      description: "Realizados a partir de madera de bamboo, para decirle chau a los cubiertos descartables de plástico. Cada kit incluye tenedor, cuchillo y cuchara.",
      stock: 20,
      price: 450,
      image: "Images/cubiertos.jpeg",
      category: "Hogar"
    },
    {
      id: 4,
      name: "Taza ecológica",
      description: "Fabricada a partir microplásticos reciclados.",
      stock: 10,
      price: 350,
      image: "Images/taza.jpeg",
      category: "Hogar"
    }
];

module.exports = {
  products,
}