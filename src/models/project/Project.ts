import {Schema, model, models} from "mongoose";
import { IProject, IPicture} from "./types";
import {LangSchema} from "../common_schemas";

//Subdocument for pictures
export const PictureSchema = new Schema<IPicture>({
    src: { type: String, required: true },
    width: Number,
    height: Number,
    alt: { type: String, required: true }
});


export const ProjectSchema = new Schema<IProject>({
    title: LangSchema,
    slug: String,
    customer: {type: String, required: true},
    category: {type: String, required: true},
    featured_picture: [PictureSchema],
    thumb_width: Number,
    thumb_height: Number,
    description: LangSchema,
    link: String
})






export default models?.Projects || model<IProject>("Projects", ProjectSchema);





// Example json
// {
//   ´´  "project":{
//         "title":  {
//             "en": "Jewelry Online Store",
//             "jp": "ジュエリーオンラインショップ"
//         },
//         "slug": "project-1",
//         "customer": "H-Pole",
//         "category": "web",
//         "featured_picture": ["/h-pole_1.jpeg","/h-pole_1.jpeg"],
//          "thumb_witdh": 400,
//          "thumb_height": 800,
//         "description":  {
//             "en": "Jewelry Online Store",
//             "jp": "ジュエリーオンラインショップ"
//         },
//         "link": "https://h-pole.com/"
//     }
// }