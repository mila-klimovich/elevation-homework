import React, { useState } from 'react';
import './Hangman.css';
import RandomWord from "./Words";

import img0 from './img/0.jpg';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';

function Hangman() {

    const [state, setState] = useState({
        mistake: 0,
        guessed: new Set([]),
        answer: RandomWord(),
    });

    const handleGuess = e => {
        let letter = e.target.value;
        setState((prevState) => ({
            ...prevState,
            guessed: prevState.guessed.add(letter),
            mistake: prevState.mistake + (prevState.answer.includes(letter) ? 0 : 1),
        }));
    }

    const guessedWord = () => {
        return state.answer.split("").map(letter => (state.guessed.has(letter) ? letter : " _ "));
    }

    const generateButtons = () => {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
            <button class="btn btn-lg btn-primary m-2"
            key={letter} value={letter} onClick={handleGuess} disabled={state.guessed.has(letter)}>
                {letter}
            </button>
        ));
    }

    const reset = () => {
        setState({
            mistake: 0,
            guessed: new Set([]),
            answer: RandomWord()
        });
    }
    
    const props = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
};

const gameOver = state.mistake >= props.maxWrong; 
const isWinner = guessedWord().join("") === state.answer; 
let gameStat = generateButtons();

if (isWinner) {
    gameStat = "You won!"
}

if (gameOver) {
    gameStat = "You lost!"
}

    return (
        <div className="hangman-container">
            <h1 className="text-center">Hangman</h1>
            <div className="float-end">
                Wrong guesses: {state.mistake} of {props.maxWrong}
            </div>
            <div className="text-center">
                <img src={props.images[state.mistake]} alt="" />
            </div>
            <div className="text-center">
                <p>Guess the word:</p>
                <p>
                    {!gameOver ? guessedWord(): state.answer}
                </p>
                <p>{gameStat}</p>
                <button className='btn btn-info' onClick={reset}>Reset</button>
            </div>
        </div>
    );
}



export default Hangman;
