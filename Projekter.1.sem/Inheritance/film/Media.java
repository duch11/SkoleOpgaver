package film;
public abstract class Media {
    protected String title;
    protected int length;
    public Media(String t, int l){
        title = t;
        length = l;
    }

    public void play(){
        System.out.println(title + " " + length);
    }
}