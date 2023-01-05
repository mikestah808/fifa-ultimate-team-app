const initialState = {
  entities: [], // array of players
  status: "idle", // loading state
};

function playersReducer(state = initialState, action) {
  switch (action.type) {
    // sync actions
    case "players/playersAdded":
      return {
        ...state,
        entities: [...state.entities, action.payload],
      };
    case "players/playersRemoved":
      return {
        ...state,
        entities: state.entities.filter((player) => player.id !== action.payload),
      };
    case "players/playerUpdated":
      return {
        ...state,
        entities: state.entities.map((player) =>
          player.id === action.payload.id ? action.payload : player
        ),
      };

    // async actions
    case "players/fetchPlayers/pending":
      return {
        ...state,
        status: "loading",
      };
    case "players/fetchPlayers/fulfilled":
      return {
        ...state,
        entities: action.payload,
        status: "idle",
      };

    default:
      return state;
  }
}

export default playersReducer;