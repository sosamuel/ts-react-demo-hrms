declare module "*.css" {
  export const classes: { readonly [k: string]: string };
}
declare module "*.svg" {
  export const src: string;
}
