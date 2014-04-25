function refreshCalendar(year, month) {
    d    = new Date(year, month-1, 1);         // 指定年月の一日
    nday = new Date(year, month, 0).getDate(); // その月の日数
    n0   = d.getDay();                         // はじまりの曜日

    strMonth = ("  " + month).substr(("  " + month).length - 2);
    $("#cmonth").html("<span>" + year + "年" + strMonth + "月</span>");

    for (i=0; i<n0; i++)
        $("#cel"+i).text("");

    for (i=0; i<nday; i++)
        $("#cel"+(n0+i)).text(i+1).show();

    for (i=n0+nday; i<37; i++)
        $("#cel"+i).html("&nbsp;").hide();
}



$(document).ready(function(){
    year  = 0;
    month = 0;

    $("#pmonth").click(function(){
        month -= 1;
        if (month == 0) {
            month = 12;
            year -= 1;
        }
        refreshCalendar(year, month);
    });

    $("#nmonth").click(function(){
        month += 1;
        if (month == 13) {
            month = 1;
            year += 1;
        }
        refreshCalendar(year, month);
    });

    $("#cmonth").click(function(){
        date  = new Date();
        year  = date.getFullYear();
        month = date.getMonth() + 1;
        refreshCalendar(year, month);
    });

    for (i=0; i<37; i++) {
        $("#cel"+i).click(function(){
            if ($(this).text().length > 0) {
                alert( $(this).text());
            }
        });
    }

    date  = new Date();
    year  = date.getFullYear();
    month = date.getMonth()+1;
    refreshCalendar(year, month);
});

