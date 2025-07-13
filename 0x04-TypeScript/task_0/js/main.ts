interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Daneil",
    lastName: "Mensah",
    age: 22,
    location: "Accra",
};

const student2: Student = {
    firstName: "James",
    lastName: "Sowa",
    age: 22,
    location: "Obuasi",
};

const studentList: Student[] = [student1, student2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const nameHeader = document.createElement('th');
const locationHeader = document.createElement('th');

nameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';

const tbody = document.createElement('tbody');

studentList.forEach((student) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);