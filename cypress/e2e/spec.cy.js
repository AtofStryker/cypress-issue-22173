describe("drive screenshot", () => {
  it("screenshots", () => {
    cy.on("uncaught:exception", () => false);
    // public drive folder that only has view permissions
    cy.visit(
      "https://drive.google.com/drive/folders/1xnJosjV3GcnMGpjKZz6eiMHM_rWIvLOF"
    );
    cy.get('[data-tooltip="List view"]').click();
    cy.wait(300);
    cy.get('[role="gridcell"]').first().get('[data-column-field="5"]');
    cy.screenshot({
      blackout: [`[data-column-field="5"]`],
    });
  });
});
