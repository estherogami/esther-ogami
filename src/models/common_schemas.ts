import { ISubLanguage } from "./common_types";
import {Schema} from "mongoose";

//Subdocuments model for title language switch
export const LangSchema = new Schema<ISubLanguage>({
    en: { type: String, required: true },
    jp: { type: String, required: true }
});


