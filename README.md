

# General

Web app in which you upload and share mememes. The app can be accessed by multiple users simulataneously.

Display both local memes and memes created by other similar applications. In order for that to happen application uses the “MemeIt Platform Service” as a registry for different 

“Meme Application” instances.


GET /domain
Description: Returns all registered domains
Response: List of all domain objects each having name and address.

POST /domain/register
Description: Adds a domain in the registry
Body: A single object containing a human-readable name (describing the topic for the  majority of your memes) and an address of the backend endpoint which later on can be queried.

DELETE /domain/deregister/:id?
Description: Removes a domain from register by specifying id of the target domain


## Main Application Components

### Home page

Each meme includes  a button which coud be used to delete it.

Pagging button with default 6 memes per page.

Filtering by title which filter all memes that partially match the filter criteria (e.g. search for "abc" – give all memes which title contains "abc")

### Create Meme Page 

Display a web form for meme creation.

A meme has the following fields:
- Title(text)
- Image(file)

### Edit meme page

This page should display a web form for editing a meme. It is the same form as in "Create Meme Page" but  prepopulated with the title of the meme which is about to be edited.
In this form you can edit both title and image.

### Explore Screen

It contains:
- all available domains in a dropdown
- all memes per selected domain

### Explore Page

Explore screen should contain:

-advanced search

	-the search should check whether the searched term is a part of any meme’s title

	-if no match is found the application should be able to suggest to the user a new search term based on the similarity of the current one


