# Plan

## List Page

    - incorporate out Create functionality
        - form
            - inputs for name of item and the rating (1-10), and submit button
    - ul
        - append each li based on info from supabase
    - delete button

1. Database Setup

    - make a table in Supabase
    - foreign key relationship to users table (uuid)
    - rls for user_id = uid()

2. Create (form)

    - create function in fetch-utils
    - add submit event listener
    - grab data using new FormData and send it to Supabase

3. List all items (ul)

    - fetch function in fetch utils
    - render function in render-utils
    - write a display in app.js
    - call display function on page load

4. Update item
   (crossing out the item)

    - update function in fetch utils
    - an event handler on our li elements (when they are rendered, we make them clickable)
    - re-display the list (call display function again)

5. Delete (button)
    - delete function in fetch-utils
    - add event listener to call the delete function (on button click)
