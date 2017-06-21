public class Head {
    public static void main(String[] args) {
        UserInterface ui = new UserInterface();
        Catalog catalog = new Catalog();
        Library lib = new Library(catalog);
        ui.addBooks(lib);
    }
}