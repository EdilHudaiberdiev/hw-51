import { useState } from 'react'
import LotteryBall from "./LotteryBall/LotteryBall";


const App = () => {
    const [randomNumbers, setRandomNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const changeNumbers = () => {
        const newArrayNumbers: number[] = [];

        while (true) {

            if (newArrayNumbers.length >= 5) {
                break;
            }

            let anyNumber =  Math.floor(Math.random() * (36 - 5 + 1)) + 5;

            if (newArrayNumbers.includes(anyNumber) === false) {
                newArrayNumbers.push(anyNumber);
            }
        }

        setRandomNumbers(
            newArrayNumbers.sort((a,b) => a-b )
        );
    };

    return(
        <>
            <LotteryBall number={randomNumbers[0]}/>
            <LotteryBall number={randomNumbers[1]}/>
            <LotteryBall number={randomNumbers[2]}/>
            <LotteryBall number={randomNumbers[3]}/>
            <LotteryBall number={randomNumbers[4]}/>

            <button type='button' onClick={changeNumbers}>New numbers</button>
        </>

    );
};


export default App
