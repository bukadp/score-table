const ADD_TEAM = 'ADD_TEAM';
const SET_GAMES = 'SET_GAMES';
const SET_PLAYED_TEAMS = 'SET_PLAYED_TEAMS';
const UPDATE_TEAM_ONE_SCORE = 'UPDATE_TEAM_ONE_SCORE';


const initialState = {
    teamData: [
        {
            place: 1,
            team: 'England',
            played: 0,
            win: 0,
            draw: 0,
            lost: 0,
            points: 0,
            playedTeams: [],
        }
    ],

    gamesData: [
        {
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
        }
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
                            if (game.id === action.id){
                                game.interimScoreTeamOne = +(action.score)
                            }
                            return game
                        })
            };

        case SET_PLAYED_TEAMS:
            return {
                ...state,
                    teamData: state.teamData.map(object => {
                        object.playedTeams =  object.playedTeams.concat([action.payload]);
                        return object
                    })

            };

                        /*state.teamData.map(object => {
                            object.playedTeams.concat([action.payload]);
                        })*/


                        //state.teamData.playedTeams.concat(action.payload)


                        /*                        [

                                                ...state.teamData.playedTeams,
                                                action.payload]*/



        default:
            return state;
    }
}

export const addTeamAC = (payload) => ({type: ADD_TEAM, payload});
export const setTeamAC = (payload) => ({type: SET_GAMES, payload});
export const setPlayedTeamsAC = (payload) => ({type: SET_PLAYED_TEAMS, payload});

export const updateTeamOneScoreAC = (id, score) => ({
    type: UPDATE_TEAM_ONE_SCORE,
    id,
    score
});

export default dataReducer;
