package team4.slupolyglot.model;

public class ResponseJson 
{
    private String email;
    private String name;
    private String score;
    private String errorCode;
    private String errorMessage;
    
    public ResponseJson(String errorCode,String errorMessage){
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
    }
    public ResponseJson(String errorCode,
    String errorMessage,String email, String name, String score){
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
        this.email = email;
        this.name = name;
        this.score = score;
    }
    public String getErrorCode() {
        return errorCode;
    }
    public String getErrorMessage() {
        return errorMessage;
    }
    public String getEmail() {
        return email;
    }
    public String getName() {
        return name;
    }
    public String getScore() {
        return score;
    }
}