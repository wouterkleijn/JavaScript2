const bookNames = [
  //'harry_potter_chamber_of_secrets',
  'congo',
  //'the_bridge',
  //'amsterdam',
  'the_future_of_freedom',
  //'between_the_world_and_me',
];


const bookData = {
  "the_future_of_freedom": {
    title: "The Future of Freedom",
    language: "English",
    author: "Fareed Zakaria",
  },
  "congo": {
    title: "Congo",
    language: "English",
    author: "David van Reybrouck",
  }
};

for (const i in bookNames) {
  const book = bookData[i];
  const ul = document.getElementById("bookTitles");
  const li = document.createElement('li');
  li.innerHTML = book.title;
  ul.appendChild(li);
}
