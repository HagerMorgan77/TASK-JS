//Task 6: تقرير الطالب بناءً على درجاته
//  شروط التقييم
function generateReport (studentName , score , subject) {
    let status = "";
    let grade = "";
    if (score >= 90 ){
        grade = "A";
        status = "Excellent";
    }
    else if (score >= 75 && score < 90){
        grade = "B";
        status = "Very Good";
    }
    else if (score >= 60 && score < 75){
        grade = "C";
        status = "Good 🙂";
    }
    else {
        grade = "F";
        status = " Needs Improvement 😞";
    }

    // نرجّع التقرير النهائي

    return `Name: ${studentName}
    Subject: ${subject} 
    Score: ${score}
    Grade: ${grade}
    Status: ${status}`;
    
}

// اختبار الدالة
let result = generateReport("Hager Morgan", 91, "javaScript");
let a = document.getElementById("test");
a.textContent = result;







