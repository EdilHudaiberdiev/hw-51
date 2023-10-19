import React from "react";
import './LotteryBall.css'

interface Props {
    number: number;
}

const LotteryBall: React.FC<Props>  = ({number}) => {
    return (
        <div className="lotteryBall">
            <p> <strong>{number}</strong></p>
        </div>
    );
};

export default LotteryBall;