/**
 * Created by ajaykumar on 03/05/20
 */
/// <reference types="react" />

declare module 'remark-html' {
  const html: any;
  export default html;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export = content;
}

declare module '*.jpeg' {
  const content: any;
  export = content;
}

declare module '*.png' {
  const content: any;
  export = content;
}

declare module '*.svg' {
  const content: any;
  export = content;
}

declare module '*.gif' {
  const content: any;
  export = content;
}