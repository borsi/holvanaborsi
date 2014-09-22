$(document).ready( function() {
    var today = new Date();
    var m = today.getMonth();
    var h = today.getHours();
    d = today.getDate();

    var message = "Borsi most épp nagyon itt van, ha nem beteg.";
    if((m===8 && d===22 && h > 8 && h < 9) || 
        (m===8 && d===25 && h > 8 && h < 11) ||
        (m===8 && d===22 && h > 8 && h < 11) ||
        (m===9 && d===2 && h > 8 && h < 11)||
        (m===9 && d===3 && h > 8 && h < 13)||
        (m===9 && d===16 && h > 8 && h < 11)||
        (m===9 && d===30 && h > 8 && h < 11)||
        (m===9 && d===31 && h > 8 && h < 13)||  
        (m===10 && d===6 && h > 8 && h < 11)||
        (m===10 && d===14 && h > 8 && h < 13)||
        (m===10 && d===28 && h > 8 && h < 13)||
        (m===11 && d===5 && h > 8 && h < 13)) {
            message = "Borsi most gyakorlaton van. De ne csüggedj. Kérdezd le az aktuális IT státuszt!";
        }
    var messages = [];
    messages.push("Minden kurva fasza.");
    messages.push("Még meg kell határozni a pontos KPI-ket");
    messages.push("A feedek implementálása a megfelelő ütemben halad.");
    messages.push("Eladtunk két hurkatöltőt! Soha szebb napot.");
    messages.push("A sztakival néha akadnak problémák, de ezeket kezeljük.");
    messages.push("Nincs para, haladnak a fejlesztések.");
    messages.push("A következő sprintben implementálunk egy csomó mindent");
    messages.push("Az idő szép, a németek produktívak. Öröm a köbön.");
    messages.push("A PM-ek minden igényét maradéktalanul kielégítjük");
    messages.push("Máté már rajta van a speckón.");
    messages.push("Ha visszaértem, küldöm a friss scrum calendar-t");
    messages.push("Holnap küldöm az ORI ticketekből összállított eszkalációs listát");
    messages.push("A fejlesztési speckó már fent van JIRA-ban, már csak implementálni kell");
    messages.push("A németek hibája, majd elmesélem.");
    messages.push("Még a csapatépítő előtt kész leszünk mindennel.");
    messages.push("Geri kedvéért nem megyek bele az implementációs nehézségekbe, de minden fasza.");
    messages.push("Minden a legnagyobb rendben.");
    
    $("#message").hide().text(message).fadeIn("slow");
    
    $(".peter-river-flat-button").click( function() {
        $("#message").hide().text(messages[Math.floor((Math.random()*messages.length)+1)]).fadeIn("slow");
    });
});
