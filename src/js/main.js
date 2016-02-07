// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');


$('#resetbtn').on('click', function(){
	$('#myscore').text(0);
	$('#compscore').text(0);
});


function setScores(){
	if (results === "You Win!"){
		pscore += 1;
		$('#myscore').text(pscore);
	} else if ( results === "You Lost!"){
		cscore += 1;
		$('#compscore').text(cscore);
	}
};


function setText(){
	$('#results').text(results);
	$('#choices').text(choiceDisc);
};


function getRandomIntInclusive(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
};

var compchoice = getRandomIntInclusive(1, 3);

var pchoice = '';

var choiceDisc = '';

var results = '';

var pscore = 0;

var cscore = 0;

function compareChoices(player, computer){
	if (player === computer){
		choiceDisc = "You chose the same thing."
		results = "It's a tie!"
	} else if ( player === 1 && computer === 2 ){
		choiceDisc = "You chose Rock the computer chose Paper."
		results = "You Lost!"
		setScores();
	} else if ( player === 1 && computer === 3 ) {
		choiceDisc = "You chose Rock the computer chose Scissors."
		results = "You Win!"
		setScores();
	} else if ( player === 2 && computer === 1 ){
		choiceDisc = "You chose Paper the computer chose Rock."
		results = "You Win!"
		setScores();
	} else if ( player === 2 && computer === 3 ) {
		choiceDisc = "You chose Paper the computer chose Scissors."
		results = "You Lost!"
		setScores();
	} else if ( player === 3 && computer === 2){
		choiceDisc = "You chose Scissors the computer chose Paper."
		results = "You Win!"
		setScores();
	} else if ( player === 3 && computer === 1 ) {
		choiceDisc = "You chose Scissors the computer chose Rock."
		results = "You Lost!"
		setScores();
	}
}

$('#rock').on('click',function(){
	pchoice = 1;
	compchoice = getRandomIntInclusive(1, 3);
	compareChoices (pchoice, compchoice);
	setText();
})

$('#paper').on('click',function(){
	pchoice = 2;
	compchoice = getRandomIntInclusive(1, 3);
	compareChoices (pchoice, compchoice);
	setText();
})

$('#scissors').on('click',function(){
	pchoice = 3;
	compchoice = getRandomIntInclusive(1, 3);
	compareChoices (pchoice, compchoice);
	setText();
})


});
