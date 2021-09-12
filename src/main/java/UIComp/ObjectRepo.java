package UIComp;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;


public class ObjectRepo {

        protected WebDriver driver;

        public ObjectRepo(WebDriver driver){
            this.driver = driver;
            PageFactory.initElements(driver, this);
        }

}
