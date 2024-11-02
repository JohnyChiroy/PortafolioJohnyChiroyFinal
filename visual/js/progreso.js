document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach(bar => {
        const percentage = bar.getAttribute("data-percentage");
        bar.style.width = percentage + "%";
    });
});

// document.addEventListener("DOMContentLoaded", function() {
//     const circles = document.querySelectorAll('.progress');

//     circles.forEach(circle => {
//         const percentage = circle.getAttribute('data-percentage');
//         const radius = circle.r.baseVal.value;
//         const circumference = 2 * Math.PI * radius;
//         const offset = circumference - (percentage / 100 * circumference);

//         circle.style.strokeDasharray = `${circumference} ${circumference}`; // Aplicar el valor de circunferencia
//         circle.style.strokeDashoffset = offset; // Ajustar el desplazamiento
//     });
// });