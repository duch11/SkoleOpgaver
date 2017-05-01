import java.util.ArrayList;
public class Catalog {
    ArrayList<Book> bookCatalog = new ArrayList<Book>();

    public Boolean insertBook(Book book){
        bookCatalog.add(book);
        return true;
    }
}