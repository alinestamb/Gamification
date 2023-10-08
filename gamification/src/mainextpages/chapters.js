// import React from "react";
// import { useParams } from "react-router-dom";
// import sectionsData from "./content";

// chapterData.js

const chapters = [
    {
      title: "CHAPTER 1",
      sections: [
        {
          title: "01. Introduction",
          link: "/helpers/leftsidebar.js",
        },
        {
          title: "02. Background",
          link: "/chapter1/background",
        },
        {
          title: "03. Literature",
          link: "/chapter1/literature",
        },
      ],
      finalQuiz: "Final Quiz 1",
     // image: ch1img, // Define ch1img elsewhere
    },
    {
      title: "CHAPTER 2",
      sections: [
        {
          title: "01. Brainstorming",
          link: "/chapter2/brainstorming",
        },
        {
          title: "02. How might we",
          link: "/chapter2/how-might-we",
        },
        {
          title: "03. Decision-making",
          link: "/chapter2/decision-making",
        },
      ],
      finalQuiz: "Final Quiz 2",
    //  image: ch2Img, // Define ch2Img elsewhere
    },
  ];
  
  export default chapters;

// const SectionContent = () => {
//   const { chapter, section } = useParams();

//   const sectionData = sectionsData.find(
//     (data) =>
//       data.chapter === parseInt(chapter) &&
//       data.title.toLowerCase() === section.toLowerCase()
//   );

//   if (!sectionData) {
//     return <div>Section not found.</div>;
//   }

//   return (
//     <div>
//       <h2>{sectionData.title}</h2>
//       <p>{sectionData.content}</p>
//     </div>
//   );
// };

// export default SectionContent;