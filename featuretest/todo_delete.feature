@delete

Feature: Create and Delete Todo item

  @Background:
  Scenario:
    Given I login to todomvc

  Scenario Outline: Create a Todo List and validate
    When I provide "<TodoName>" as below
    Then I assert "<TodoName>" got created and listed
    Examples:
      |TodoName|
      | One    |
      | Two    |
      | Three  |

  Scenario Outline: Delete a Todo Name and validate
    Given I select "<TodoName>" as below
    Then I assert "<TodoName>" got deleted from the list
    Examples:
      |TodoName|
      | Two    |
      | One    |


  Scenario:
    Then I close the todomvc browser

