const QuestionData = [
  {
    question: " What is JSX in React?",
    options: [
      "JavaScript Extension",
      "XML Syntax",
      "JSON Exchange",
      "JavaScript XML",
    ],
    answer: "JavaScript XML",
  },

  {
    question:
      " In React, what function is responsible for rendering a component??",
    options: ["render()", " display()", " show() ", "update()"],
    answer: "render()",
  },

  {
    question: "What is the purpose of the useState hook in React?",
    options: [
      "To declare a variable",
      "To handle HTTP requests",
      "To manage component state",
      "To create a function component",
    ],
    answer: "To manage component state",
  },

  {
    question:
      "Which lifecycle method is invoked after a component has been rendered for the first time?",
    options: [
      "componentDidMount()",
      "componentWillMount()",
      "componentDidUpdate()",
      "componentWillUpdate()",
    ],
    answer: "componentDidMount()",
  },
];
export default QuestionData;

console.log(QuestionData);
