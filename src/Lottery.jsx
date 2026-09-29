import { useState } from "react";
import "./Lottery.css"
import { genTicket, sum } from "./helper";
import Ticket from "./TIcket";

export default function Lottery({ n = 3, winningSum = 15 }) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum;
    let Button = () => {
        setTicket(genTicket(n));
    }
    return (
        <div className="lottery">
            <h1>Lottery Game !</h1>
            <Ticket ticket={ticket} />
            <button onClick={Button} className="generate-btn"> New Ticket</button>
            <h1>{isWinning && "Congratulations You Won !  "}</h1>
        </div>
    )
}