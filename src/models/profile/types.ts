import {ISubLanguage} from "../common_types";

export interface IWorkExperience{
    year: Number;
    experience: ISubLanguage;
}

export interface IProfile{
    _id: string;
    intro: ISubLanguage;
    work_experience: IWorkExperience;
}

