
/**
* The core MultipleSprites game file.
* 
* This file is only used to initalise (start-up) the main Kiwi Game 
* and add all of the relevant states to that Game.
*
*/

//Initialise the Kiwi Game. 

var gameOptions = {
	renderer: Kiwi.RENDERER_WEBGL, 
	width: 400,
	height: 200
}

var game = new Kiwi.Game('content', 'MultipleSprites', null, gameOptions);

//Add all the States we are going to use.
game.states.addState(MultipleSprites.Loading);
game.states.addState(MultipleSprites.Intro);
game.states.addState(MultipleSprites.Play);

game.states.switchState("Loading");