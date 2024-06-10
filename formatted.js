setInterval(function () {
   const date = moment("2024-01-12");
   const now = moment();
   const duration = moment.duration(now.diff(date));

   const years = duration.years();
   const months = duration.months();
   const days = duration.days();
   const hours = duration.hours();
   const minutes = duration.minutes();
   const seconds = duration.seconds();

   document.getElementById("years").innerHTML = years;
   document.getElementById("months").innerHTML = months;
   document.getElementById("days").innerHTML = days;
   document.getElementById("hours").innerHTML = hours;
   document.getElementById("minutes").innerHTML = minutes;
   document.getElementById("seconds").innerHTML = seconds;
}, 1000)