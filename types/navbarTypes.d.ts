export interface designGalleryItemsType {
    icon: string;
    title: string;
    category: string;
}

export interface citiesItemsType {
    name: string;
    region: string;
}

export interface guidesItemsType {
    name: string;
    description: string;
}

export interface priceCalculatorItemsType {
    name: string;
    type: string;
}

export interface moreItemsType {
    name: string;
}

export type MenuType = "grid" | "list";

export interface MenuItem {
  label: string;
  key: string;
  data: Array<{
    icon?: React.ReactNode;
    title?: string;
    name?: string;
    category?: string;
    region?: string;
    description?: string;
    type?: string;
  }>;
  type: MenuType;
}

