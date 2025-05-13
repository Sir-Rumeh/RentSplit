import { ReactElement, ReactNode } from 'react';

export interface RoutesType {
   path:string;
   element:ReactElement;
   name:string;
   title:string;
   url:string;
   icon:ReactElement | ReactNode | HTMLElement;

}
