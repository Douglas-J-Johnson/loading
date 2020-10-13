export const roleTabs = {
  customer: {
    vehicle: true,
    products: true,
    pay: true,
    load: false,
    checkout: false
  },
  loader: {
    vehicle: false,
    products: false,
    pay: false,
    load: true,
    checkout: false
  },
  checkout: {
    vehicle: false,
    products: false,
    pay: false,
    load: false,
    checkout: true
  }
};

export const loadedProductsList = [
  {
    id: 0,
    location: 15,
    name: 'item 1',
    weighed: true,
    weight: 500
  },
  {
    id: 0,
    location: 15,
    name: 'item 2',
    weighed: false,
    weight: 0
  }
];

export const productsList = [
  {
    id: 0,
    location: 2,
    name: 'item 1',
  },
  {
    id: 1,
    location: 3,
    name: 'item 2',
  },
  {
    id: 2,
    location: 10,
    name: 'item 3',
  },
  {
    id: 3,
    location: 12,
    name: 'item 4',
  },
  {
    id: 4,
    location: 15,
    name: 'item 5',
  },
  {
    id: 5,
    location: 16,
    name: 'item 6',
  },
  {
    id: 6,
    location: 18,
    name: 'item 7',
  },
  {
    id: 7,
    location: 20,
    name: 'item 8',
  },
  {
    id: 8,
    location: 21,
    name: 'item 9',
  },
  {
    id: 9,
    location: 22,
    name: 'item 10',
  },
  {
    id: 10,
    location: 24,
    name: 'item 11',
  },
  {
    id: 11,
    location: 25,
    name: 'item 12',
  },
  {
    id: 12,
    location: 26,
    name: 'item 13',
  }
];

export const vehiclesList = [
  {
    id: 0,
    plate: 'XXX XXX',
    image: 'https://hondablogitalia.files.wordpress.com/2016/01/2017-honda-ridgeline-006.jpg',
    isSelected: false
  },
  {
    id: 1,
    plate: 'YYY YYY',
    image: 'https://car-images.bauersecure.com/pagefiles/67808/1040x585/hr-001.jpg',
    isSelected: false
  },
];
