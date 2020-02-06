const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const cardOne = document.getElementById('card1Button');
const cardTwo = document.getElementById('card2Button');

cardOne.addEventListener('click', (e) => {
    e.preventDefault()
    dispatch({
        type: 'RANDOM_CARD'
    })

})

cardTwo.addEventListener('click', (e) => {
    e.preventDefault()
    dispatch({
        type: 'RANDOM_CARD'
    })

})