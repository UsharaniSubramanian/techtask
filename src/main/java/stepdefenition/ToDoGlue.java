package stepdefenition;

import UIComp.TodoPage;
import com.sun.org.slf4j.internal.Logger;
import com.sun.org.slf4j.internal.LoggerFactory;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import utils.Utils;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;


public class ToDoGlue {
    static WebDriver driver = null;
    public static final Logger LOGGER = LoggerFactory.getLogger(ToDoGlue.class);
    static TodoPage todoPage=null;

    @Given("^I login to todomvc$")
    public void i_login_to_todomvc()  {
        try{
            System.setProperty("webdriver.chrome.driver", "browser/chromedriver.exe");
            driver=new ChromeDriver();
            driver.get(Utils.BASE_URL);
            todoPage=new TodoPage(driver);
        }
        catch (Exception e){
            LOGGER.error("Error in opening Chrome browser");
            fail("Exception Caught:" + e.toString());
        }
    }

    @When("^I provide \"([^\"]*)\" as below$")
    public void i_provide_as_below(String todoName) {
        try {
            todoPage.enterTodoName(todoName);
        }catch(Exception e){
            LOGGER.error("Error while creating the ToDo Name:"+todoName);
            fail("Exception Caught:" + e.toString());
        }
    }

    @Then("^I assert \"([^\"]*)\" got created and listed$")
    public void i_assert_got_created_and_listed(String todoName) {
        try {
            String labelPresent = todoPage.validateToDoName(todoName);
            assertEquals(todoName, labelPresent);
        }catch(Exception e){
            LOGGER.error("Error in listing of ToDos created:"+todoName);
            fail("Exception Caught:" + e.toString());
        }
    }

    @Given("^I select \"([^\"]*)\" as below$")
    public void i_select_as_below(String todoName)  {
        try {
            todoPage.selectElement(todoName);
        }catch(Exception e){
            LOGGER.error("Error while selecting the existing ToDo Name:"+todoName);
            fail("Exception Caught:" + e.toString());
        }
    }

    @When("^I click on \"([^\"]*)\"$")
    public void i_click_on(String option) {
        try {
            todoPage.clickElement(option);
        }catch(Exception e){
            LOGGER.error("Error occurred during filtering:" + option);
            fail("Exception Caught:" + e.toString());
        }
    }

    @Then("^I verify the \"([^\"]*)\" Todo items are visible$")
    public void i_verify_the_Todo_items_is_visible(String todoName)  {
        try {
            boolean result;
            result=todoPage.getActiveList(todoName);
            if(result) {
                assert(true);
            }
            else fail("Clicked ToDo doesn't Match");
        }catch(Exception e){
            LOGGER.error("Error while capturing the filtered list of ToDo Names");
            fail("Exception Caught:" + e.toString());
        }
    }


    @Then("^I assert \"([^\"]*)\" got deleted from the list$")
    public void i_assert_got_deleted_from_the_list(String todoName)  {
        try {
            String deletedElement = todoPage.deleteElement(todoName);
            assertEquals(todoName, deletedElement);
        }catch(Exception e){
            LOGGER.error("Error while deleting a Todo Name:" + todoName);
            fail("Exception Caught:" + e.toString());
        }
    }

    @Then("^I close the todomvc browser$")
    public void i_close_the_todomvc_browser() {
        try {
            todoPage.closeBrowser();
        }catch(Exception e){
            LOGGER.error("Error in closing the Chrome browser");
            fail("Exception Caught:" + e.toString());
        }
    }


}


