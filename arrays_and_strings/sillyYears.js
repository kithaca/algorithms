function sillyYears (year) {
	var years = [];
	var newYear = year;

	while (years.length < 10) {
		newYear++;

		var yearArr = newYear.toString().split("");
		var left = parseInt(yearArr.slice(0, 2).join(""));
		var mid = parseInt(yearArr.slice(1, 3).join(""));
		var right = parseInt(yearArr.slice(2).join(""));

		if (left + right === mid) {
			years.push(newYear);
		}
	}
	return years;
}

console.log(sillyYears(1910));