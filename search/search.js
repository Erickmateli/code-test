//2.Write a function search that accepts 2 arguments:
//a collection of values
//a value to find in the collection
function search(coll,val){
    //initaial values for start,middle and end
    let start = 0;
    let stop  = coll.length - 1;
    let middle = Math.floor((stop + start) / 2);
    
    //check if the middle item is what we are looking for and if not check wether is higher or lower
    while(coll[middle] !== val && start < stop){
        if(val < coll[middle]){
            stop = middle - 1;
        }else{
            start = middle + 1;
        }
        //recalculate middle in every iteration 
        middle = Math.floor((start + stop) / 2);
    }
    // if the current middle item is what we're looking for return it's index, else return -1
    return (coll[middle] !== val) ? -1 : middle
}
const coll = [3,4,5,3,6,8,9,,0,8,6,4,9,3,6];
console.log(search(coll,9));

// const num = [1,2,3,4,5,6,7];
// const lastnum = num.length ;
// console.log(lastnum);
// // for(i = 0; i<num.length; i++){
// //     console.log(i);
// // }