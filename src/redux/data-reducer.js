const ADD_TEAM = 'ADD_TEAM';
const SET_GAMES = 'SET_GAMES';
const SET_PLAYED_TEAMS = 'SET_PLAYED_TEAMS';
const UPDATE_TEAM_ONE_SCORE = 'UPDATE_TEAM_ONE_SCORE';
const UPDATE_TEAM_TWO_SCORE = 'UPDATE_TEAM_TWO_SCORE';
const SET_TEAM_ONE_SCORE = 'SET_TEAM_ONE_SCORE';
const SET_TEAM_TWO_SCORE = 'SET_TEAM_TWO_SCORE';
const SET_TEAM_WIN = 'SET_TEAM_WIN';
const SET_TEAM_LOSE = 'SET_TEAM_LOSE';
const SET_DRAW_RESULT = 'SET_DRAW_RESULT'

const initialState = {
    teamData: [
/*        {
            place: 1,
            team: 'England',
            played: 0,
            win: 0,
            draw: 0,
            lost: 0,
            points: 0,
            playedTeams: [],
        }*/
    ],

    gamesData: [
/*        {
            id: 1,
            teamOne: 'Ukraine',
            teamTwo: 'England',
            scoreTeamOne: 3,
            scoreTeamTwo: 0,
            interimScoreTeamOne: null,
            interimScoreTeamTwo: null,
        },
        {
            id: 2,
            teamOne: 'Ukraine',
            teamTwo: 'NEW',
            scoreTeamOne: 3,
            scoreTeamTwo: 0,
            interimScoreTeamOne: null,
            interimScoreTeamTwo: null,
        }*/
    ]
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TEAM:
            return {...state, teamData: [...state.teamData, action.payload]};
        case SET_GAMES:
            return {...state, gamesData: [...state.gamesData, action.payload]};

        case UPDATE_TEAM_ONE_SCORE:
            return {
                ...state,
                gamesData: state.gamesData
                    .map((game) => {
                        if (game.id === action.id) {
                            game.interimScoreTeamOne = +(action.score)
                        }
                        return game
                    })
            };
        case UPDATE_TEAM_TWO_SCORE:
            return {
                ...state,
                gamesData: state.gamesData
                    .map((game) => {
                        if (game.id === action.id) {
                            game.interimScoreTeamTwo = +(action.score)
                        }
                        return game
                    })
            };


        case SET_TEAM_ONE_SCORE:
            return {
                ...state,
                gamesData: state.gamesData
                    .map((game) => {
                        if (game.id === action.payload) {
                            game.scoreTeamOne = game.interimScoreTeamOne
                        }
                        return game
                    })
            };
        case SET_TEAM_TWO_SCORE:
            return {
                ...state,
                gamesData: state.gamesData
                    .map((game) => {
                        if (game.id === action.payload) {
                            game.scoreTeamTwo = game.interimScoreTeamTwo
                        }
                        return game
                    })
            };

        case SET_PLAYED_TEAMS:
            return {
                ...state,
                teamData: state.teamData.map(object => {
                    object.playedTeams = object.playedTeams.concat([action.payload]);
                    return object
                })

            };

        case SET_TEAM_WIN:
            return {
                ...state,
                teamData: state.teamData
                    .map((team) => {
                        if (team.team === action.payload) {
                            team.played = team.played + 1
                            team.win = team.win + 1
                            team.points = team.points + 3
                        }
                        return team
                    })
            };


        case SET_TEAM_LOSE:
            return {
                ...state,
                teamData: state.teamData
                    .map((team) => {
                        if (team.team === action.payload) {
                            team.played = team.played + 1
                            team.lost = team.lost + 1
                        }
                        return team
                    })
            };
            case SET_DRAW_RESULT:
            return {
                ...state,
                teamData: state.teamData
                    .map((team) => {
                        if (team.team === action.payload) {
                            team.played = team.played + 1
                            team.draw = team.draw + 1
                            team.points = team.points + 1
                        }
                        return team
                    })
            };

        default:
            return state;
    }
}

export const addTeamAC = (payload) => ({type: ADD_TEAM, payload});
export const setGameAC = (payload) => ({type: SET_GAMES, payload});
export const setPlayedTeamsAC = (payload) => ({type: SET_PLAYED_TEAMS, payload});

export const updateTeamOneScoreAC = (id, score) => ({
    type: UPDATE_TEAM_ONE_SCORE,
    id,
    score
});

export const updateTeamTwoScoreAC = (id, score) => ({
    type: UPDATE_TEAM_TWO_SCORE,
    id,
    score
});

export const setTeamOneScoreAC = (payload) => ({type: SET_TEAM_ONE_SCORE, payload});
export const setTeamTwoScoreAC = (payload) => ({type: SET_TEAM_TWO_SCORE, payload});

export const setTeamWin = (payload) => ({type: SET_TEAM_WIN, payload});
export const setTeamLose = (payload) => ({type: SET_TEAM_LOSE, payload});
export const drawResult = (payload) => ({type: SET_DRAW_RESULT, payload});



export default dataReducer;
