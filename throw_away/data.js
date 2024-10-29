export const categories = [
  {
    id: 1,
    title: "Women",
    description: "Shop our latest women's summer looks",
    // reversedPosition: false,
    image:
      "https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1%201x,%20",
  },
  {
    id: 2,
    title: "Men",
    description: "Gentlemen, upgrade your style",
    reversedPosition: true,
    image:
      "https://images.pexels.com/photos/27411697/pexels-photo-27411697/free-photo-of-portrait-of-man-in-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Kids",
    description: "Cool looks for the little ones!",
    // reversedPosition: false,

    image:
      "https://images.pexels.com/photos/969373/pexels-photo-969373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Accessories",
    description: "Little extra goes a long way",
    reversedPosition: true,

    image:
      "https://images.pexels.com/photos/1164339/pexels-photo-1164339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const images = [
  "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1678872844677-d650b788709b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1612460085255-027e935efcf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1521920810064-3ba9506540fc?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1718337855565-9864d9f488a8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1527091155660-517fc1711d30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const category = ["Shirt", "Pants", "Swimwear", "Jackets", "Accessories"];
const sizes = ["S", "M", "L", "XL"];
const types = ["Men", "kids", "Women"];

export function getRandomProducts() {
  const sampleProducts = 15;
  let products = [];

  for (let i = 0; i < sampleProducts; i++) {
    products.push({
      id: i,
      category: category[Math.floor(Math.random() * 4)],
      price: Math.floor(Math.random() * 50),
      quantity: Math.floor(Math.random() * 20),
      img: images[Math.floor(Math.random() * 9)],
      size: sizes,
    });
  }
  return products;
}

export function seedDB() {
  const sampleProducts = 15;
  let products = [];

  for (let i = 0; i < sampleProducts; i++) {
    products.push({
      title: "Will change later",
      desc: "Will update",
      img: images[Math.floor(Math.random() * 9)],
      categories: [
        category[Math.floor(Math.random() * 4)],
        types[Math.floor(Math.random() * 2)],
      ],
      size: sizes,
      price: Math.floor(Math.random() * 50),
      quantity: Math.floor(Math.random() * 20),
    });
  }
  return products;
}
// {
//   title: { type: String, required: true, unique: true },
//   desc: { type: String, required: true },
//   img: { type: String, required: true },
//   categories: { type: Array },
//   size: { type: String },
//   color: { type: String },
//   price: { type: Number, required: true },
// },
