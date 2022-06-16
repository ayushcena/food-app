import product1 from '../../images/product-1.jpg';
import product3 from '../../images/product-3.jpg';
import sweet1 from '../../images/sweet3.jpg';
import sweet2 from '../../images/sweet-2.jpg';
import sweet3 from '../../images/sweet-3.jpg';

const data = {
  productData: [
    {
      id: 1,
      img: product1,
      alt: 'Pizza',
      name: 'Supreme Pizza',
      desc:
        'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
      price: 19.99,
      quantity: 1,
      button: 'Add to Cart',
      category: 'addon',
      addOnPrice: 0
    },
    {
      id: 3,
      img: product3,
      alt: 'Pizza',
      name: 'Veggie Overload',
      desc:
        ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
      price: 14.99,
      quantity: 1,
      category: 'addon',
      button: 'Add to Cart'
    },
    {
      id: 4,
      img: product3,
      alt: 'Pizza',
      name: 'Veggie Overload',
      desc:
        ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
      price: 14.99,
      quantity: 1,
      button: 'Add to Cart'
    },
    {
      id: 5,
      img: product1,
      alt: 'Pizza',
      name: 'Supreme Pizza',
      desc:
        'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
      price: 19.99,
      quantity: 1,
      button: 'Add to Cart'
    },
    {
      id: 6,
      img: product1,
      alt: 'Pizza',
      name: 'Supreme Pizza',
      desc:
        'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
      price: 19.99,
      quantity: 1,
      button: 'Add to Cart'
    }

  ],

  productDataTwo: [
    {
      id: 7,
      img: sweet2,
      alt: 'Donuts',
      name: 'Doughlicious',
      desc:
        'Belgian chocolate glazed donuts covered in icing with sprinkles on top',
      price: 9.99,
      quantity: 1,
      button: 'Add to Cart'
    },
    {
      id: 8,
      img: sweet3,
      alt: 'Ice Cream',
      name: 'Caramel Wonder',
      desc:
        'Vanilla ice cream covered with caramel and chocolate glaze topped with a coco stick',
      price: 12.99,
      quantity: 1,
      button: 'Add to Cart'
    },
    {
      id: 9,
      img: sweet1,
      alt: 'Brownie',
      name: 'Brownie Bunch',
      desc:
        'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
      price: 9.99,
      quantity: 1,
      button: 'Add to Cart'
    }
  ],
};

export default data;
