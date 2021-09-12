package stepdefenition;

import APIComp.RestClient;
import com.sun.org.slf4j.internal.Logger;
import com.sun.org.slf4j.internal.LoggerFactory;
import cucumber.api.java.en.Given;
import java.nio.file.Files;
import java.nio.file.Paths;


public class APIGlue {

    private static final Logger LOGGER= LoggerFactory.getLogger(RestClient.class);

    @Given("^I provide \"([^\"]*)\" for GET method and get the response back$")
    public void i_provide_for_GET_method(String data)  {
        try {
            String response = RestClient.sendGETViaHttp(data);
            System.out.println(response);
            if ((response.equals(null))) throw new AssertionError();
        }catch(Exception e){
            System.out.println();
        }
    }

    @Given("^GET all the list of posts available$")
    public void get_all_the_list_of_posts_available() {
        try {
            String response = RestClient.sendGETViaHttp("");
            System.out.println(response);
            if ((response.equals(null))) throw new AssertionError();
        } catch (Exception e) {
            System.out.println();
        }
    }

    @Given("^Pass on the \"([^\"]*)\" file to POST Method and get the response back$")
    public void pass_on_the_file_to_POST_Method_and_get_the_response_back(String data) {
        try{
            String json = new String(Files.readAllBytes(Paths.get(data)));
            String response = RestClient.sendPOSTViaHTTP(json);
            System.out.println(response);
        }catch(Exception e){
            System.out.println(e.toString());
        }

    }




}