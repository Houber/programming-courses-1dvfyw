//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################
let N1, N2, SOUS: number;
N1 = parseInt(prompt('Donner le premier nombre'));
N2 = parseInt(prompt('doner le deuxieme nombre'));

if (N1 > N2) {
  SOUS = N1 - N2;
} else {
  SOUS = N2 - N1;
}

console.log(SOUS);
