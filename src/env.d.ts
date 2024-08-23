declare module "*.scss";
declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.jfif";
declare module '*.svg' {
    const value: any;
    export = value;
}
declare const SvgIcon: React.ComponentType<SvgIconProps>;