// member.js

class Member {
    constructor(name) {
        this.name = name;
        this.skills = [];
    }

    addSkill(skill) {
        this.skills.push(skill);
        console.log(`${skill} added to ${this.name}'s skills.`);
    }

    removeSkill(skill) {
        const index = this.skills.indexOf(skill);
        if (index > -1) {
            this.skills.splice(index, 1);
            console.log(`${skill} removed from ${this.name}'s skills.`);
        } else {
            console.log(`${skill} not found in ${this.name}'s skills.`);
        }
    }

    listSkills() {
        console.log(`${this.name}'s skills: ${this.skills.join(', ')}`);
    }
}

// Example usage:
const member = new Member('John Doe');
member.addSkill('JavaScript');
member.addSkill('Python');
member.listSkills();
member.removeSkill('JavaScript');
member.listSkills();
