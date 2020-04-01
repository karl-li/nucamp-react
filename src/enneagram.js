const EnneagramQuestions = [
    {
        id: 1,
        question: "I love to take care of people and I'm good at it.",
        displayValues: ["no", "partly", "yes"],
        selectedValue: "no",
        type: 2
    },
    {
        id: 2,
        question: "Success, prestige and recognition really matter to me.",
        displayValues: ["no", "partly", "yes"],
        selectedValue: "yes",
        type: 3
    },

]

no = 0
partly = .34
yes = 1

on submit
convert selected values to their numeric equivalent
sum all the numeric equivalents

inputs:
[
    {
        id: 1,
        question: "I love to take care of people and I'm good at it.",
        displayValues: ["no", "partly", "yes"],
        selectedValue: "no",
        type: 2
    },
    {
        id: 2,
        question: "Success, prestige and recognition really matter to me.",
        displayValues: ["no", "partly", "yes"],
        selectedValue: "yes",
        type: 3
    },

]

//this is an object that contains all the type sums
//the key is the type
//the value is the sum of the selected values

//test driven dev
//come up with examples of inputs and outputs in order to help you write the process

output = {
    2: 0,
    3: 1
}