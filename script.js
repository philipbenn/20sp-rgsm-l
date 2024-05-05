"use strict";

const question1 = {
  parent: null,
  question: "Er det et pattedyr?",
  yes: "question2",
  no: "question3",
};

const question2 = {
  parent: "question1",
  question: "Har det striber?",
  yes: "question4",
  no: "question5",
};

const question3 = {
  parent: "question1",
  question: "Er det en fugl?",
  yes: "question8",
  no: "question9",
};

const question4 = {
  parent: "question2",
  question: "Er det en zebra?",
  yes: "question1",
  no: "question7",
};

const question5 = {
  parent: "question2",
  question: "Er det en løve?",
  yes: "question1",
  no: "question6",
};

const question8 = {
  parent: "question3",
  question: "Kan den flyve?",
  yes: "question10",
  no: "question11",
};

const question9 = {
  parent: "question3",
  question: "Er det en gila-øgle?",
  yes: "question1",
  no: "question14",
};

const question10 = {
  parent: "question8",
  question: "Er det en ørn?",
  yes: "question1",
  no: "question12",
};

const question11 = {
  parent: "question8",
  question: "Er det en pingvin?",
  yes: "question1",
  no: "question13",
};

const question13 = {
  parent: "question11",
  question: "Er det en fugl?",
  yes: "question1",
  no: "question14",
};

const question14 = {
  parent: "question9",
  question: "Hvilket dyr var der tale om?",
  yes: null,
  no: null,
};

const question15 = {
  parent: "question14",
  question:
    "Hvilket spørgsmål kunne stilles efter det sidste, for at identificere dyret korrekt?",
  yes: null,
  no: null,
};

let currentNode;

window.addEventListener("load", start);

function start() {
  console.log("Js running");
  currentNode = question1;
  showQuestion(currentNode);
}

function handleChoice(nextNode) {
    currentNode = questions[nextNode];
    showQuestion(currentNode);
  
    if (currentNode.parent === null) {
      const html = `
            <div class="result">
                <h2>You won!</h2>
                <button class="restart" onclick="restart()">Restart</button>
            </div>`;
      document.querySelector("main").innerHTML = html;
  
      printTree(currentNode);
    }
  }

function restart() {
  currentNode = question1;
  showQuestion(currentNode);
}

const questions = {
  question1,
  question2,
  question3,
  question4,
  question5,
  question8,
  question9,
  question10,
  question11,
  question13,
  question14,
  question15,
};

function showQuestion(question) {
  const html = `
    <div class="question">
        <h2>${question.question}</h2>
        <div class="choices">
            <button onclick="handleChoice('${question.yes}')">Ja</button>
            <button onclick="handleChoice('${question.no}')">Nej</button>
        </div>
    </div>`;

  document.querySelector("main").innerHTML = html;
}

function printTree(node) {
  let path = [];
  let current = node;

  while (current) {
    path.unshift(current);
    current = current.parent;
  }

  console.log("Your path:");
  path.forEach((node, index) => {
    console.log(`  ${index === 0 ? "Start" : ""} -> ${node.question}`);
  });
}