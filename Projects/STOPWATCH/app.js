let hr = 0;
let min = 0
let sec = 0;
let count = 0;

let time = false;

function start()
{
    time = true;
    stopwatch();
}

function stop()
{
    time = false
}

function reset()
{
    time = false;
    document.querySelector("#hr").innerHTML = "00";
    document.querySelector("#min").innerHTML = "00";
    document.querySelector("#sec").innerHTML = "00";
    document.querySelector("#count").innerHTML = "00";
}

function stopwatch()
{
    if(time == true)
    {
        count = count+1;

        if(count == 100)
        {
            sec = sec +1 ;
            count = 0 ;
        }

        if(sec == 60)
        {
            min = min + 1 ;
            sec = 0;
        }

        if(min == 60)
        {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        let hrstr = hr;
        let minstr = min ;
        let secstr = sec;
        let countstr = count;

        if(hr < 10 )
        {
            hrstr = "0" + hrstr;
        }
        if(min < 10 )
        {
            minstr = "0" + minstr;
        }
        if(sec < 10 )
        {
            secstr = "0" + secstr;
        }
        if(count < 10 )
        {
            countstr = "0" + countstr;
        }
        document.querySelector("#hr").innerHTML = hrstr;
        document.querySelector("#min").innerHTML = minstr;
        document.querySelector("#sec").innerHTML = secstr;
        document.querySelector("#count").innerHTML = countstr;
        setTimeout("stopwatch()",10);
    }
}