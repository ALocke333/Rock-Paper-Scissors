const getUsersChoice = userInput => {
    userInput.toLowerCase();

    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ) {
        return userInput;
    } else {
        return 'error';
    }   
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0 :
        return 'rock';
        break;
            case 1 :
            return 'paper';
            break;
                  case 2 :
                  return 'scissors';
                break;

    }
}

const determinedWinner = (userChoice, computerChoice) => {
    
    if ( userChoice === 'bomb' ){
        return 'user won';
    }
    
    if ( userChoice === computerChoice ){
         return 'tie game';
 }
    if(userChoice === 'rock'){
        if(computerChoice === 'paper') {
             return 'Computer won';
        } else {
             return 'User won';
        }
    }
    if(userChoice === 'paper'){
        if(computerChoice === 'scissors') {
             return 'Computer won';
        } else {
             return'User won';
        }
    }
    if(userChoice === 'scissors'){
            if(computerChoice === 'rock') {
                 return 'Computer won';
            } else {
                 return 'User won';
            }
        }
};

const playGame = () => {
    const userChoice = getUsersChoice('bomb');
    const computerChoice = getComputerChoice();


    console.log(determinedWinner(userChoice, computerChoice));
}

playGame(); 
