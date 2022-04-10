function solve(arr) {

    let arrRes=[];

    let token=0;

    while(token!=undefined){
        token=arr.shift();
        if (arrRes.includes(token)) {
        }else{
            arrRes.push(token);

        }
    }

    console.log(arrRes.join(' '));
    
}