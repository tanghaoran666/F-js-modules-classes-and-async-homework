// export const getPoetry = () => {
//   const poem = [];
//   return fetch("https://v1.jinrishici.com/all.json", {
//     method: "GET",
//   })
//     .then((data) => data.json())
//     .then((data) => {
//       poem.push(data.origin);
//       poem.push(data.author);
//       poem.push(data.content);
//       return poem;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
export const getPoetry = async () => {
  try {
    const promise = await fetch("https://v1.jinrishici.com/all.json");
    const data = await promise.json();
    const poem = [];
    poem.push(data.origin);
    poem.push(data.author);
    poem.push(data.content);
    return poem;
  } catch (error) {
    console.log(error);
  }
};
