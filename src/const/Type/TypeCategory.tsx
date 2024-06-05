export interface TypeCategory {
  category_id?: number;
  name?: string;
  category_img?: string;
  background?: TypeBackground[];
}

export interface TypeBackground {
  id?: number;
  background_img?: string;
  is_premium?: boolean;
  toolbar_color?: string;
  icon_color?: string;
  text_color?: string;
  icon_toolbar_color?: string;
}

export interface TypeCategorySticker {
  category_id?: number;
  name?: string;
  category_img?: string;
  stickers?: TypeBackground[];
}

export interface TypeSticker {
  id?: number;
  is_premium?: boolean;
  sticker_img?: string;
}
