const tic_tac_toe = {
    board: ['','','','','','','','',''],
    simbols: {
        option: ['X','O'],
        turn_index: 0,
        change: function(){
            this.turn_index = (this.turn_index === 0 ? 1:0);
        }
    },
    container_element: null,
    winner_sequences: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6] 

    ],
    gameover: false,
    init: function(container){
        this.container_element = container;
    },
    make_play: function(position){
        if(this.gameover) return false;
        if(this.board[position]===''){
            this.board[position] = this.simbols.option[this.simbols.turn_index];
            this.draw();
            let winning_sequences_index = this.check_winning_sequences(this.simbols.option[this.simbols.turn_index]);
            if(winning_sequences_index >= 0){
                this.game_is_over();
            }else{
                this.simbols.change();    
            }
            return true;
        }else
        {
            return false;
        }
    },
    start: function(){
        this.board.fill('');
        this.draw();
        this.gameover = false;
    },

    game_is_over: function(){
        this.gameover =  true;
        console.log('Game Over');
    },

    check_winning_sequences: function(simbol){
        for(i in this.winner_sequences){
            if(this.board[this.winner_sequences[i][0]] == simbol &&
               this.board[this.winner_sequences[i][1]] == simbol && 
               this.board[this.winner_sequences[i][2]] == simbol){
                   return 1;
                   console.log('sequencia vencedora' + i);
               }
        };
        return -1;
    },

    draw: function(){
        let content = '';
        for( i in this.board){
        content += '<div onclick= "tic_tac_toe.make_play('+ i +')">'+ this.board[i] +'</div>';
        }
        this.container_element.innerHTML = content;
    }
};