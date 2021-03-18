export class Item {
  id: number;
  name: string;
  nameMedia: string;
  description: string;
  observation: string;
  imageName: string;
  price: number;
  quantity: number;
  status: string;
  createDate: string;
  updateDate: string;
  user: string;
  idClass: number;
  idCategory: number;
  idSubCategory: number;
  qtyPurchase: number;
  attributesItem: AttributesItem;
}

export class AttributesItem {
  id: number;
  color: string;
  sizeS: number;
  sizeM: string;
  sizeL: string;
  sizeXL: string;
  sizeXXL: string;
  size: string[];
  material: string;
  otherAtt: string;
  unitMeasurement: string;
  user: string;
  createDate: string;
  updateDate: string;
}

export interface ResponseItem {
  cod: number;
  message: string;
  totalItems: number;
  totalPages: number;
  items: Item[];
  item: Item;
}
