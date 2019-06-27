



export const filterProduct =(productList) =>{
    const nameArray=[];

    const checkNameExistence = (name)=>{

        const index = nameArray.findIndex(nameItem=> nameItem===name);
        if (index!==-1)
            return false;
        else return true
    }

    const filteredProductList = productList.filter(item=>{
        if (!checkNameExistence(item.name))
            return false;
        nameArray.push(item.name);
        return true
    })

    const mappedProductList = filteredProductList.map(item=>{
        const {detail,name,picture,star} = item;
        return {
            detail,name, picture,star, choices:[]
        }
    })

    let currentProductIndex = 0;

    for (let product of productList){
        if (product.name !== mappedProductList[currentProductIndex].name)
            currentProductIndex++;
        const {_id,size,type,price} = product;
        mappedProductList[currentProductIndex].choices.push({_id,size,type,price});
    }

    return mappedProductList;
}