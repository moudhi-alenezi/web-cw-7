let game = [
 [``,``,``],
 [``,``,``],
 [``,``,``]
];

let player = "O";
function play(x,y){
    if(player=="O"){
        player="X";
    }else{
        player="O";
    }
    game[x][y] = player;
    document.getElementById(`${x}${y}`).innerText=player;
    if(game[0][0] == player && game[0][1] == player && game[0][2] == player){
        alert(`YOU WON!`);
    }
    if(game[1][0] == player && game[1][1] == player && game[1][2] == player){
        alert(`YOU WON!`);
    }
    if(game[2][0] == player && game[2][1] == player && game[2][2] == player){
        alert(`YOU WON!`);
    }
    if(game[0][0] == player && game[1][0] == player && game[2][0] == player){
        alert(`YOU WON!`);
    }
    if(game[0][1] == player && game[1][1] == player && game[2][1] == player){
        alert(`YOU WON!`);
    }
    if(game[0][2] == player && game[1][2] == player && game[2][2] == player){
        alert(`YOU WON!`);
    }
    if(game[0][0] == player && game[1][1] == player && game[2][2] == player){
        alert(`YOU WON!`);
    }
    if(game[0][2] == player && game[1][1] == player && game[2][0] == player){
        alert(`YOU WON!`);
    }
}