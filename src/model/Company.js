

export default class Company {
    constructor(name, location, url, icon) {
        this.name = name;
        this.location = location;
        this.url = url;
        this._icon = icon;
    }

    get icon(){
        return `${process.env.PUBLIC_URL}/${this._icon}`;
    }
}