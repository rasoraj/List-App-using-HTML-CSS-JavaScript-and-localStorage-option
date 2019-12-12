class Count
{
    constructor(val)
    {
        this.i = val;
    }

    incValue()
    {
        this.i++;
    }

    retValue()
    {
        return this.i;
    }
}

var obCount = new Count(1);

function goUp()
{
    scrollTo(0,0);
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
}

function show(){

    scrollTo(0,500);

    var wr = document.getElementById("nr");
    wr.innerText = "";


    var n = document.getElementById("name").value;
    var r = document.getElementById("roll").value;
    var c = obCount.retValue();
    obCount.incValue();

    /*localStorage.setItem(r,n);
    console.log(localStorage.getItem(r));*/

    var ob = {name:n,
              roll:r};

    var j_ob = JSON.stringify(ob);

    localStorage.setItem(c,j_ob);
   
   

    for(i=1;i<=c;i++)
    {
        var c_ob = JSON.parse(localStorage.getItem(i));
        wr.innerText = wr.innerText +  c_ob.name+" "+c_ob.roll+ "\n" ;
    }

    
    //console.log(JSON.parse(localStorage.getItem(r)));
}

 

