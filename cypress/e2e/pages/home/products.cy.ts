/// <reference types="cypress" />

describe('example to-do app', () => {
  it('should render the products', () => {
    cy.intercept(
      'GET',
      'https://dummyjson.com/products/search?q=&page=1&limit=6'
    ).as('productsGetRequest');

    cy.visit('/');
    cy.wait('@productsGetRequest')
      .its('response')
      .then((response) => {
        console.log(response && response.body);
        expect(response?.statusCode).to.equal(200);
        expect(response?.body.limit).to.equal(6);
        expect(response?.body.products.length).to.equal(6);

        cy.getByTestId('product-block').should(
          'have.length',
          response?.body.products.length
        );

        response?.body.products.forEach((product, index) => {
          const updatedIndex = index + 1;
          cy.getByTestId(`product-title-${updatedIndex}`).should(
            'contain.text',
            product.title
          );
          cy.getByTestId(`product-thumbnail-${updatedIndex}`).should(
            'contain.attr',
            'src',
            product.thumbnail
          );
          cy.getByTestId(`product-price-${updatedIndex}`).should(
            'contain.text',
            product.price
          );
          cy.getByTestId(`product-description-${updatedIndex}`).should(
            'contain.text',
            product.description
          );
          cy.getByTestId(`product-category-${updatedIndex}`).should(
            'contain.text',
            product.category
          );
          cy.getByTestId(`product-rating-${updatedIndex}`).should(
            'contain.text',
            product.rating
          );
        });
      });
  });
});
