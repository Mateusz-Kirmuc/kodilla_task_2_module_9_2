var femaleNames = ['Caroline', 'Jane', 'Megan'];
var maleNames = ['Frank', 'Greg', 'Matt'];

var concatNames = femaleNames.concat(maleNames);

var newName = 'Claire';

if (femaleNames.indexOf(newName) === -1) {
	femaleNames.push(newName);
}
