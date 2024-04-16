function fibonacci(num) {
// your code here
    if(num<=0){
		return -1;
	}
	if (num == 1) {
		return 0;
	}

	let fibprev = 0;
	let fibcurr = 1;

	for(let i = 2; i<num; i++){
		let temp = fibcurr;
		fibcurr = fibcurr + fibprev;
		fibprev = temp;
	}
	return fibcurr;
}

module.exports = fibonacci;
