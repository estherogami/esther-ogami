import { Schema, model, models } from "mongoose";
import { IProfile, IWorkExperience } from "./types";
import {LangSchema} from "../common_schemas";



const WorkExpSchema = new Schema<IWorkExperience>({
    year: Number,
    experience: [LangSchema]
});

//Main Profile Schema document
export const ProfileSchema = new Schema<IProfile>({
    intro: LangSchema,
    work_experience: [WorkExpSchema]
})


export default models?.Profile || model<IProfile>("Profile", ProfileSchema);


// Example json
// {
//     "profile": {
//         "intro": {
//             "en": "Im a frontend web developer & designer from Spain based in Sao Paulo (Brazil). Im specialized on the creation of front-end homepages and applications blablabla.After working several years in Spain I decided to start a new life abroad in Tokio on 2019 and later in Sao Paulo. ",
//             "jp":  "不ロサス京賭2表むさ継病さねじ接会イ山結まレろ右横開今ホ診家カテヘ馬位けスす成手び著済ルり暮農そ断量鷹機えりを割好術班綸ねとで。善ゅふょね吹選ウ市並応れわ守別めわぽ市全ロオム自者れ円提マキ面45供キ惑律18文ほ。両ろだ石要ト外島のぱす著盟オウテモ民世ヨ模3著強びはひ格実じだ必北カ身1真ニミコワ更不チラオ談女サユ毎念言ーましむ回龍レニワ境戒自舎賛なあぎご。"
//         },
//         "work_experience":  [
//             {
//                 "year": 2021,
//                 "experience": {
//                     "en": "exp 1",
//                     "jp": "exp 1"
//                 }
//             },
//              {
//                 "year": 2021,
//                 "experience": {
//                     "en": "exp 1",
//                     "jp": "exp 1"
//                 }
//             }
//         ]
//     }
//  }