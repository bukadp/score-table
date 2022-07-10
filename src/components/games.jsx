import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    addTeamAC, firstTeamWin,
    setTeamOneScoreAC,
    setTeamTwoScoreAC,
    updateTeamOneScoreAC,
    updateTeamTwoScoreAC
} from "../redux/data-reducer";

function Games(props) {
    const gamesData = useSelector(state => state.scoreTableData.gamesData);
    const dispatch = useDispatch();

    const gamesResult = (id, teamOne, scoreTeamOne, teamTwo, scoreTeamTwo) => {
        if (scoreTeamOne > scoreTeamTwo) {
            dispatch(firstTeamWin(teamOne, teamTwo))
        }
    }

    const onScoreChangeTeamOne = (id, scoreTeamOne) => {
        dispatch(updateTeamOneScoreAC(id, scoreTeamOne));
    }


    const setScore = (id) => {
        dispatch(setTeamOneScoreAC(id))
        dispatch(setTeamTwoScoreAC(id))

    }

    const onScoreChangeTeamTwo = (id, scoreTeamTwo) => {
        dispatch(updateTeamTwoScoreAC(id, scoreTeamTwo));
    }


    const setScoreTeamTwo = () => {
    }


    return (
        //TODO align center item in component games
        <div>
            <ul>
                {gamesData.map((item) => {
                    return <li key={item.id}>
                        <span>{`${item.teamOne} `}</span>
                        <span>{(item.scoreTeamOne !== null)
                            ? `${item.scoreTeamOne} `
                            : <input className="score"
                                     type="number"
                                     min="0"
                                     autoFocus={true}
                                //onBlur={setScoreTeamOne}
                                     onChange={(e) => {
                                         onScoreChangeTeamOne(item.id, e.target.value)
                                     }}
                                //onSubmit={setScoreTeamOne}
                                /*value={item.interimScoreTeamOne}*/
                            />
                        }</span>
                        <span> : </span>
                        <span>{(item.scoreTeamTwo !== null)
                            ? `${item.scoreTeamTwo} `
                            : <input className="score"
                                     type="number"
                                     min="0"
                                     onChange={(e) => {
                                         onScoreChangeTeamTwo(item.id, e.target.value)
                                     }}
                                     onSubmit={setScoreTeamTwo}
                            />
                        }</span>
                        <span>{` ${item.teamTwo}`}</span>
                        <button
                            type="button"
                            onClick={() => setScore(
                                item.id,
                                item.teamOne,
                                item.scoreTeamOne,
                                item.teamTwo,
                                item.scoreTeamTwo
                            )}
                        >set result
                        </button>
                    </li>
                })
                }
                {/*                <li>
                    <span>{`Greece `}</span>
                    <input className="score" type="number"/>
                    <span> : </span>
                    <input className="score" type="number"/>
                    <span>{` Greece`}</span>
                </li>*/}
            </ul>
        </div>

    );
}

export default Games;
