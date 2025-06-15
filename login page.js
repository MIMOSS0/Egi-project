function btn1() {
    var ID = document.getElementById("studentId").value;
    var students = {
        "18447": "محمد سيد بيومى عبدالحميد",
        "120204": "ندا ايمن سيف الدين احمد",
        "119574": "شيماء عبدالباقى عبدالقادر حسن",
        "122102": "حبيبة احمد يوسف إسماعيل",
        "119527": "مريم إبراهيم محمود محمد سيد",
        "120257": "شيماء سعيد عيد محمد سيد",
        "121177": "حنين محمد عبدالشافى محمد",
        "18541": "ندى ياسر محمد سالم رجب",
        "121048": "محمود وائل محمود عبدالمحسن",
        "121065": "وسيم اشرف عزت عبدالرحمن مطاوع",
        
        
        
        "111111": "محمد احمد عبدالله",
         "111211": "عبدالله السيد احمد",
        "111311": "سارة احمد",
        
        
        
        "222222": "محمود وائل",
        "222122": "محمد سعيد السيد",
        
        
        
          "333333": "محمود سيد",
        "333133": "محمد وائل",
    };
    
    
    
    
    if (ID === "123456") {
        window.location.href = "The%20fourth%20group/doctor/doctorsamir.html";
    } 
    
    else if (students[ID] && ["18447", "120204", "119574", "122102", "119527", "120257", "121177", "18541", "121048", "121065"].includes(ID)) {
        var name = students[ID];
        window.location.href = `The%20fourth%20group/fourth%20group.html?name=${encodeURIComponent(name)}&studentId=${encodeURIComponent(ID)}`;
    } 
    
    else if (students[ID] && ["111111", "111211", "111311"].includes(ID)) {
        var name = students[ID];
        window.location.href = `The%20first%20group/firstgroup.html?name=${encodeURIComponent(name)}&studentId=${encodeURIComponent(ID)}`;
    } 
    
    else if (students[ID] && ["222222", "222122"].includes(ID)) {
        var name = students[ID];
        window.location.href = `The%20second%20group/second%20group.html?name=${encodeURIComponent(name)}&studentId=${encodeURIComponent(ID)}`;
    } 
    
    
    else if (students[ID] && ["333333", "333133"].includes(ID)) {
        var name = students[ID];
        window.location.href = `The%20third%20group/third%20group.html?name=${encodeURIComponent(name)}&studentId=${encodeURIComponent(ID)}`;
    } 
  
    else {
        document.getElementById('errorMessage').style.display = 'block';
    }
}

function filterInput(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}
