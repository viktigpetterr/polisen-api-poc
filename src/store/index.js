import { createStore } from "vuex";

export const store = createStore({
    state () {
        return {
            events: [],
            month: (new Date()).getMonth(),
            event: null
        };
    },
    mutations: {
        selectEvent(state, event) {
            state.event = event;
        }
    },
    actions: {
        fetchEvents(context) {
            let url = "https://polisen.se/api/events?type=Skottlossning%2C%20misst%C3%A4nkt;Skottlossning&DateTime=2021-";
            if (context.state.month.toString().length === 1) {
                url += `0${context.state.month}`;
            } else {
                url += context.state.month;
            }
            fetch(url)
                .then(response => response.json())
                .then(data => context.state.events = data);
        },
    },
});
