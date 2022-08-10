// TODO: Import API FILES

import * as BooksAPI from "../BooksAPI";


/**
* @description Get all books
* @return the Books data after mutated
*/

export const  getAllBooks = async () => { //TODO: Get all my cart books
    //TODO: Calling The API  And Handeling The Data
    let data = await BooksAPI.getAll();
    let booksData = [];
    data.forEach((book) => {
      booksData.push({
        title: book.title,
        id: book.id,
        author: book.authors,
        url: book.imageLinks.thumbnail,
        status: book.shelf,
      });
    });
    return booksData
  };





/**
* @description Get search result
* @param {string} query - The title of the book
* @return the search data after mutated
*/


  export const  getAllSearch = async (query) => {
    //TODO: Handel The Query Error 
    try {
      //TODO: Calling The API  And Handeling The Data 
      let data = await BooksAPI.search(query);
      let all = await getAllBooks()
      let booksData = [] //TODO: New Array to mutate the data 
       data.map(book => { //TODO: looping through all the searching query
        let idBook = book.id
        const status = all.find(x => x.id === idBook) //TODO: find the book id in the query search

        if(status){ //TODO: check if the book is already exsist in my cart to mutate the shelf key with the status value
          
          book.status = status.status
        }    
        booksData.push({  //TODO: Pushing the new mutated array to the UI
          title: book.title,
          id: book.id,
          author: book.authors,
          url: book.imageLinks.thumbnail,
          status: book.status,
        })
       })
      return booksData
      } 
     catch (error) {
       return []
      }

  };





