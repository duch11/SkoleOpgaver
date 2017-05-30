public class Book {
    String title;
    String author;
    int id;
    public Book(String title, String author, int id){
        this.title = title;
        this.author = author;
        this.id = id;
    }

    public String toString(){
        return this.title +" "+ this.author + " " + this.id;
    }
    
}