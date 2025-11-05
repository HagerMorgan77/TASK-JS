// TASK 5: Digital Clock with Date Display

// دالة لإضافة صفر أمام الأرقام أقل من 10 

function zero(num){
    if (num < 10){
        return "0" + num;
    }
    else {
        return num;
    }
}

// Function to get formatted date
function getDate(date) {
    let months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
    
    let day = date.getDate();
    let month = months[date.getMonth() ];
    let year = date.getFullYear();
    
    return `${day} ${month}, ${year}`;
}

// دالة للحصول على الوقت الحالي بتنسيق "ساعة:دقيقة:ثانية"

function updateClock (){
    let date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    //أسماء الأيام
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[date.getDay()];

    // Son Durum 
    let timeString = (`${zero(hours)} : ${zero(minutes)} : ${zero(seconds)}`);
    

    //تحديث النص داخل العنصر المخصص للساعة دون إعادة كتابة الصفحة
    
    let clockEl = document.getElementById("clock");
        let dayEl = document.getElementById("day");
        let dateEl = document.getElementById("date");
        let hoursEl = document.getElementById("hours");
        let minutesEl = document.getElementById("minutes");
        let secondsEl = document.getElementById("seconds");
        
        clockEl.innerHTML = timeString;
        dayEl.textContent = dayName;
        dateEl.textContent = getDate(date);
        hoursEl.textContent = zero(hours);
        minutesEl.textContent = zero(minutes);
        secondsEl.textContent = zero(seconds);
    }
    

// تحديث الساعة كل ثانية
document.addEventListener('DOMContentLoaded', function(){
    updateClock(); // Immediate execution
    // Use setInterval to update every 1000ms
    setInterval(updateClock, 1000);
});