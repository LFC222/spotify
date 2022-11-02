export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    //token:"BQBP96WpfJYseJwAfBLgV0ufIiiGc4Q6CKYxiF6pNZ6S9qvXmz55ZihKRd3Gh_ubetyrKA1KWKywkdGgRFbW31YbC4rXFJ1SgXhsOAb9GlquXeaL2U_qBuGO5VDbSBqMVF64U9Eyfvb_Uz5kbImc784k4zT9KDkWbZw0xGHKwJaiEPqrlIbvPBFRAgh2w7xlnw7-zWkGn1p3pLTfX-vo",
    
  };

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "SET_USER":
          return {
            ...state,
            user: action.user,
          };

          case "SET_TOKEN" :
            return {
                ...state,
                token: action.token,
            };

            case "SET_PLAYLISTS":
              return {
                ...state,
                playlists:action.playlists,
              };

          default:
            return state;
    }
}

export default reducer;