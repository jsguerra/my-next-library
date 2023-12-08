A custom Next.js 14 Library App using server actions, ORM Prisma, and Storybook.

To install run:
```bash
npm install
```
## Features include
- Adding author and author picture
  - File upload uses slug to create folder hierarchy in Public folder
- Adding books with file upload
  - Slug is required with author to create folder heirarchy in Public folder
  - Single or multiple images can be uploaded to create a gallery of pages
- Adding/editing/deleting tags
- Global search by title
- Favorites page to display favorites
- Paginated gallery
- Gallery toggle to change number of columns
- Scroll to top button
- Author filtering by first name letter

## To do
- [x] Book edit page
- [x] Book edit actions
- [x] Tag edit page
- [x] Tag edit actions
- [x] Tag delete actions
- [x] Update author thumbnails preview
- [x] Update tag page
- [x] Favorites page
- [x] Favorite needs check for empty array
- [x] Search page
- [x] Search component
- [x] Search componnt bug on results page
- [x] Pagination component
- [x] Pagination story
- [x] Add pagination to pages
  - [x] Home
  - [x] Tags
  - [x] Search
- [x] Add Grid component
- [x] Add Grid column toggle
- [x] Add Scroll to top button
- [x] Add Navigation component
- [x] Filter component
- [x] Filter story
- [x] Add filter component to authors directory
- [x] Install Storybook for component testing

> [!WARNING]
> Bugs to fix
> - [x] Uploading multiple pages (images) for a book do not display in the correct order, add sorting.
> - [ ] Change image uploads directory. Images uploaded to Public folder after produciton are not served from Public folder. Will provide a custom config to server from a local Nginx server.

> [!NOTE]
> The tasks below have been deferred for a future time
> - [ ] Author edit page
> - [ ] Author edit actions
> - [ ] Author delete actions
> - [ ] Add labels to form inputs
> - [ ] Book delete actions
>
> Optional
> - [ ] Add pagination to Author directory
> - [ ] Add pagination to favorites directory

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Prisma Commands

Initial migration:
```bash
npx prisma migrate dev --name init
```

To update the schema:
```bash
npx prisma generate
```

After that run:
```bash
npx prisma migrate dev
```

To interact with the dabase:
```bash
npx prisma studio
```
