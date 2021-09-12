@Api

Feature: GET the list of post via GET method

  @testGetn
  Scenario Outline: GET the list of post via GET method
    Given I provide "<input>" for GET method and get the response back
    Examples:
      |input   |
      |  5     |


    @testGetAll
  Scenario: GET all the list of post via GET method
    Given GET all the list of posts available


      @testPost
  Scenario Outline: GET the detail via POST method
    Given Pass on the "<input_json>" file to POST Method and get the response back

    Examples:
      |input_json               |
      |data/test-postJson-1.json|
