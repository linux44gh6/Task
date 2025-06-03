const books=[
    {
        title:"MelBourne",
        Author:"Milon Hossain",
        year:2000

    }
]

const FindBooks=(books)=>{
   return books.map(book=>book.title)
}

const title=FindBooks(books)
console.log(title);