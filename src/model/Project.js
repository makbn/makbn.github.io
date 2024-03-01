
export default class Project {
    constructor(id, name, short_desc, desc, url, repo, extra=[]) {
        this.id = id;
        this.name = name;
        this.short_desc =short_desc;
        this.desc = desc;
        this.url= url;
        this.repo=repo;
        this.extra = extra
    }
}