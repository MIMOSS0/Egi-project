window.onload = function() { 
    var urlParams = new URLSearchParams(window.location.search); 
    var name = urlParams.get('name');
    var studentId = urlParams.get('studentId');

    if (name) { 
        document.getElementById("name1").textContent = name; 
    }

    if (studentId) {
        document.getElementById('studentIdDisplay').textContent = 'الرقم الجامعي: ' + studentId;
    } else {
        document.getElementById('studentIdDisplay').textContent = 'لم يتم تسجيل الدخول.';
    }
}

document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});




function uploadFile() {
    const fileInput1 = document.getElementById('fileInput1');
    const file = fileInput1.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const studentName = document.getElementById('name1').textContent;
            const studentId = document.getElementById('studentIdDisplay').textContent;
            const fileData = event.target.result;
            
           
            const fileList = JSON.parse(localStorage.getItem('fileList1')) || [];
            fileList.push({ studentName, studentId, fileData });
            localStorage.setItem('fileList1', JSON.stringify(fileList));
            
           
            document.getElementById('message').textContent = 'تم إرسال الملف بنجاح';
            
           
            fileInput1.value = '';
        };
        reader.readAsDataURL(file);
    } else {
        alert('يرجى اختيار ملف أولاً.');
    }
}
