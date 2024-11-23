// lunch product list
var arr2 = [
    {name:"SHARED SALAD TRAYS MEDIUM",
    qty:"Serves 6 as a meal or 10 as a side"
    ,price:"From $80.00 per tray",pimage:"https://az727718.vo.msecnd.net/c34bf49efec4419a808454d753e542b5/images/a555a0bafda141d9b88e8d1bc5a042c4_360w.jpg"},
    {name:"SHARED SALAD TRAYS LARGE",
    qty:"Serves 12 as a meal or 18 as a side"
    ,price:"From $140.00 per tray",pimage:"https://az727718.vo.msecnd.net/c34bf49efec4419a808454d753e542b5/images/e283428077f742f7b923bbad39e1f90e_360w.jpg"},
    {name:"MINI SAVOURY PASTRY & SNACK BOX",
    qty:"Delivered at room temperature"
    ,price:"$76.00 per box (16 pieces)",pimage:"https://az727718.vo.msecnd.net/c34bf49efec4419a808454d753e542b5/images/eab73ae446154a18b40039f08dc6051f_360w.jpg"},
    {name:"FRITTATA BOX",
    qty:"Delivered at room temperature"
    ,price:"$84.00 per box (12 pieces)",pimage:"https://az727718.vo.msecnd.net/c34bf49efec4419a808454d753e542b5/images/53389efdafe647fd8af1ce6b34dba9e4_360w.jpg"},
    {name:"SEASONAL FRUIT PLATTER",
    qty:"A selection of cut, seasonal fruit"
    ,price:"From $60.00 per platter",pimage:"https://az727718.vo.msecnd.net/c34bf49efec4419a808454d753e542b5/images/0e12a03eb8c845048d70048ad85595bc_360w.jpg"},
    {name:"SEASONAL WHOLE FRUIT BOX",
    qty:"Whole pieces of local seasonal fruit"
    ,price:"From $30.00 per box",pimage:"https://az727718.vo.msecnd.net/c34bf49efec4419a808454d753e542b5/images/b4e67d8f41fc447cb84c273a1e33d58f_360w.jpg"},
    
]




// lunch card
function lunchproduct(){
    var clutterlunch = ""
    arr2.forEach(function(val){
        clutterlunch += `<div class="cards">
        <div class="card">
            <h1>${val.name}</h1>
            <h3>${val.qty}</h3>
            <h1 style="font-size: 20px;">${val.price}</h1>


        </div>
        <div class="card2">
            <img src="${val.pimage}"
                alt="">

        </div>

    </div>`

    })

    document.querySelector(".lunch-product .card2").innerHTML = clutterlunch;

    
}

lunchproduct();



// searbar butten
var srbtn2 =  document.querySelector(".searbar input");  
function lunchproserch(){
    srbtn2.addEventListener("input",function(){
        const filterdata = arr2.filter((val) => val.name.toLowerCase().startsWith(srbtn2.value));
        var clutter = "";
        if (filterdata.length === 0) {
            clutter = "<p>No items found.</p>";
        } else {
            filterdata.forEach(function(val) {
                clutter += `<div class="cards">
                    <div class="card">
                    <h1>${val.name}</h1>
                    <h3>${val.qty}</h3>
                    <h1 style="font-size: 20px;">${val.price}</h1>
                    </div>
                    <div class="card2">
                        <img src="${val.pimage}" alt="">
                    </div> 
                    </div>`;
            });
        }            
       
        document.querySelector(".lunch-product .card2").innerHTML = clutter;
    })

}

lunchproserch();


