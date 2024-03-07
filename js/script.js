function qty(){
    var q=Number(document.getElementById("quantity").value);
    var r=Number(document.getElementById("rate").innerHTML);
    //alert(q+ "  "+ r);
    
    document.getElementsByClassName("item-qty")[0].innerHTML=q;
    document.getElementsByClassName("item-qty")[1].innerHTML=q;

    var price=q*r;
    document.getElementsByClassName("price")[0].innerHTML=price;
    document.getElementsByClassName("price")[1 ].innerHTML=price;
}

//alert("hi");