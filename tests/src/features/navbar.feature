  Feature: Navbar
    @devv
    Scenario:
      Given a logged in user
      When they are on the "My Dashboard" page
      Then the title is equal to "My Dashboard"
      And the "Weekly" "button" is visible
      And the "Daily" "button" is visible
      And the "Team" "button" is not visible
