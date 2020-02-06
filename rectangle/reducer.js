const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    switch (type) {
        case 'INCREASE_WIDTH':
            return {
                ...state,
                width: state.width + 10,
            };
        case 'INCREASE_HEIGHT':
            return {
                ...state,
                height: state.height + 10
            };
        case 'RED_COLOR':
            return {
                ...state,
                color: "#FF0000"
            };
        case 'BLUE_COLOR':
            return {
                ...state,
                color: "#0000ff"
            }
            default:
                return state
        }
    // ACTION 1 - Increment height by 10

    // ACTION 2 - Increment width by 10

    // ACTION 3 - Change the color

    return state;
}