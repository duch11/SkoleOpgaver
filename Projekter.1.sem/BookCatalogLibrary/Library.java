public class Library {
    Catalog catalog;
    public Library(Catalog catalog){
        this.catalog = catalog;
    }

    public Book addBook(String title, String author, int id){
        Book theBook = new Book(title, author, id);
        catalog.insertBook(theBook);
        return theBook;
    }
}