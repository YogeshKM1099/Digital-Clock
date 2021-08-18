function Time()
{
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var period = "";
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var d = date.toLocaleDateString(undefined,options)
    if(hour >= 12)
    {
        period="PM";
    }
    else{
        period = "AM";
    }

    if(hour==0){
        hour = 12;
    }
    else{
        if(hour>12)
        {
            hour = hour - 12;
        }
    }
    
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    document.getElementById("clock").innerHTML = hour + " : " + minute + " : " + second +  " " + period + "<br>" + d;
    setTimeout(Time, 1000);

}
function update(t)
{
    if(t<10)
    {
        return "0" + t;
    }
    else {
        return t;
    }
}
Time();