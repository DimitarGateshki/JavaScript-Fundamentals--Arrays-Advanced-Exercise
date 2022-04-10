function solve(arr,arr1) {

    let lenght=arr1[0];
    let dell=arr1[1];
    let number=arr1[2];
    let newArr=arr.splice(0,lenght);
    let count=0;
    
    for (let i = 0; i < dell; i++) {
        newArr.shift();
    }

    while (newArr.includes(number)) {
        count++;
        let index=newArr.indexOf(number);
        newArr.splice(index,1);

    }

    console.log(`Number ${number} occurs ${count} times.`);

    
}
