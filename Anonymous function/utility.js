 function userData(){
    return["hello", "world"];
}
// Named export
function getUsers(){
    return[{id:1,ename:"clark"},{id:2,ename:"bruce"},];
}

export{userData,getUsers};

//defoult Export

function getProducts(){
    return[
        {id:1,title:"Laptop"},
        {id:1,title:"Mobail"},
        {id:1,title:"tablet"},

    ];
}
export default getProducts;