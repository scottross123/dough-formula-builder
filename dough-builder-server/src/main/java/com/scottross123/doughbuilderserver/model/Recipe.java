public class Recipe {

    @Id
    private String id;

    private String title;
    private String description;
    private String author;
    private List<String> tags;
    private Yields yields;
    private Process process;
    private formula Formula;

}