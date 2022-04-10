function solve(arr) {

    let sorted=arr.sort((a,b)=>a.localeCompare(b)).sort((a,b)=>a.length-b.length);
    console.log(sorted.join('\n'));
    
}