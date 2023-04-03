# cc-sentence-generator  

## Random Sentence Generator  

A Script in JavaScript to generate sentences with random parts of subjects, actions an hows.  

## Parts of Program  

1. function getRandomNumber(num)  

This function only generate a random number from 0 to num - 1  
The number will be used to get an element from arrays  
The num parameter will be the length of the array  

2. arrays with parts of sentence  

There are 3 arrays with lists of subjects, actions and hows  
Using the getRandomNumber(num) function we'll choose a random element to form the sentence  

3. main function generateRandomSentence()  

This function generate random indexes for each array passing theirs lengths  
Then gets an element from the arrays using the selected index  
Finally it creates the sentence in a literal string using the three choices  

4. calling main function  

On script's execution three console calls are made to log the formed sentence in the console's terminal  
