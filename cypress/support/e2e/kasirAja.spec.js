describe('KasirAja Feature', () => {
    it('Success Login', () => {
        //Open page from web browser
        cy.visit('kasirdemo.belajarqa.com')

        //Web contains words
        cy.contains('kasirAja')

        //Input email
        cy.get('#email')
            .type('kasirToko@gmail.com')
            .should('have.value', 'kasirToko@gmail.com')

        //Input password
        cy.get('#password')
            .type('kasir123')
            .should('have.value', 'kasir123')

        cy.contains('login').click()
    })

    it('Success open & close product modal', () => {
        //Open page from web browser
        cy.visit('kasirdemo.belajarqa.com')
        cy.contains('kasirAja')
        cy.get('#email')
            .type('kasirToko@gmail.com')
            .should('have.value', 'kasirToko@gmail.com')
        cy.get('#password')
            .type('kasir123')
            .should('have.value', 'kasir123')
        cy.contains('login').click()
        cy.url().should('include', '/sales/create')
        cy.get('.chakra-button').eq(0).click()
        cy.get('.chakra-icon').click()
    })

    it('Success Create User', () => {
        cy.visit('kasirdemo.belajarqa.com')
        cy.contains('hai, kasirAja')
        cy.get('#email')
            .type('trianikamila@gmail.com')    
            .should('have.value','trianikamila@gmail.com') 
        cy.get('#password')
            .type('triani123@')    
            .should('have.value','triani123@')  
        cy.contains('login').click()
        cy.url().should('include', '/dashboard')
        cy.contains('pengguna').click()
        cy.contains('tambah').click()
        cy.get('#nama')
            .type('kelly')    
            .should('have.value','kelly') 
        cy.get('#email')
            .type('kelly@gmail.com')    
            .should('have.value','kelly@gmail.com') 
        cy.get('#password')
            .type('kelly123')    
            .should('have.value','kelly123') 
        cy.contains('simpan').click()
        cy.contains('success')
    })
})