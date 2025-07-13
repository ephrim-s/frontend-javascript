interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; 
}

// Example of a Teacher object
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
};

// Interface for Directors extending Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// Function interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe"));  // J. Doe


// Interface for Student class
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
    constructor(private firstName: string, private lastName: string) {}

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

// Usage example
const student = new StudentClass('John', 'Doe');
console.log(student.displayName());      // John
console.log(student.workOnHomework());   // Currently working