@create
Feature: Create Todo item

  @background
  Scenario:
    Given I login to todomvc

  Scenario Outline: Create a Todo List and validate
    When I provide "<TodoName>" as below
    Then I assert "<TodoName>" got created and listed
        Examples:
          |TodoName|
          | One    |
          | Two    |
          | 123    |

  Scenario:
    Then I close the todomvc browser