function showDate()
{
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let isoDate = year + "-" + month + "-" + day;
    document.getElementById("date-display").innerText = isoDate;
}

showDate()
