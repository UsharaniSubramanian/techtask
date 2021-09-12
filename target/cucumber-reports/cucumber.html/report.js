$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("todo_allfeatures.feature");
formatter.feature({
  "line": 3,
  "name": "Create Todo item, Filter and Delete",
  "description": "",
  "id": "create-todo-item,-filter-and-delete",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "",
  "description": "",
  "id": "create-todo-item,-filter-and-delete;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Background:"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I login to todomvc",
  "keyword": "Given "
});
formatter.match({
  "location": "ToDoGlue.i_login_to_todomvc()"
});
formatter.result({
  "duration": 2699899700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Create a Todo List and validate",
  "description": "",
  "id": "create-todo-item,-filter-and-delete;create-a-todo-list-and-validate",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I provide \"\u003cTodoName\u003e\" as below",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I assert \"\u003cTodoName\u003e\" got created and listed",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "create-todo-item,-filter-and-delete;create-a-todo-list-and-validate;",
  "rows": [
    {
      "cells": [
        "TodoName"
      ],
      "line": 13,
      "id": "create-todo-item,-filter-and-delete;create-a-todo-list-and-validate;;1"
    },
    {
      "cells": [
        "One"
      ],
      "line": 14,
      "id": "create-todo-item,-filter-and-delete;create-a-todo-list-and-validate;;2"
    },
    {
      "cells": [
        "Two"
      ],
      "line": 15,
      "id": "create-todo-item,-filter-and-delete;create-a-todo-list-and-validate;;3"
    },
    {
      "cells": [
        "Three"
      ],
      "line": 16,
      "id": "create-todo-item,-filter-and-delete;create-a-todo-list-and-validate;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Create a Todo List and validate",
  "description": "",
  "id": "create-todo-item,-filter-and-delete;create-a-todo-list-and-validate;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I provide \"One\" as below",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I assert \"One\" got created and listed",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "One",
      "offset": 11
    }
  ],
  "location": "ToDoGlue.i_provide_as_below(String)"
});
formatter.result({
  "duration": 149561600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One",
      "offset": 10
    }
  ],
  "location": "ToDoGlue.i_assert_got_created_and_listed(String)"
});
formatter.result({
  "duration": 46921500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Create a Todo List and validate",
  "description": "",
  "id": "create-todo-item,-filter-and-delete;create-a-todo-list-and-validate;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I provide \"Two\" as below",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I assert \"Two\" got created and listed",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Two",
      "offset": 11
    }
  ],
  "location": "ToDoGlue.i_provide_as_below(String)"
});
formatter.result({
  "duration": 123332500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Two",
      "offset": 10
    }
  ],
  "location": "ToDoGlue.i_assert_got_created_and_listed(String)"
});
formatter.result({
  "duration": 50159300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Create a Todo List and validate",
  "description": "",
  "id": "create-todo-item,-filter-and-delete;create-a-todo-list-and-validate;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I provide \"Three\" as below",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I assert \"Three\" got created and listed",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Three",
      "offset": 11
    }
  ],
  "location": "ToDoGlue.i_provide_as_below(String)"
});
formatter.result({
  "duration": 118152500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Three",
      "offset": 10
    }
  ],
  "location": "ToDoGlue.i_assert_got_created_and_listed(String)"
});
formatter.result({
  "duration": 51908300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Validate Active Todo List",
  "description": "",
  "id": "create-todo-item,-filter-and-delete;validate-active-todo-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I select \"\u003cTodoName\u003e\" as below",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on \"Active\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I verify the \"\u003cClickedTodo\u003e\" Todo items are visible",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I click on \"All\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "create-todo-item,-filter-and-delete;validate-active-todo-list;",
  "rows": [
    {
      "cells": [
        "TodoName",
        "ClickedTodo"
      ],
      "line": 24,
      "id": "create-todo-item,-filter-and-delete;validate-active-todo-list;;1"
    },
    {
      "cells": [
        "One",
        "Two, Three"
      ],
      "line": 25,
      "id": "create-todo-item,-filter-and-delete;validate-active-todo-list;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Validate Active Todo List",
  "description": "",
  "id": "create-todo-item,-filter-and-delete;validate-active-todo-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I select \"One\" as below",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on \"Active\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I verify the \"Two, Three\" Todo items are visible",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I click on \"All\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "One",
      "offset": 10
    }
  ],
  "location": "ToDoGlue.i_select_as_below(String)"
});
formatter.result({
  "duration": 116234400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Active",
      "offset": 12
    }
  ],
  "location": "ToDoGlue.i_click_on(String)"
});
formatter.result({
  "duration": 118203300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Two, Three",
      "offset": 14
    }
  ],
  "location": "ToDoGlue.i_verify_the_Todo_items_is_visible(String)"
});
formatter.result({
  "duration": 28393300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All",
      "offset": 12
    }
  ],
  "location": "ToDoGlue.i_click_on(String)"
});
formatter.result({
  "duration": 101360200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Delete a Todo Name and validate",
  "description": "",
  "id": "create-todo-item,-filter-and-delete;delete-a-todo-name-and-validate",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I select \"\u003cTodoName\u003e\" as below",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I assert \"\u003cTodoName\u003e\" got deleted from the list",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "create-todo-item,-filter-and-delete;delete-a-todo-name-and-validate;",
  "rows": [
    {
      "cells": [
        "TodoName"
      ],
      "line": 32,
      "id": "create-todo-item,-filter-and-delete;delete-a-todo-name-and-validate;;1"
    },
    {
      "cells": [
        "Two"
      ],
      "line": 33,
      "id": "create-todo-item,-filter-and-delete;delete-a-todo-name-and-validate;;2"
    },
    {
      "cells": [
        "One"
      ],
      "line": 34,
      "id": "create-todo-item,-filter-and-delete;delete-a-todo-name-and-validate;;3"
    },
    {
      "cells": [
        "Three"
      ],
      "line": 35,
      "id": "create-todo-item,-filter-and-delete;delete-a-todo-name-and-validate;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "Delete a Todo Name and validate",
  "description": "",
  "id": "create-todo-item,-filter-and-delete;delete-a-todo-name-and-validate;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I select \"Two\" as below",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I assert \"Two\" got deleted from the list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Two",
      "offset": 10
    }
  ],
  "location": "ToDoGlue.i_select_as_below(String)"
});
formatter.result({
  "duration": 113130600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Two",
      "offset": 10
    }
  ],
  "location": "ToDoGlue.i_assert_got_deleted_from_the_list(String)"
});
formatter.result({
  "duration": 84005300,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Delete a Todo Name and validate",
  "description": "",
  "id": "create-todo-item,-filter-and-delete;delete-a-todo-name-and-validate;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I select \"One\" as below",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I assert \"One\" got deleted from the list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "One",
      "offset": 10
    }
  ],
  "location": "ToDoGlue.i_select_as_below(String)"
});
formatter.result({
  "duration": 103278400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One",
      "offset": 10
    }
  ],
  "location": "ToDoGlue.i_assert_got_deleted_from_the_list(String)"
});
formatter.result({
  "duration": 96851200,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Delete a Todo Name and validate",
  "description": "",
  "id": "create-todo-item,-filter-and-delete;delete-a-todo-name-and-validate;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I select \"Three\" as below",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I assert \"Three\" got deleted from the list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Three",
      "offset": 10
    }
  ],
  "location": "ToDoGlue.i_select_as_below(String)"
});
formatter.result({
  "duration": 93889200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Three",
      "offset": 10
    }
  ],
  "location": "ToDoGlue.i_assert_got_deleted_from_the_list(String)"
});
formatter.result({
  "duration": 89954500,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "",
  "description": "",
  "id": "create-todo-item,-filter-and-delete;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "I close the todomvc browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ToDoGlue.i_close_the_todomvc_browser()"
});
formatter.result({
  "duration": 608809900,
  "status": "passed"
});
});