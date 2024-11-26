export interface Book {
  id: number;
  title: string;
  author: string;
  imgUrl: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: "Full Stack Development with Python",
    author: "Shalabh Aggarwal",
    imgUrl:
      "https://m.media-amazon.com/images/I/51DOsvuT7lL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 2,
    title: "Web Development and Design Foundations",
    author: "Terry Ann Felke-Morris",
    imgUrl:
    "https://webdevfoundations.net/10e/10Cover2.jpg"
  },
  {
    id: 3,
    title: "Introduction to Computer Science in Python",
    author: " Harvard University",
    imgUrl:
      "https://m.media-amazon.com/images/I/61tq5oRWJbL._AC_UF350,350_QL50_.jpg",
  },
 {
    id: 4,
    title: "Data Science Handbook",
    author: "Jake VanderPlas",
    imgUrl:
      "	https://m.media-amazon.com/images/I/7156iCu8YLL._UF894,1000_QL80_.jpg",
  },
  {
    id: 5,
    title: "Responsive Web Design",
    author: " Ethan Marcotte",
    imgUrl:
      "https://content.packt.com/B18550/cover_image.jpg",
  },
  {
    id: 6,
    title: "R for Data Science",
    author: " Hadley Wickham aur Garrett Grolemund",
    imgUrl:
      "https://r4ds.hadley.nz/cover.jpg",
  },
]; 
