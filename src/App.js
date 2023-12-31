import React, { useState } from "react"
import "./App.css"
import butcherPigImage from "./assets/butcherPig.jpeg"

const App = () => {
  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState(
    "apple through queen squeal fry fluent"
  )
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {
    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)
      //Sets variable firstVowelIndex to -1 so there's a possibility of no vowel
      let firstVowelIndex = -1
      //For loop that checks the length of the input and compares to vowel given
      for (let i = 0; i < eachWord.length; i++) {
        if (vowelsArray.includes(eachWord[i])) {
          firstVowelIndex = i
          //break out of loop
          break
        }
      }
      //if vowel is at the 0 index
      //put way at end
      if (firstVowelIndex === 0) {
        eachWord = eachWord + "way"
      }
      //if vowel is not at 0 index
      else if (firstVowelIndex !== 0) 
      {
        //if the vowel index has a u, and the q is before it, place it at the end with "ay"
        if (eachWord.charAt(firstVowelIndex -1) === "q" && eachWord.charAt(firstVowelIndex) === "u")
        eachWord = eachWord.slice(firstVowelIndex + 1) + eachWord.slice(0, firstVowelIndex +1 ) + "ay"
        //if 
        else
        {
        eachWord =  eachWord.slice(firstVowelIndex) + eachWord.slice(0, firstVowelIndex) + "ay"
        }
      }

      if (firstVowelIndex === -1)
      {
       eachWord = eachWord.slice(eachWord.indexOf("y")) + eachWord.slice(0, eachWord.indexOf("y") ) + "ay"
      }

      

    //
    //fluent
    //uentflay
    //through
    //oughthray
    //fry
    //01234
    //yfray
    //squeal
    //012345
      
      // const ayFunction = (str1, str2) => {

      //    const pigLatin = (arr1, arr2) => {       
      //         if (arr2.includes(arr1[0])){
      //           return arr1 + "way"
      //         }
      //         else
      //           return arr1   
      //       }
      //       return pigLatin(arrayOfUserInput, vowelsArray)
      //     }
      //    console.log(ayFunction(arrayOfUserInput, vowelsArray))
        
      // ACTION ITEM: your Pig Latin logic goes here!

      // ACTION ITEM: this return will be the output of your Pig Latin'd code
    
      return eachWord
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="drawing of pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2023 | Coded by: Thomas & Brandon</footer>
    </div>
  )
}

export default App
