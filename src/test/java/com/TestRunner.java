package com;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty","html:target/cucumber-reports/cucumber.html"},
        features={"featuretest"},
        glue={""},
        tags={"@All"}  //Available tags - @All, @create, @filter, @delete, @Api, @testGetn, @testGetAll, @testPost
)

public class TestRunner {
}