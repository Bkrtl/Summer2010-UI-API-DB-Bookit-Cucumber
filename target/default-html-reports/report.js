$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/user.feature");
formatter.feature({
  "name": "User Verification",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "three point verification (UI,DATABASE,API)",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@wip"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"sbirdbj@fc2.com\" \"asenorval\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyInfoStepDefs.user_logs_in_using(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the my self page",
  "keyword": "When "
});
formatter.match({
  "location": "MyInfoStepDefs.user_is_on_the_my_self_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I logged Bookit api using \"sbirdbj@fc2.com\" and \"asenorval\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.i_logged_Bookit_api_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.i_get_the_current_user_information_from_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "UI,API and Database user information must be match",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.ui_API_and_Database_user_information_must_be_match()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});