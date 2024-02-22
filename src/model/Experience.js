import Company from "./Company";


export default class Experience {
    
    constructor(title, company, start, end="Present", skills=[], desc=[]) {
        this.title = title;
        if (company instanceof Company) {
            this.company = company;
        } else{
            throw new Error(`comapny should be an isntance of ${Company}`)
        }

        this.start = start;
        this.end = end;
        this._skills = skills;
        this._descriptions = desc;
    }

    getSkills() {
        return this._skills;
    }

    getDescriptions() {
        return this._descriptions;
    }
}