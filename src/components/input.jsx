import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTeamAC, setGameAC, setPlayedTeamsAC} from "../redux/data-reducer";

function Input() {
    const [team, setTeam] = useState('')
    const teamData = useSelector(state => state.scoreTableData.teamData);
    const gamesData = useSelector(state => state.scoreTableData.gamesData);

    const dispatch = useDispatch();

    const addTeam = (e) => {
        e.preventDefault();
        const newTeam = {
            place: (teamData.length) + 1,
            team: team,
            played: 0,
            win: 0,
            draw: 0,
            lost: 0,
            points: 0,
            playedTeams: [],
        }
        dispatch(addTeamAC(newTeam));

        setTeam ('');
    }

    useEffect(() => {
        setGames()
    }, [teamData])

    const setGames = () => {
        for (let i = 0; i < teamData.length; i++) {
            for (let j = 0; j < teamData.length; j++) {
                if (teamData[i].team !== teamData[j].team
                    && !teamData[i].playedTeams.includes(teamData[j].team)
                    ) {
                    let newGame = {
                        id: teamData[i].team + teamData[j].team,
                        teamOne: teamData[i].team,
                        teamTwo: teamData[j].team,
                        interimScoreTeamOne: null,
                        interimScoreTeamTwo: null,
                        scoreTeamOne: null,
                        scoreTeamTwo: null,
                    }
                    dispatch(setGameAC(newGame));
                    dispatch(setPlayedTeamsAC(teamData[i].team));
                    dispatch(setPlayedTeamsAC(teamData[j].team));
                }

            }
        }
    }

    return (
        <div>
            <form className="add-team" onSubmit={addTeam}>
                <input
                    className="name"
                    type="text"
                    placeholder="New team"
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default Input;
