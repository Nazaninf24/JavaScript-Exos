let stages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

function createHalfPyramid (stages) {

    for ( i = 1; i <= stages; i++) {
    let row = '';

	for (e = 1; e <= (stages - i); e++){
    	row += ' ';
    }

    for ( j = 1; j <= i; j++) {
      row += '#';
    }

    console.log(row);
    }
}

createHalfPyramid(stages);