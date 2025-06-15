window.onload = function() {
    const fileList = JSON.parse(localStorage.getItem('fileList3')) || [];
    const fileListDiv = document.getElementById('fileList3');

   
    fileList.sort((a, b) => {
        const nameA = a.studentName.toLowerCase();
        const nameB = b.studentName.toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });

    if (fileList.length > 0) {
        fileList.forEach((fileObj, index) => {
            const detailsElement = document.createElement('details');
            const summaryElement = document.createElement('summary');
            summaryElement.textContent = fileObj.studentName;
            detailsElement.appendChild(summaryElement);
            
            const namePara = document.createElement('p');
            namePara.textContent = `اسم الطالب: ${fileObj.studentName}`;
            namePara.className = 'studentname';
            detailsElement.appendChild(namePara);
            
            const idPara = document.createElement('p');
            idPara.textContent = `${fileObj.studentId}`;
            idPara.className = 'studentid';
            detailsElement.appendChild(idPara);
            
            const fileType = fileObj.fileData.split(';')[0].split(':')[1];
            if (fileType.startsWith('image/')) {
                const img = document.createElement('img');
                img.src = fileObj.fileData;
                img.alt = 'الملف المرفوع';
                img.style.maxWidth = '100%'; // Ensure image fits well within the container
                detailsElement.appendChild(img);
            } else if (fileType.startsWith('application/pdf')) {
                const pdf = document.createElement('embed');
                pdf.src = fileObj.fileData;
                pdf.type = 'application/pdf';
                pdf.width = '100%';
                pdf.height = '600px';
                detailsElement.appendChild(pdf);
            } else {
                detailsElement.textContent = 'نوع الملف غير مدعوم.';
            }
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'حذف';
            deleteBtn.className = 'delete-button';
            deleteBtn.onclick = function() {
                deleteFile(index);
            };
            detailsElement.appendChild(deleteBtn);
            
            fileListDiv.appendChild(detailsElement);
        });
    } else {
        fileListDiv.textContent = 'لا توجد ملفات لعرضها.';
    }
};

function deleteFile(index) {
    let fileList = JSON.parse(localStorage.getItem('fileList3')) || [];
    fileList.splice(index, 1);
    localStorage.setItem('fileList3', JSON.stringify(fileList));
    window.location.reload();
}
