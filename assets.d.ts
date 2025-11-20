// assets.d.ts (place at project root or in a folder covered by tsconfig)
declare module '*.webp' {
  const src: string;
  export default src;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';
declare module '*.mp4';
declare module '*.webm';
