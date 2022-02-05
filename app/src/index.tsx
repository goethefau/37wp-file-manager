import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configure, spy} from 'mobx';

spy((ev) => {
    if (ev.type.includes("action")) {
        console.log(ev)
    }
})

setTimeout(() => {
    configure({
        reactionScheduler: (f) => {
            setTimeout(f,);
        },
    });
},);

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
