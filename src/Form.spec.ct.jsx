import { mount } from "@cypress/react";
import { Form } from "./main";

it("renders generate button", () => {
  mount(<Form />);
  cy.get("button").contains("Generate");
});

it("renders spinner when clicked", () => {
  mount(<Form />);
  cy.get("button").click();
  cy.get("svg").should("be.visible");
});

it("renders result textarea after fetch", () => {
  mount(<Form />);
  cy.get("button").click();
  cy.get("#copy-result").should("not.have.class", "opacity-0");
});
