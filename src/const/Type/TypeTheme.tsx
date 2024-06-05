export interface TypeTheme {
  id?: number;
  name?: string;
  is_light?: boolean;
  is_premium?: boolean;
  img_empty_search?: string;
  img_preview?: string;
  wall_background?: string;
  primary?: string;
  gradient_start?: string;
  gradient_end?: string;
  on_primary?: string;
  background?: string;
  glass?: string;
  glass_opacity?: number;
  record_dialog?: string;
  record_container?: string;
  record_on_container?: string;
  record_heading?: string;
  record_body_text?: string;
  neutral_1?: string;
  neutral_2?: string;
  neutral_3?: string;
  neutral_4?: string;
  neutral_5?: string;
  neutral_6?: string;
  neutral_7?: string;
  neutral_8?: string;
  header_icon?: string;
  divider?: string;
}

export interface TypeFieldTheme {
  label?: string;
  name: string | undefined;
  placeholder?: string;
}
