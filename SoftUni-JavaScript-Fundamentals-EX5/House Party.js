function solve(arr) {

    let names=[];

    let line=[];
    let el=arr.shift();

    while(el!=undefined){
        line=el.split(' ');

        if (line[2]=='not') {
            if (names.includes(line[0])) {
                let index=names.indexOf(line[0]);
                names.splice(index, 1);
            }else{
                console.log(`${line[0]} is not in the list!`)
            }
        }else{
            if (names.includes(line[0])) {
                console.log(`${line[0]} is already in the list!`);
                
            }else{
            names.push(line[0]);
            }
        }

        el=arr.shift();
    }

    console.log(names.join('\n'));
}