var readlinesync=require("readline-sync");
var user=readlinesync.question("Please enter your name")
console.log("***********HEY",user,"๐","WELCOME TO MY END GAME***********")
let question_list=["What is my name?๐","What is my age? ๐","Where am i living currently?๐","What is my favourit place๐?","Who is my favorite actor?๐","Which is my hobies๐?","Which is my favorite Game๐","Which is my favourit song?๐"]
console.log("-: THIS IS YOUR QUESTION :-")
answer_list=["Somi","22","Bangalore","Paris","My father","Travelling","Chess","Dilbar"]
let score=0
let index=0
let final_score=8
while (index<question_list.length){
console.log(index+1,question_list[index])
var input=require("readline-sync")
let answer=input.question("Enter the correct answer:-")
    if (answer===answer_list[index]){
        console.log("congrats!๐ฅณ your answer is correct")
        score+=1
        console.log("Your Score",score)
        console.log("Highest Score",final_score)
        console.log("**************")
    }
    else{
        console.log("oops! your answer is wrongv๐")
        console.log("Your Score",score)
        console.log("Highest Score",final_score)
        console.log("**************")
    }
index++
}
if (final_score===score){
    console.log("**** WOW YOU ARE THE WINNER OF THIS GAME ๐ฅณ๐ฅณ๐ฅณ****")
}
else{
    console.log("****SORRY YOU ARE THE LOOSER OF THIS GAME๐****")
}
console.log("**** THANKS FOR PLAYING THIS GAME๐๐ ****")