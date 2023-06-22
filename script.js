//array for player x
const player_x = [];

//array for for player o
const player_o = [];

//array for winning combos
const winningCombos = [
    ['0', '1', '2'],
	['3', '4', '5'],
	['6', '7', '8'],
	['0', '3', '6'],
	['1', '4', '7'],
	['2', '5', '8'],
	['0', '4', '8'],
	['2', '4', '6']
];

const cells = document.querySelectorAll('.cell');
const element = document.querySelector('.reset');
const banner = document.querySelector('.banner');

function addCells() {
cells.forEach((cells) => {
    cells.addEventListener("click", play); 
});
};

function removeCells() {
    cells.forEach((cells) => {
        cells.removeEventListener("click", play); 
    });
    };

//tracks turns
let round = 0;




function wins (arr1, arr2) {
    let win = false;
    arr1.forEach((val) => {
        intersection = val.filter(element => arr2.sort().includes(element));

        if (intersection.length == 3) {
            win = true;           
        }

    });
    return win;
};

function runGame() {
    
    addCells();

    banner.innerHTML = 'player 1'

}


//sets reset button
element.addEventListener("click", function() {

    cells.forEach((cells) => {
        cells.innerHTML= ""; 
    });

    round =0;
    player_x.length = 0;
    player_o.length = 0;

    runGame();

});

function play(e) {
    let index = e.target.getAttribute("data-index");

    if (round % 2 == 0 && player_x.includes(index) == false && player_o.includes(index) == false) {
        turn = "player 2"
        e.target.innerHTML = "x";
        player_x.push(index)
        round++;
        

    } else if (round % 1 == 0 && player_x.includes(index) == false && player_o.includes(index) == false) {
        turn = "player 1"
        e.target.innerHTML = "o";
        player_o.push(index)
        round++;
        

    }

    if (wins(winningCombos, player_x) == true) {
        turn = "x wins!";
        removeCells();
        
    } else if (wins(winningCombos, player_o) == true) {
        turn = "o wins!";
        removeCells();
    } else if (round == 9) {
        turn = "tie!"
        removeCells();
    }
    banner.innerHTML = turn;
};


runGame();
