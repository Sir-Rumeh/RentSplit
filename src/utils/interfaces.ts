/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react';
import type { LucideIcon } from 'lucide-react';


export interface RoutesType {
   path:string;
   element:ReactElement;
   name:string;
   title:string;
   url:string;
   Icon: LucideIcon;
   items?:any[];
   // Icon:ReactElement | ReactNode | HTMLElement;
}
