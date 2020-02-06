const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const sortByLikesButton = document.getElementById('sortLikes');
const sortByRetweetsButton = document.getElementById('sortRetweets');
const sortByRepliesButton = document.getElementById('sortReplies');

sortByLikesButton.addEventListener('click', (e) => {
    dispatch({
        type: 'SORT_BY_LIKES'
    });
})

sortByRetweetsButton.addEventListener('click', (e) => {
    dispatch({
        type: 'SORT_BY_RETWEETS'
    });
})

sortByRepliesButton.addEventListener('click', (e) => {
    dispatch({
        type: 'SORT_BY_REPLIES'
    });
})

