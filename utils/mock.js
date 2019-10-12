/*
  If data from each of these fields where coming from 
  a different service. 
  The fentching of them would basically be handled the
  same way by the resolver.
*/

module.exports = {

  authors: [{
    id: "1",
    name: 'J.K. Rowling',
  }, {
    id: "2",
    name: 'Michael Crichton',
  }],

  books: [{
    id: "1",
    authorId: 1,
    title: 'Harry Potter and the Chamber of Secrets',
  }, {
    id: "2",
    authorId: 1,
    title: 'Fantastic Beasts and Where to Find Them',
  }, {
    id: "3",
    authorId: 1,
    title: 'The Casual Vacancy',
  }, {
    id: "4",
    authorId: 2,
    title: 'Jurasic Park',
  }, {
    id: "5",
    authorId: 2,
    title: 'The 13th Warrior',
  }],

  reviews: [{
    bookId: "1",
    review: 4.4
  }, {
    bookId: "2",
    review: 4
  }, {
    bookId: "3",
    review: 3.3
  }, {
    bookId: "4",
    review: 4
  }, {
    bookId: "5",
    review: 3.7
  }]
}