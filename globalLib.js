/*
* Below Is the defination of game state thena can be used in a game
*There are few types of game states defined
*Use them as you want in the game
*/

var gameState=null;
 
//gameState types below
var SERVE=0;
var PLAY=1;
var RUN=2;
var SHOW=3;
var HIDE=4;
var START=5;
var STOP=6;
var END=7;
var PAUSE=8;
var LAUNCH=9;
var FLY=10;
var LAND=11;

/*
 * The isTouching function will enable is to check whether two objects are touching or not.
 * This is only used for comparison between two project
 * This function enables us to do or make various functions and tasks
 * We are using predefined function inherited inside our own function as the following code is mot
 enabling us to effeciently code
 
 if(
 object1.x-object2.x<object2.width/2+object1.width/2&&
 object2.x-object1.x<object1.width/2+object2.width/2&&
 object1.x-object2.x<object2.height/2+object1.height/2&&
 object2.x-object1.x<object1.height/2+object2.height/2 ){}
 */

function isTouching(object1,object2){

    if(object1.isTouching(object2)){

        return true;

       }else{
        return false;
       }
}
