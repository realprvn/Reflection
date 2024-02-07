const fileDropArea = document.getElementById('fileDropArea');
const fileInput = document.getElementById('fileInput');

fileDropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    fileDropArea.classList.add('hover');
});

fileDropArea.addEventListener('dragleave', () => {
    fileDropArea.classList.remove('hover');
});

fileDropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    fileDropArea.classList.remove('hover');
    const file = e.dataTransfer.files[0];
    handleFile(file);
});

fileDropArea.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    handleFile(file);
});

function handleFile(file) {
    if (!file) throw new Error('Dosya Seçilmedi');
    const reader = new FileReader();
    reader.onload = (e) => {
        const content = e.target.result;
        const lines = content.split('\n');
        lines.forEach(line => {
            const [id,name,surname,mail,salary] = line.split(',');
            addRowToTable(id,name,surname,mail,salary);
        });
    };
    reader.readAsText(file);
}

function addRowToTable(id,name,surname,mail,salary) {
    const table = document.querySelector('#fileinput');
    const newRow = table.insertRow();
    newRow.insertCell(0).textContent = id;
    newRow.insertCell(1).textContent = name;
    newRow.insertCell(2).textContent = surname;
    newRow.insertCell(3).textContent = mail;
    newRow.insertCell(4).textContent = salary;
}
