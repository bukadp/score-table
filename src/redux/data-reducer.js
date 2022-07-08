const ADD_TEAM = 'ADD_TEAM';

const initialState = {
    teamData: [
        {
            id: 'Ukraine',
            place: 1,
            team: 'Ukraine',
            played: 0,
            win: 0,
            draw: 0,
            lost: 0,
            points: 0,

        }
    ],

    gamesData : [
        {
            id: 1,
            teamOne: 'Ukraine',
            teamTwo: 'England',
            scoreTeamOne: 3,
            scoreTeamTwo: 0,
        },
        {
            id: 2,
            teamOne: 'Ukraine',
            teamTwo: 'England',
            scoreTeamOne: 3,
            scoreTeamTwo: 0,
        }
    ]
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TEAM:
            return {...state, teamData: [...state.teamData, ...action.payload]};

        default:
            return state;
    }
}

export const addTeam = (payload) => ({type: ADD_TEAM, payload});


export default dataReducer;
