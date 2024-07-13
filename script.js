const students = {
    1: "Ahmad",
    2: "Budi",
    3: "Citra",
    4: "Dewi",
    5: "Eko"
    // Tambahkan lebih banyak nomor absen dan nama sesuai kebutuhan
};

document.getElementById('attendance-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const studentId = document.getElementById('student-id').value;
    const studentName = students[studentId];
    
    if (!studentName) {
        alert('Nomor absen tidak ditemukan!');
        return;
    }

    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    const listItem = document.createElement('li');
    listItem.textContent = `Nama: ${studentName}, Tanggal: ${date}, Waktu: ${time}`;
    
    document.getElementById('list').appendChild(listItem);
    
    document.getElementById('attendance-form').reset();
});
