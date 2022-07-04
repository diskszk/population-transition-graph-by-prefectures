/// <reference types="cypress" />

describe("線グラフを描画する", () => {
  it("線グラフを描画している", () => {
    cy.visit("/");
    cy.get('[value="北海道"]').check();
    cy.wait(100);
    cy.get("canvas").should("be.visible");
  });
});
