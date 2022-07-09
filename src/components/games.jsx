import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTeamAC, updateTeamOneScoreAC} from "../redux/data-reducer";

function Games(props) {
    const gamesData = useSelector(state => state.scoreTableData.gamesData);
    const dispatch = useDispatch();

    /*    const gamesResult = (teamOne, scoreTeamOne, teamTwo, scoreTeamTwo) => {
            if (scoreTeamOne > scoreTeamTwo){

            }
        }*/

    const onScoreChangeTeamOne = (id, scoreTeamOne) => {
        dispatch(updateTeamOneScoreAC(id, scoreTeamOne));
    }


    const setScoreTeamOne = () => {
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
                                     onChange={(e) => {
                                         onScoreChangeTeamOne(item.id, e.target.value)
                                     }}
                                     onSubmit={setScoreTeamOne}
                                     /*value={item.interimScoreTeamOne}*/
                            />
                        }</span>
                        <span> : </span>
                        <span>{(item.scoreTeamTwo !== null)
                            ? `${item.scoreTeamTwo} `
                            : <input className="score" type="number"/>
                        }</span>
                        <span>{` ${item.teamTwo}`}</span>
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
