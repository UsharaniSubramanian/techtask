@All

  Feature: Create Todo item, Filter and Delete

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

    Scenario Outline: Validate Active Todo List
      Given I select "<TodoName>" as below
      When I click on "Active"
      Then I verify the "<ClickedTodo>" Todo items are visible
      Then I click on "All"
      Examples:
        |TodoName| ClickedTodo    |
        | One    | Two, Three    |


    Scenario Outline: Delete a Todo Name and validate
      Given I select "<TodoName>" as below
      Then I assert "<TodoName>" got deleted from the list
      Examples:
        |TodoName|
        | Two    |
        | One    |
        | Three  |

Scenario:
  Then I close the todomvc browser

