import { useState } from 'react'
import LotteryBall from "./LotteryBall/LotteryBall";


const App = () => {
    const [randomNumbers, setRandomNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    return(
        <>
            <LotteryBall number={randomNumbers[0]}/>
            <LotteryBall number={randomNumbers[1]}/>
            <LotteryBall number={randomNumbers[2]}/>
            <LotteryBall number={randomNumbers[3]}/>
            <LotteryBall number={randomNumbers[4]}/>
        </>

    )

};






export default App
