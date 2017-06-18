package film;
public class Cd extends Media{
    String singer;
    public Cd(String tit, int len, String singer){
        super(tit, len);
        this.singer = singer;
    }
    public void player(){
        //kan læse begge, da de kun er protected ikke private
        System.out.println(length);
        System.out.println(title);
    }

    public void setSomethingUsefull(){
        length = 3;
        title = "Not a good CD tho";
    }
}