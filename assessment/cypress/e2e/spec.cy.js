// CRIO_SOLUTION_AND_STUB_ONLY_START_MODULE_ONE
// CRIO_SOLUTION_AND_STUB_ONLY_END_MODULE_ONE
describe("Expenses Chart Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5500/expenses-chart-component-main/index.html"); // Adjust the path to your HTML file
  });

  it("should display the balance amount correctly", () => {
    cy.get(".balance_amount").should("have.text", "$921.48");
  });

  it("should display the spending chart with the correct number of bars", () => {
    cy.get(".spending-chart__bar").should("have.length", 7);
  });

  it("should display the correct data in each bar", () => {
    cy.fixture("./data.json").then((data) => {
      // data.forEach((item, index) => {
      //   cy.get(".spending-chart__bar").eq(index)
      //     .should("have.attr", "data-label", item.day)
      //     .and("have.attr", "data-amount", `$${item.amount}`);
      // });
    });
  });

  it("should highlight the bar for today", () => {
    const todayIndex = new Date().getDay() - 1;
    cy.get(".spending-chart__bar").eq(todayIndex).should("have.class", "active");
  });

  it("should show the tooltip with the correct amount on hover", () => {
    cy.get(".spending-chart__bar").first().trigger("mouseover");
    cy.get(".spending-chart__bar").first().should("have.attr", "data-amount", "$17.45");
  });

  it("should display the total spending for the month correctly", () => {
    cy.get(".spending_total span").should("have.text", "$478.33");
  });

  it("should display the spending comparison correctly", () => {
    cy.get(".spending_comparision").should("have.text", "+2.4% from last month");
  });

});
