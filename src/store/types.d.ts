export type Product = {
  id: string,
  name: string,
  category: string,
  price: string,
  image: string[],
};

export type State = {
  products: Product[],
};

export type Action = {
  type: string,
  payload: any,
};
