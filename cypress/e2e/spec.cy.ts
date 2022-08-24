describe("empty spec", () => {
  const appURL = "http://localhost:4200/";
  it("passes", () => {
    cy.visit(appURL);
    const testMessage = "cypress test message"; // the message this test will type and check for

    cy.contains("New Message").click();
    cy.url().should("include", "contactList");

    cy.contains("Start Message").click();
    cy.url().should("equal", appURL);

    cy.get("input[name=user-message-input]").type(testMessage); // get the input box by it 'name' attribute and type in it
    cy.contains("Send").click(); // "Send" the message
    cy.get("app-conversation-thread-component").should("contain", testMessage); // check that the message was sent

    cy.get("button[name=delete-user-comment]").click(); 
    cy.get("app-conversation-thread-component").should("not.contain", testMessage); // check that the message deleted

  });
});