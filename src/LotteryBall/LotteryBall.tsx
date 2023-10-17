import React from "react";
import './LotteryBall.css'

interface Props {
    number: number;
}

const LotteryBall: React.FC<Props>  = ({number}) => {
    return (
        <div className="lotteryBall">
            <p>{number}</p>
        </div>
    );
};
// age={people[0].age}

export default LotteryBall;