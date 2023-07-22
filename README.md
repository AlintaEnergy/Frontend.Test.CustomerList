# Candidate: Yunkai Liu

## Timebox - 1 hour

I limited the timebox to an hour and took the coding test bewteen 4:45pm to 5:45pm. 

## Initial Set up steps:

- Because of I'm using the latest LTS node version, I changed the start script to be `react-scripts --openssl-legacy-provider start`.

## Tasks attempted
- Move the Add new customer, form it takes up a lot of space on mobile. It could move to another page or be hidden in an accordion.
  - Change add new customer form to a separate page.  
- Add a birthday to the customers. Consider using a date-picker and it's pros and cons.
  - Add a new input field for users to add birthday 
- Add validation. Currently, the form allows blank customers to be submitted; we only want customers with all fields filled in. Add validation that handles phone numbers in different formats.
  - Add validations: Names and phone number are required. Phone number should be a valid Australia phone number. Birthday should not be later than today.
- Convert the customer list to a table. The block layout is hard for users to scan down.
  - Use react-Tanstack table library to create a data table for customer list. Add pagination.
- Add search and sorting. As the list grows, users want to be able to search by name or phone number.
  - Add global search on all the fields and sorting on firstName.  
- Refactor the store; this is an expansive task. You could update the IDs to be unique and convert the customer list to a map to make editing more efficient. Or convert to a Redux Toolkit slices structure. Whatever you do, make sure it improves the implementation.
  - Change IDs to uuid. Change customer list to a map. 

## If have more time

- Improve the tests. Complete test scripts for add form.
  - Submit an empty form and look for required.
  - Submit invalid phone number/birthday and look for error message.
  - Fill in valid info and hit submit. Then look for success message.
- Avoid duplicated user to be added.
  - Modify reducer. Prevent user from being added when it already exists in state.
- Improve feedback.
  - Add more success/error messages, change hover/click/submitting/... styles to inform users about how it's going on.
- Accessibility
  - Use semantic HTML when appropriate.
  - Add aria-labelledby to form labels and aria-describedby to error/success messages.
  - Add keyboard navigation to buttons and add customer form.
