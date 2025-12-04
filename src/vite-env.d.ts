/// <reference types="vite/client" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module 'react-helmet-async' {
  import { HelmetData } from 'react-helmet-async';
  export { Helmet, HelmetProvider } from 'react-helmet-async';
  export type { HelmetData };
}

declare module 'react/jsx-runtime' {
  export function jsx(
    type: any,
    props: any,
    key?: string | number
  ): React.ReactElement;
  export function jsxs(
    type: any,
    props: any,
    key?: string | number
  ): React.ReactElement;
  export const Fragment: React.ComponentType<{ children?: React.ReactNode }>;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}
