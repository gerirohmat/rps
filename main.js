// Jalankan Fungsi Random Computer
function computerPick(){
    const value = ["rock", "paper", "scissors"]
    const randomPick = Math.floor(Math.random() * value.length);
    return value[randomPick]
}

// Bandingkan hasilnya
function CheckResult(userInput, computerInput) {
    if (userInput === 'paper'){
        if (computerInput === 'rock'){
            return ('You Win')
        } else if (computerInput === 'scissors'){
            return ('You Lose')
        } else {return ('Draw')}
    } else if (userInput === 'rock'){
        if (computerInput === 'scissors'){
            return ('You Win')
        } else if (computerInput === 'paper'){
            return ('You Lose')
        } else {return ('Draw')}
    } else if (userInput === 'scissors'){
        if (computerInput === 'paper'){
            return ('You Win')
        } else if (computerInput === 'rock'){
            return ('You Lose')
        } else {return ('Draw')}
    }    
}

// Tampilkan hasil ke layar
function display(value){
    let computer = computerPick();
    document.getElementById("userPicks").innerHTML = value;
    document.getElementById('computerPicks').innerHTML = computer;
    let result = CheckResult(value, computer);
    document.getElementById('resultPlayed').innerHTML = result;
    console.log(computer)

}
