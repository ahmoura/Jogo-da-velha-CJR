function single_game() {
    bot_flag = 1;
    op_grade();
}

function mult_game() {
    bot_flag = 0;
    op_grade();
}

function op_grade() {
    document.getElementById("grade").style.display = 'flex';
    document.getElementById("menu").style.display = 'none';
}

function sair(){
    document.getElementById("grade").style.display = 'none';
    document.getElementById("menu").style.display = 'flex';
}