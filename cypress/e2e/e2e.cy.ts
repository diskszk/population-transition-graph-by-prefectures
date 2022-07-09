/// <reference types="cypress" />

describe("チェックボックスの操作による、凡例の表示・非表示", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("チェックボックスにチェックを入れて、選択した都道府県の凡例を表示する", () => {
    cy.get('[value="北海道"]').check();
    cy.wait(100);
    cy.get("[data-testid=legend]").children("li").should("have.text", "北海道");
  });

  it("チェックボックスのチェックを外して、選択した都道府県の凡例を非表示にする", () => {
    cy.get('[value="北海道"]').check();
    cy.wait(100);
    cy.get('[value="北海道"]').uncheck();
    cy.wait(100);
    cy.get("[data-testid=legend]").should("not.be.visible");
  });

  it("チェックボックスのチェックを外して選択した都道府県の凡例を非表示にした時、別の都道府県の凡例が非表示にならない", () => {
    cy.get('[value="北海道"]').check().should("be.checked");
    cy.wait(100);
    cy.get('[value="青森県"]').check().should("be.checked");
    cy.wait(100);
    cy.get('[value="青森県"]').uncheck().should("not.be.checked");

    cy.get("[data-testid=legend]").children().should("not.have.text", "青森県");
  });

  it("凡例は取り消し線がついていない", () => {
    cy.get('[value="北海道"]').check();
    cy.get("[data-testid=legend]")
      .children()
      .should("not.have.css", "text-decoration", "line-through");
  });
  it("凡例をクリックすると、取り消し線が表示される", () => {
    cy.get('[value="北海道"]').check();
    cy.wait(100);

    cy.get("[data-testid=legend]")
      .children()
      .should("have.text", "北海道")
      .click();

    cy.get("[data-testid=legend]")
      .children()
      .should("have.text", "北海道")
      .children("p")
      .should("have.css", "text-decoration-line", "line-through");
  });

  it("取り消し線が表示されている凡例を再度クリックすると取り消し線が非表示になる", () => {
    cy.get('[value="北海道"]').check();
    cy.wait(100);

    cy.get("[data-testid=legend]")
      .children()
      .should("have.text", "北海道")
      .click();

    cy.get("[data-testid=legend]")
      .children()
      .should("have.text", "北海道")
      .click();

    cy.get("[data-testid=legend]")
      .children()
      .should("have.text", "北海道")
      .should("have.css", "text-decoration-line", "none");
  });
});
