// Array to hold student data
let students = [];

// Function to add a student
function addStudent() {
    // Get the values from the input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const grade = document.getElementById('grade').value;
    const age = document.getElementById('age').value;
    const degree = document.getElementById('degree').value;

    // Create a student object
    const student = {
        id: students.length + 1,
        name,
        email,
        grade,
        age,
        degree
    };

    // Add student to the students array
    students.push(student);

    // Save students to localStorage
    localStorage.setItem('students', JSON.stringify(students));

    // Add student data to the table
    displayStudents();

    // Clear the input fields after adding the student
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('age').value = '';
    document.getElementById('degree').value = '';
}

// Function to display the students in the table
function displayStudents() {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = ''; // Clear the table before re-adding students

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
            <td>${student.degree}</td>
        `;
        tbody.appendChild(row);
    });
}

// Function to search students
function search() {
    const query = document.getElementById('search').value.toLowerCase();

    const filteredStudents = students.filter(student => {
        return (
            student.name.toLowerCase().includes(query) ||
            student.email.toLowerCase().includes(query) ||
            student.degree.toLowerCase().includes(query)
        );
    });

    // Display the filtered students
    displayFilteredStudents(filteredStudents);
}

// Function to display filtered students after search
function displayFilteredStudents(filteredStudents) {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = ''; // Clear the table before re-adding filtered students

    filteredStudents.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
            <td>${student.degree}</td>
        `;
        tbody.appendChild(row);
    });
}
