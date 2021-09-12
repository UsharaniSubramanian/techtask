package UIComp;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;

import java.util.List;

import static java.lang.Thread.sleep;

public class TodoPage extends ObjectRepo{

    //@FindBy(className="new-todo")
    @FindBy(css=".new\\-todo")
    private WebElement todoName;

    public void enterTodoName(String name){
        this.todoName.sendKeys(name);
        this.todoName.sendKeys(Keys.ENTER);
    }

    @FindBy(xpath = "/html/body/section/div/section/ul/li")
    List<WebElement> todoList;


    public String validateToDoName(String name) {

        for (WebElement webElement : todoList) {
            if(name.equals(webElement.getText()))
            return webElement.getText();
        }
        return null;
    }

    @FindBy(className = "toggle")
    List<WebElement> toggleList;

  public void selectElement(String name) {
      int index=0;
      for (WebElement webElement : todoList) {
          String s1=webElement.getText();
          if(s1.equals(name)){
              toggleList.get(index).click();
          }
          index++;
      }
  }

    public void ActiveToDo(String name)
    {
        int index=0;
        for (WebElement webElement : todoList) {
            String s1=webElement.getText();
            if(s1.equals(name)){
                toggleList.get(index).click();

            }
            index++;
        }

    }

    @FindBy(xpath="/html/body/section/div/footer/ul/li")
    List<WebElement> hyperLinkList;

  public void clickElement(String option) throws Exception
  {

          for (WebElement webElement : hyperLinkList) {
              String hyperLink = webElement.getText();
              if (hyperLink.equals(option)) {
                  webElement.click();
              }
          }
  }

  public Boolean getActiveList(String nameList)
  {
      for (WebElement webElement : todoList) {
          String s1=webElement.getText();
          if(!nameList.contains(s1)){
             return false;
          }
      }
      return true;
  }

    @FindBy(className = "destroy")
    List<WebElement> deleteList;

  public String deleteElement(String name)
  {
      int index=0;
      for (WebElement webElement : todoList) {
          String deleteName=webElement.getText();
          if(deleteName.equals(name)){
              deleteList.get(index).click();
              return deleteName;
          }
          index++;
      }
      return null;
  }

  public void closeBrowser()
  {
      driver.quit();
  }

    public TodoPage(WebDriver driver) {
        super(driver);
    }
}
