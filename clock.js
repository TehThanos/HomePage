function showTime()
{
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let time = formatDigit(hours) + ":" + formatDigit(minutes) + ":" + formatDigit(seconds);
    document.getElementById("clock-display").innerText = time;

    setTimeout(showTime, 1000);
}

function formatDigit(digit)
{
    if (digit < 10)
    {
        digit = "0" + digit;
    }
    return digit;
}

showTime();
