import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    setTeamOneScoreAC,
    setTeamTwoScoreAC,
    updateTeamOneScoreAC,
    updateTeamTwoScoreAC, setPlacesAC, drawResultAC, setTeamLoseAC, setTeamWinAC
} from "../redux/data-reducer";

function Games() {
    const gamesData = useSelector(state => state.scoreTableData.gamesData);
    const dispatch = useDispatch();

    const onScoreChangeTeamOne = (id, scoreTeamOne) => {
        dispatch(updateTeamOneScoreAC(id, scoreTeamOne));
    }

    const gamesResult = (id, teamOne, scoreTeamOne, teamTwo, scoreTeamTwo) => {
        dispatch(setTeamOneScoreAC(id));
        dispatch(setTeamTwoScoreAC(id));

        switch (true) {
            case (scoreTeamOne > scoreTeamTwo):
                dispatch(setTeamWinAC(teamOne))
                dispatch(setTeamLoseAC(teamTwo))
                break;
            case (scoreTeamOne < scoreTeamTwo):
                dispatch(setTeamWinAC(teamTwo))
                dispatch(setTeamLoseAC(teamOne))
                break;
            default:
                dispatch(drawResultAC(teamOne))
                dispatch(drawResultAC(teamTwo))
        }
        dispatch(setPlacesAC())
    }

    const onScoreChangeTeamTwo = (id, scoreTeamTwo) => {
        dispatch(updateTeamTwoScoreAC(id, scoreTeamTwo));
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
                                     onChange={(e) => {
                                         onScoreChangeTeamOne(item.id, e.target.value)
                                     }}
                                     value={item.interimScoreTeamOne}
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
                                     value={item.interimScoreTeamTwo}
                            />
                        }</span>
                        <span>{` ${item.teamTwo}`}</span>
                        <button
                            type="button"
                            disabled={item.scoreTeamTwo !== null}
                            onClick={() => gamesResult(
                                item.id,
                                item.teamOne,
                                item.interimScoreTeamOne,
                                item.teamTwo,
                                item.interimScoreTeamTwo,
                            )}
                        >set result
                        </button>
                    </li>
                })
                }
            </ul>
        </div>

    );
}

export default Games;
