

// morning product list
var arr = [
    {name:"YOGHURT & CHIA POTS SMALL",qty:"12 pots x 150ml Spoons provided",price:"$84.00 per box (12 prices)",pimage:"https://az727718.vo.msecnd.net/c34bf49efec4419a808454d753e542b5/images/e5b6023b7e444c769a09f6adf37a3416_360w.jpg"},
    {name:"YOGHURT & CHIA POTS LARGE",qty:"24 pots x 150ml Spoons provided",price:"$168.00 per box (24 prices)",pimage:"https://az727718.vo.msecnd.net/c34bf49efec4419a808454d753e542b5/images/f71eadb95ea24aba82e1d33d5a5fa374_360w.jpg"},
    {name:"SEASONAL FRUIT PLATTER",qty:"A selection of cut, seasonal fruit",price:"From $60.00 per platter",pimage:"https://az727718.vo.msecnd.net/c34bf49efec4419a808454d753e542b5/images/0e12a03eb8c845048d70048ad85595bc_360w.jpg"},
    {name:"SEASONAL WHOLE FRUIT BOX",qty:"Whole pieces of local seasonal fruit",price:"From $30.00 per box",pimage:"https://az727718.vo.msecnd.net/c34bf49efec4419a808454d753e542b5/images/b4e67d8f41fc447cb84c273a1e33d58f_360w.jpg"},
    {name:"MINI PASTRY BOX REGULAR",qty:"By The Bread & Butter Project",price:"$56.00 per box",pimage:"https://az727718.vo.msecnd.net/c34bf49efec4419a808454d753e542b5/images/f20629c8788b4c98984d1f81a6ef78d6_360w.jpg"},
    {name:"SWEET TREATS",qty:"Enjoy the famous two Good dark",price:"from $58.00",pimage:"https://az727718.vo.msecnd.net/c34bf49efec4419a808454d753e542b5/images/ff2588d77e6945d4803dc2aefb04861d_360w.jpg"},
    {name:"WHOLESOME BAKED GOODS",qty:"Start the day right with delicious",price:"From $55.00",pimage:"https://az727718.vo.msecnd.net/c34bf49efec4419a808454d753e542b5/images/7654518427ef456aa4e2be536645f574_360w.jpg"},
]



// create cluster for morning product card

function showproduct(){
    var cluttersMorning = ""
    arr.forEach(function(val){
        cluttersMorning += `<div class="cards">
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

    document.querySelector(".product-page .card2").innerHTML = cluttersMorning;

    
}

showproduct();




// input search funclity in morning product page 
    
var srbtn =  document.querySelector(".searbar input");  

function serchProduct(){

    srbtn.addEventListener("input",function(){
        const filterdata = arr.filter((val) => val.name.toLowerCase().startsWith(srbtn.value));
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
       
        document.querySelector(".product-page .card2").innerHTML = clutter;
    })

    
}

serchProduct();



// sales product list

//   [{
   
//     producttitle: "Change the course cook kit",
//     quantity: 1,
//     pPrice: 96,
//     pImage: "https://cdn.sanity.io/images/w8f1ak3c/production/adb77436d60e62d2b5b0574016abcc864b8e65b0-4498x2999.png/DSC0078_Dexter%20Kim.png?rect=470,108,3458,2760&fp-x=0.4888698630136987&fp-y=0.49614340367765025&w=1024&h=817&fit=crop&crop=focalpoint&auto=format",
//     createdAt: new Date().toISOString()
// },
//   {
//     producttitle: "The cookbook due kit",
//     quantity: 1,
//     pPrice: 72,
//     pImage: "https://cdn.sanity.io/images/w8f1ak3c/production/4206e9c3f7ab098369c39a2194b82eeca6bb0664-6166x4111.png/DSC0005_Dexter%20Kim.png?rect=2,0,6163,4111&w=1024&h=683&auto=format",
//     createdAt: new Date().toISOString()
//   },
//   {
//     producttitle: "two hugs candle",
//     quantity: 1,
//     pPrice: 69,
//     pImage: "https://cdn.sanity.io/images/w8f1ak3c/production/d38a94692dcb9250bb49632883f8e31c4a11e123-1408x1408.png/Two%20Hugs%20Candle%20Two%20Good%20Co.png?w=1024&h=1024&auto=format",
//     createdAt: new Date().toISOString()
//   },
//   {
//     producttitle: "The good night's sleep care pack",
//     quantity: 1,
//     pPrice: 96,
//     pImage: "https://cdn.sanity.io/images/w8f1ak3c/production/5ff174456e7f3a000b5bcdd6768155d29570c39b-5000x5000.png/Good-Nights-Sleep-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format",
//     createdAt: new Date().toISOString()
   
//   },
//   {
//     producttitle: "THE LOVE + CARE PACK",
//     quantity: 1,
//     pPrice: 50,
//     pImage: "https://cdn.sanity.io/images/w8f1ak3c/production/d6a2a4be8e3063d64648773f57f5f447609a93ab-5000x5000.png/Love-Care-Pack-Expanded-Two-Good-Co.png?w=640&h=640&auto=format",
//     createdAt: new Date().toISOString()
//   },
//   {
//     producttitle: "DONATE 20 MEALS TO A WOMEN'S SHELTER",
//     quantity: 1,
//     pPrice: 200,
//     pImage: "https://cdn.sanity.io/images/w8f1ak3c/production/3dab242fa3387f3fc93a1663d944ff8fab1d00a7-2900x2900.png/Donate-20-meals-womens-shelter-two-good-co.png?w=640&h=640&auto=format",
//     createdAt: new Date().toISOString()
//   },
//   {
//     producttitle: "EGGPLANT KASUNDI",
//     quantity: 1,
//     pPrice: 16,
//     pImage: "https://cdn.sanity.io/images/w8f1ak3c/production/cfc4a477bb738edb9066c176d79133e85e8b3f15-2900x2900.png/Eggplant-Kasundi-Two-Good-Co.png?w=640&h=640&auto=format",
//     createdAt: new Date().toISOString()
//   },
//   {
//     producttitle: "CLEANSE & HYDRATE SHAMPOO",
//     quantity: 1,
//     pPrice: 38,
//     pImage: "https://cdn.sanity.io/images/w8f1ak3c/production/fd32cb5a89c680203e25b1e29921c7fcf17b8a3e-1408x1408.png/Cleanse%20&%20Hydrate%20Shampoo%20Two%20Good%20Co.png?w=640&h=640&auto=format",
//     createdAt: new Date().toISOString()
//   }]






