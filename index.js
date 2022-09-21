const Book = {
    init(title, author, pageCount, hasRead){
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.hasRead = hasRead
    }
}

const Books = [
    (Object.create(Book)).init(`All Quiet on the Western Front`, `Erich Maria Remarque`, 304, true),
    (Object.create(Book)).init(`War and Peace`, `Leo Tolstoy`, 1152, false),
    (Object.create(Book)).init(`Eloquent Javascript`, `Marjin Haverbeke`, 472, false),
]