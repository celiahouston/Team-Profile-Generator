// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee'); 
// import Employee from "./Employee";



// module.exports = Engineer; 
class Engineer extends Employee {
        constructor(name, id, email, githubName) {
            super(name, id, email);
            this.githubName = githubName; 
        }
    
        get GithubName () {
            return this.githubName; 
        }
    
        getRole() {
            return 'Engineer'; 
        }
    }

    module.exports = Engineer; 