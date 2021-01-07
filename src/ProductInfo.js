import apple from './../public/apple.png';
import lemon from './../public/lemon.jpeg';
import watermelon from './../public/watermelon.jpeg';
import orange from './../public/orange.jpg';
import grapefruit from './../public/grapefruit.jpg';
import peaches from './../public/peaches.jpeg';
import pineapple from './../public/pineapple.png';
import papaya from './../public/papaya.jpeg';

export function getProducts() {
  return [
    {
      name: 'Táo đỏ',
      description: 'Táo Australia',
      quantity: 1,
      unit: 'kg',
      price: 150000,
      key: 'Apple',
      img: apple
    },
    {
      name: 'Chanh',
      description: 'Chanh Mỹ',
      quantity: 2,
      unit: 'kg',
      price: 50000,
      key: 'lemon',
      img: lemon
    },
    {
      name: 'Dưa hấu',
      description: 'Dưa hấu Đài Loan',
      quantity: 3,
      unit: 'kg',
      price: 170000,
      key: 'watermelon',
      img: watermelon
    },
    {
      name: 'Cam',
      description: 'Cam Cao Phong',
      quantity: 1,
      unit: 'kg',
      price: 120000,
      key: 'orange',
      img: orange
    },
    {
      name: 'Bưởi',
      description: 'Bưởi Phúc Trạch',
      quantity: 2,
      unit: 'kg',
      price: 180000,
      key: 'grapefruit',
      img: grapefruit
    },
    {
      name: 'Đào',
      description: 'Đào rừng',
      quantity: 4,
      unit: 'kg',
      price: 175000,
      key: 'peaches',
      img: peaches
    },
    {
      name: 'Dứa',
      description: 'Dứa Sài Gòn',
      quantity: 5,
      unit: 'kg',
      price: 140000,
      key: 'pineapple',
      img: pineapple
    },
    {
      name: 'Đu đủ',
      description: 'Đu đủ Thái Lan',
      quantity: 2,
      unit: 'kg',
      price: 135000,
      key: 'papaya',
      img: papaya
    },
  ];
}
