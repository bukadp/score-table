import React from "react";
import {useSelector} from "react-redux";

function Games(props) {
    const gamesData = useSelector(state => state.scoreTableData.gamesData);
    console.log('gamesData', gamesData)

    /*let mappedGamesData = (gamesData) => {

    debugger
        return gamesData.map((item)=>({
            teamOne: item.teamOne,
            teamTwo: item.teamTwo,
            scoreTeamOne: item.scoreTeamOne,
            scoreTeamTwo: item.scoreTeamTwo,
        }) )

    }*/


    return (
        <div>
            <ul>
                {gamesData.map((item) => {
                    return <li  key={item.teamOne + item.teamTwo}>
                        <span>{`${item.teamOne} `}</span>
                        <span>{`${item.scoreTeamOne} `}</span>
                        <span> : </span>
                        <span>{`${item.scoreTeamTwo} `}</span>
                        <span>{` ${item.teamTwo}`}</span>
                    </li>
                })
                }
                <li>
            <span>{`Greece `}</span>
            <input className="score" type="number"/>
            <span> : </span>
            <input className="score" type="number"/>
            <span>{` Greece`}</span>
            </li>
            </ul>
        </div>

    );
}

export default Games;
