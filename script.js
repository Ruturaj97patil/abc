document.addEventListener('DOMContentLoaded', () => {
    fetchStudentData();
  });
  
  async function fetchStudentData() {
    try {
      const response = await fetch('http://localhost:3000/students');
      const data = await response.json();
  
      const dataContainer = document.getElementById('data-container');
      dataContainer.innerHTML = '<h2>Student Information:</h2>';
  
      if (data.length > 0) {
        const table = document.createElement('table');
        const headerRow = table.createTHead().insertRow(0);
  
        // Add table headers
        ['Name', 'Roll Number', 'Email', 'Address'].forEach(headerText => {
          const th = document.createElement('th');
          th.textContent = headerText;
          headerRow.appendChild(th);
        });
  
        // Add table rows with student data
        data.forEach(student => {
          const row = table.insertRow();
  
          // Add data cells
          ['name', 'roll_number', 'email', 'address'].forEach(fieldName => {
            const cell = row.insertCell();
            cell.textContent = student[fieldName];
          });
        });
  
        dataContainer.appendChild(table);
      } else {
        dataContainer.innerHTML += '<p>No student data available.</p>';
      }
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  }
  