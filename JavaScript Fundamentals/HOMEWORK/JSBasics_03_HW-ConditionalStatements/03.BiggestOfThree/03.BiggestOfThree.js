
function solveProblem(args) {
	var max = +args[0];

	for (i = 0; i <= 3; i+=1) {
		if (+args[i] > max) {
			max = +args[i];
		}
	}

    console.log(max);
}
