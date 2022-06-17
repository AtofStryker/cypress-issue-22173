describe("drive screenshot", () => {
    it("screenshots", () => {
      cy.visit("https://www.wikipedia.org/")
      .get('.central-featured') // centered (margin: 0 auto) globe with languages around it
      .screenshot({
          blackout: ['[lang=en]']
      });
    });
  });
  