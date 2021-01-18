let Pages = document.getElementById('pages');
let Days  = document.getElementById('days');
let Click = document.getElementById('click');
let Clear = document.getElementById('clear');
let Result = document.getElementById('result');


Click.onclick = function()
{
    if(Pages.value && Days.value)
    {
        if(Pages.value=="e" || Days.value=="e")
        {
            Result.innerHTML = "Please Fil Input Fields "
             
            Result.style.background="red";
            Result.style.color="white";
        }
        else
        {   
            Result.innerHTML = Number(Pages.value) / Number(Days.value )+ ' ' + 'pages in Your Day';
            Result.style.background="green";
            Result.style.color="white";
            
        }
    }
    else
    {
        Result.innerHTML = "Please Fil Input Fields"
        Result.style.background="red";
        Result.style.color="white";
    }


}

Clear.onclick = function()
{
    location.reload();
}