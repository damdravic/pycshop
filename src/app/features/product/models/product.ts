export interface Product {
  id: number;
  name: string;
  productCode: string;
  internProdCode: string;
  qrCodeData: string;
  description: string;
  mainImage: string;
  price: number;
  costPrice: number;
  markupPercentage: number;
  stock: number;
  isAvailable: boolean;
  warrantyMonths: number;
  vatPercentage: number;
}

export const emptyProduct: Product = {
  id: 0,
  name: '',
  productCode: '',
  internProdCode: '',
  qrCodeData: '',
  description: '',
  mainImage: '',
  price: 0,
  costPrice: 0,
  markupPercentage: 0,
  stock: 0,
  isAvailable: false,
  warrantyMonths: 0,
  vatPercentage: 0,
};
