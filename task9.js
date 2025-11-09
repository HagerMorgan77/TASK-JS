///TASK 9
// مصفوفة الموظفين (بيانات واقعية)
const employees = [
    { id: 1, name: "Ahmed",   department: "Sales",     salary: 8500,  experience: 5, performance: 4.7, isActive: true  },
    { id: 2, name: "Sara",    department: "Marketing", salary: 9200,  experience: 3, performance: 4.1, isActive: false },
    { id: 3, name: "Omar",    department: "IT",        salary: 12500, experience: 6, performance: 4.8, isActive: true  },
    { id: 4, name: "Laila",   department: "Sales",     salary: 7800,  experience: 2, performance: 3.9, isActive: true  },
    { id: 5, name: "Mostafa", department: "IT",        salary: 14000, experience: 8, performance: 4.9, isActive: true  },
    { id: 6, name: "Heba",    department: "HR",        salary: 6900,  experience: 4, performance: 4.3, isActive: false },
    { id: 7, name: "Khaled",  department: "Marketing", salary: 10200, experience: 7, performance: 4.6, isActive: true  },
    { id: 8, name: "Mona",    department: "HR",        salary: 8000,  experience: 5, performance: 4.5, isActive: true  },
];

// 1) استخدم filter لإظهار الموظفين النشيطين فقط
    let topActive = employees.filter((emp) => emp.isActive);

// 2) من خلال نفس الفلترة، استخرج فقط الموظفين اللي أداؤهم (performance >= 4.5).
    let activeHighPer = topActive.filter((emp) => emp.performance >= 4.5);

// 3) حساب متوسط الرواتب لهؤلاء باستخدام reduce
    let totalSalary  = activeHighPer.reduce((acc , emp) => acc + emp.salary , 0);
    let avgSalary = totalSalary / activeHighPer.length;

    
// 4) استخدام map لعرض أسماء الموظفين + القسم + مرتبهم الجديد بعد زيادة 10%
let withRaise  = activeHighPer.map((emp) => {
    let newSalary = emp.salary * 1.10 ;
    return {
        name: emp.name,
        department: emp.department,
        salary: newSalary.toFixed()
    }
});

// 5- استخدم find لإيجاد الموظف الأعلى أداءً في الشركة.

const topPerformer = employees.find(emp => emp.performance === Math.max(...employees.map(e => e.performance)));


// دالة عرض النتائج
function displayResults(title , data) {
    if(data === activeHighPer) {
        console.log(` ${title}`);
        data.forEach((emp) => {
            console.log(`- ${emp.name} | القسم: ${emp.department} | الراتب: ${emp.salary}`);
        });
    }
    else if (data === avgSalary) {
        console.log(` ${title}`);
        console.log(`$متوسط الراتب: ${data.toFixed(0)} `);
    }
    else if (data === withRaise) {
        console.log(` ${title}`);
        data.forEach((emp) => {
            console.log(`- ${emp.name} | القسم: ${emp.department} | مرتب بعد الزيادة: ${emp.salary}`);
        });
    }
    else if (data === topPerformer) {
        console.log(` ${title}`);
        console.log(`- ${data.name} | القسم: ${data.department} | الأداء: ${data.performance}`);
    }
    else {
        console.log("");
    }
 
}
displayResults("📌 الموظفون النشطون ذوو الأداء العالي:", activeHighPer);
displayResults("💰 متوسط رواتب هؤلاء الموظفين:", avgSalary);
displayResults("📈 بعد زيادة الرواتب بنسبة 10%:", withRaise);
displayResults("🏆 أفضل موظف أداءً في الشركة:", topPerformer);









