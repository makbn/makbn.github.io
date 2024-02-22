
export const SKILL_MAX_LEVEL = 10;

export default class Skill {
    constructor(title, level) {
        this.title = title;
        if (level <= SKILL_MAX_LEVEL) {
            this.level = level;
        } else {
            throw new Error(`level can't be greater than ${SKILL_MAX_LEVEL}`)
        }
    }
}