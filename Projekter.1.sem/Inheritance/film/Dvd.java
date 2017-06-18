package film;
public class Dvd extends Media{

    String language;
    public Dvd(String tit, int len, String lang){
        super(tit, len);
        this.language = lang;
    }
}