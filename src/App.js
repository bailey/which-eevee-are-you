import logo from './logo.svg';
import './App.css';
import ProfilePhoto from "./logo.svg";
import BackgroundImage from "./logo.svg";
import FirstResultImage from "./logo.svg";
import SecondResultImage from "./logo.svg";
import ResponseImage from "./logo.svg";
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import "./styles.css";
import DotRing from "./DotRing";

function App() {
  return (
    <div>
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
              answer: "bud light next™",
              resultID: 1,
            }, 
          ],
        },
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
          description: "congrats",
          resultImageSrc: FirstResultImage,
          imageAttribution: "Jolteon is the Electric-type Lightning Pokémon and one of Eevee's final evolution forms, and can only be obtained through use of a Thunder Stone. Jolteon is strong against Vaporeon, due to the fact that Electric-type Pokémon abilities are super effective against Water-type Pokémon. It is known that Jolteon's highest stat is Speed.",
          resultID: 0,
        },
        {
          title: "vaporean",
          description: "Vaporeon is the Water-Type Pokémon and one of Eevee's final evolution forms, and can only be obtained through use of a Water Stone. It is known as the Bubble Jet Pokémon. When the player evolves his/her Eevee into a Vaporeon, the player can teach Vaporeon the HM Surf. Vaporeon is strong against Flareon since Water-type Pokémon attacks are super effective against Fire-type Pokémon. However, Vaporeon is weak against Jolteon and Leafeon since Water-type Pokémon is weak to Grass and Electric-types. It is known that Vaporeon's highest stat is its HP.",
          resultImageSrc: SecondResultImage,
          resultID: 1,
        },
        {
          title: "umbreon",
          description: "Umbreon is the Dark-type Eeveelution. It is known as the Moonlight Pokémon. Umbreon takes advantage of the friendship and day/night features, as Eevee will only evolve into Umbreon by leveling up with high friendship at night. Umbreon is strong against Espeon because Dark-type attacks are super effective against Psychic Pokémon, however, it is weak against Sylveon due to Dark-types weakness to Fairy-types. Umbreon is so in touch with the moon that Umbreon's rings glow at nighttime. Umbreon's highest stat is Special Defense.",
          resultID: 2,
        },
        {
          title: "espeon",
          description: "Espeon is the Psychic-Morning Sun evolution of Eevee, it is of the Psychic-type, along with Umbreon takes advantage of the Day/Night and friendship features, Eevee will only evolve into Espeon with high friendship in the daytime. It is known that its highest stat is Special Attack. Espeon is weak against Umbreon since Dark-type abilities are super effective against Psychic Pokémon. It is known that Espeon's highest stat is Special Attack.",
          resultID: 3,
        },
        {
          title: "glaceon",
          description: "Glaceon is the Ice-type Fresh Snow Eeveelution. This Pokémon is an Ice-type and an Eevee will evolve into Glaceon if the player character touches an icy rock, then levels the Eevee up next to the icy rock up to Generation VIII. In Generation VIII Eevee evolves into Glaceon with an Ice Stone. Glaceon is strong against Leafeon due to Grass-types beings weak to Ice-types but is weak against Flareon due to Ice-types weakness to Fire-types. Its highest stat is Special Attack, similar to Espeon.",
          resultID: 4,
        },
        {
          title: "leafeon",
          description: "Leafeon is the Grass-type Verdant Eeveelution. An Eevee will only evolve into Leafeon if the player character touches a mossy rock, then levels up the Eevee in one of the sections of grass directly next to it up to Generation VIII. In Generation VIII Eevee evolves into Leafeon with a Leaf Stone. Leafeon is strong against Vaporeon, due to Grass-types being strong against Water-types, but it's weak against both Flareon and Glaceon due to Grass being weak against both Fire and Ice-type Pokémon. Its highest stat is Defense.",
          resultID: 5,
        },
        {
          title: "sylveon",
          description: "Sylveon is a Fairy-type Intertwining Eeveelution new to Generation VI. The way to obtain this new addition to the Eevee family is to use the bonding application in Pokémon X & Y called Pokémon-Amie and Pokémon Sun and Moon called Pokémon Refresh. After getting at least two levels of affection, you level your Eevee up while knowing a Fairy-type move, and it will evolve shortly after. Sylveon is strong against Umbreon due to Dark-types Pokémon being weak to Fairy-types. Sylveon's highest stats is Special Defense, similar to Umbreon.",
          resultID: 6,
        },
      ]}
    />
    <DotRing />
    </div>
  );
}

export default App;
