import logo from './logo.svg';
import './App.css';
import ProfilePhoto from "./logo.svg";
import BackgroundImage from "./logo.svg";
import FirstResultImage from "./logo.svg";
import SecondResultImage from "./logo.svg";
import ResponseImage from "./logo.svg";
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import "./styles.css";

function App() {
  return (
    <BuzzFeedQuiz
      title={"which eevee r u"}
      // description={"Your description goes here."}
      // byline={true}
      // bylineAuthor={"Your name"}
      // bylineAuthorLink={"www.yourlink.com"}
      // bylineAuthorLinkOpenInNewTab={true}
      // bylineAuthorTagline={"Your author tagline goes here"}
      // bylineAvatarImageSrc={ProfilePhoto}
      autoScroll={true}
      // onRestart={() => alert("This alert was triggered by the onRestart prop!")}
      // onResult={() => alert("The onResult prop triggered this alert!")}
      onAnswerSelection={(questionIndex, answerIndex, resultID) =>
        console.log({
          questionIndex,
          answerIndex,
          resultID,
        })
      }
      facebookShareButton={true}
      facebookShareLink={"www.yourlink.com"}
      twitterShareButton={true}
      twitterShareLink={"www.yourlink.com"}
      copyShareButton={true}
      copyShareLink={"This text was copied using the copyShareLink prop."}
      questions={[
        {
          question: "how would you describe your sense of style?",
          backgroundColor: "#EFDBB6",
          fontColor: "#fff",
          answerArrangement: "row",
          answers: [
            {
              answer: "punk",
              resultID: 0,
              fontColor: "#633C15",
            },
            {
              answer: "casual",
              resultID: 1,
              fontColor: "#633C15",
            },
            {
              answer: "gothic",
              resultID: 2,
              fontColor: "#633C15",
            },
            {
              answer: "ethereal",
              resultID: 3,
              fontColor: "#633C15",
            },
            {
              answer: "chic",
              resultID: 4,
              fontColor: "#633C15",
            },
            {
              answer: "boho",
              resultID: 5,
              fontColor: "#633C15",
            },
            {
              answer: "girly",
              fontColor: "#633C15",
              resultID: 6,
            }
          ],
        },
        {
          question: "what's your ideal vacation?",
          backgroundColor: "#633C15",
          answerArrangement: "row",
          fontColor: "#fff",
          answers: [
            {
              answer: "a cabin deep in the woods",
              resultID: 5,
            },
            {
              answer: "a fancy hotel",
              resultID: 6,
            },
            {
              answer: "horseback riding and a vineyard",
              resultID: 3,
            },
            {
              answer: "ghost tours in an abandoned city",
              resultID: 2,
            }, 
            {
              answer: "a beach and a book",
              resultID: 1,
            }, 
            {
              answer: "snow sports and a mountain cabin",
              resultID: 4,
            }, 
            {
              answer: "concert-hopping",
              resultID: 0,
            }, 
          ],
        },
        {
          question: "what's beverage of choice?",
          backgroundColor: "#EFDBB6",
          fontColor: "#fff",
          answerArrangement: "row",
          answers: [
            {
              answer: "frozen lemonade",
              resultID: 4,
            },
            {
              answer: "herbal tea",
              resultID: 5,
            },
            {
              answer: "a fancy cocktail",
              resultID: 6,
            },
            {
              answer: "boba tea",
              resultID: 3,
            }, 
            {
              answer: "a glass of red",
              resultID: 2,
            }, 
            {
              answer: "an energy drink",
              resultID: 0,
            }, 
            {
              answer: "water",
              resultID: 1,
            }, 
          ],
        }
      //   {
      //     question: "Here is some overlapping image text",
      //     questionRelativeToImage: "overlap",
      //     imageAttribution: "Question image attribution text goes here",
      //     answerArrangement: "tile",
      //     backgroundImageSrc: BackgroundImage,
      //     answers: [
      //       {
      //         answer: "This answer has a background photo",
      //         resultID: 0,
      //         backgroundImageSrc: BackgroundImage,
      //         imageAttribution: "Answer photo attribution text goes here",
      //       },
      //       {
      //         answer: "Not this one, though",
      //         resultID: 1,
      //         backgroundColor: "rgb(238,243,247)",
      //         fontColor: "rgb(53,51,48)",
      //       },
      //       {
      //         answer: "Not this one, either",
      //         resultID: 2,
      //         backgroundColor: "rgb(238,243,247)",
      //         fontColor: "rgb(53,51,48)",
      //       },
      //     ],
      //   },
      //   {
      //     question: "Here is some adjacent image text",
      //     questionRelativeToImage: "adjacent",
      //     answerArrangement: "row",
      //     backgroundImageSrc: BackgroundImage,
      //     answers: [
      //       {
      //         answer: "Answer one",
      //         resultID: 0,
      //       },
      //       {
      //         answer: "Answer two",
      //         resultID: 1,
      //       },
      //       {
      //         answer: "Answer three",
      //         resultID: 2,
      //       },
      //     ],
      //   },
      //   {
      //     question: "Answers can also trigger a callback function",
      //     answers: [
      //       {
      //         answer: "This one does not trigger a function",
      //         resultID: 0,
      //       },
      //       {
      //         answer: "Click for answer function",
      //         onAnswerSelection: (questionIndex, answerIndex, resultID) =>
      //           alert("This alert is caused by an answer selection!"),
      //         resultID: 1,
      //       },
      //     ],
      //   },
      ]}
      results={[
        {
          title: "jolteon",
          description: "Your first result description goes here",
          resultImageSrc: FirstResultImage,
          imageAttribution: "congrats",
          resultID: 0,
        },
        {
          title: "vaporean",
          description: "congrats",
          resultImageSrc: SecondResultImage,
          resultID: 1,
        },
        {
          title: "umbreon",
          description: "congrats",
          resultID: 2,
        },
        {
          title: "espeon",
          description: "congrats",
          resultID: 3,
        },
        {
          title: "glaceon",
          description: "congrats",
          resultID: 4,
        },
        {
          title: "leafeon",
          description: "congrats",
          resultID: 5,
        },
        {
          title: "sylveon",
          description: "congrats",
          resultID: 6,
        },
      ]}
    />
  );
}

export default App;
