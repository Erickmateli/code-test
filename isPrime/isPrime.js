//Write a function is Prime that returns true if a number is prime.
const isPrime = (n) =>{
    //check the number provided is 1 or 0 and return false
    if(n === 1 ){
        return false;
    }else if(n === 2){
        return true;
    }else{
        for( x =2; x<n; x++){
            if(n % x === 0){
                return false;
            }
        }
        return true;
    }

    

}
console.log(isPrime(101));


//Write a function called memorize that takes any other function as input and returns a memorized version of that function

//function to add number provided to 2
const add = (n) =>{
    return n + 2;
}
//memoized function which will take a funtion as argument/input
const memorize = (x) => {
    //create cache to store calculation
    const cache = {};
    //use spread oparetors to create arguments
    return (...arguments) =>{
        //get first argument and store it in variable
        let n = arguments[0];
        //check wether the number is a cached
        if(n in cache){
            console.log('loading from cache...');
            return cache[n];
        }else{
            console.log('calculating...');
            let result = x(n);
            cache[n] = result;
            return result;
        }
    }
}
//create memoized function for add
// const memoizedadd = memorize(add);
// console.log(memoizedadd(3));
// console.log(memoizedadd(3));
// console.log(memoizedadd(4));

//Use the function in 3 above to memorize the is Prime function you wrote for problem 2
const memoizedprime = memorize(isPrime);
console.log(memoizedprime(2));
console.log(memoizedprime(3));
