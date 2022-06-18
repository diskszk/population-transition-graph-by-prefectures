/// <reference types="cypress" />

describe("折れ線グラフの表示・非表示", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("選択した都道府県の人口データを表示する", () => {
    cy.get('[value="北海道"]').check();
  });

  it("選択した都道府県の人口データを非表示にする", () => {
    cy.get('[value="北海道"]').check();
    cy.wait(100);
    cy.get('[value="北海道"]').uncheck();
  });

  it("選択した都道府県の人口データを非表示にした時、別の都道府県の人口データが非表示にならない", () => {
    cy.get('[value="北海道"]').check();
    cy.wait(300);
    cy.get('[value="青森県"]').check();
    cy.wait(100);
    cy.get('[value="青森県"]').uncheck();
  });
});
