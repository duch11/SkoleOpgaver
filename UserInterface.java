import java.util.Scanner;
public class UserInterface {

    public void addBooks(Library lib) {
        Boolean moreBooks = true;
        while(moreBooks == true){

            System.out.println("Adding books!");
            Scanner scan = new Scanner(System.in);
            System.out.println("Title:");
            String title = scan.nextLine();
            System.out.print("Author:");
            String author = scan.nextLine();
            System.out.print("ID:");
            int id = scan.nextInt();
            System.out.println(lib.addBook(title, author, id));
            System.out.println("More books?");
            scan.nextLine();
            if(scan.nextLine().equals("no")){
                moreBooks = false;
            }
        }
    }
}
