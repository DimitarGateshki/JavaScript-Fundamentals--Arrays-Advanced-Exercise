function solve(arr) {

    let train=[];
    train=arr.shift().split(' ').map(e=>Number(e));
    
    let line=['1'];
    let max=Number(arr.shift());
    let el=arr.shift();
    while(el!=undefined){

        line=el.split(' ');

        if (line[0]=='Add') {
            train.push(Number(line[1]));
        }else{
            for (let i = 0; i < train.length; i++) {
                if ((train[i]+Number(line[0]))<=max) {
                    train[i]+=Number(line[0]);
                    break;
                }
                
            }
                
            
        }
        el=arr.shift();
    }

    console.log(train.join(' '));
}