const fdataReducer = (state = [], action) => {
    if (action.type === "UPDATE_FDATA") {
        return action.payload;
    }
    return state;
};

export default fdataReducer;