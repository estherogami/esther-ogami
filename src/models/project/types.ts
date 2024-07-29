import {ISubLanguage} from "../common_types";

export type category = "web" | "design";

export interface IProject{
    _id?: string;
    title: ISubLanguage;
    slug: string;
    customer?: string;
    category: category;
    featured_picture: [IPicture];
    thumb_width: number;
    thumb_height: number;
    description: ISubLanguage;
    link?: string;
  }

export interface IPicture{
  _id?: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}