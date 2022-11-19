const productsData = [
    {
      id: 1,
      name: 'Golden Paradise',
      category: 'hotel5',
      cardImg: './assets/img/resort/169331211.webp',
      bid: 200,
    },
    {
      id: 2,
      name: 'Luxury Resort',
      category: 'hotel5',
      cardImg: './assets/img/resort/284592917.webp',
      bid: 240,
    },
    {
      id: 3,
      name: 'Gran Palladian Hotel',
      category: 'hotel5',
      cardImg: './assets/img/resort/85115609.webp',
      bid: 230,
    },
    {
      id: 4,
      name: 'Grand Hostel Inn',
      category: 'hostel',
      cardImg: './assets/img/hostel/144320723.webp',
      bid: 280,
    },
    {
      id: 5,
      name: 'Hosteria del Prado',
      category: 'hostel',
      cardImg: './assets/img/hostel/170054272.webp',
      bid: 120,
    },
    {
      id: 6,
      name: 'Hostal del Caminante',
      category: 'hostel',
      cardImg: './assets/img/hostel/206210490.webp',
      bid: 150,
    },
    {
      id: 7,
      name: 'Apart 511',
      category: 'apart',
      cardImg: './assets/img/apart/336215271.webp',
      bid: 180,
    },
    {
      id: 8,
      name: 'Grand Apart Hotel',
      category: 'apart',
      cardImg: './assets/img/apart/343563710.webp',
      bid: 200,
    },
    {
      id: 9,
      name: 'Luxury Apart',
      category: 'apart',
      cardImg: './assets/img/apart/352298299.webp',
      bid: 190,
    },
    {
      id: 10,
      name: 'Casa del molino',
      category: 'casa-campo',
      cardImg: './assets/img/casa-campo/105845415.webp',
      bid: 250,
    },
    {
      id: 11,
      name: 'Ponderosa',
      category: 'casa-campo',
      cardImg: './assets/img/casa-campo/336252961.webp',
      bid: 250,
    },
    {
      id: 12,
      name: 'Vista de la pradera',
      category: 'casa-campo',
      cardImg: './assets/img/casa-campo/375191095.webp',
      bid: 280,
    },
    {
      id: 13,
      name: 'Huenku B&B',
      category: 'b&b',
      cardImg: './assets/img/bed-breakfast/271078358.webp',
      bid: 110,
    },
    {
      id: 14,
      name: 'Loft 778',
      category: 'b&b',
      cardImg: './assets/img/bed-breakfast/398620742.webp',
      bid: 90,
    },
    {
      id: 15,
      name: 'Bed & Breakfast del Centro',
      category: 'b&b',
      cardImg: './assets/img/bed-breakfast/9869903.webp',
      bid: 95,
    },
  ];

  const splitProducts = size => {
    let dividedProducts = [];
    for (let i = 0; i < productsData.length; i += size) {
      dividedProducts.push(productsData.slice(i, i + size));
    }
    return dividedProducts;
  };
  
  const productsController = {
    dividedProducts: splitProducts(6),
    nextProductsIndex: 1,
    productsLimit: splitProducts(6).length,
  };

  