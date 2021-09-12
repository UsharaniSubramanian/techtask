@filter
Feature: Create Todo item and filter

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
        | Three  |

    Scenario Outline: Validate Active Todo List
    Given I select "<TodoName>" as below
    When I click on "Completed"
    Then I verify the "<ClickedTodo>" Todo items are visible

    Examples:
    |TodoName| ClickedTodo   |
    | One    | One           |

  Scenario:
    Then I close the todomvc browser