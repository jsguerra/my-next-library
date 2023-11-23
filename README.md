A custom Next.js 14 Library App using server actions.

## To do
- [ ] Book edit page
- [ ] Book edit actions
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
- [ ] Pagination component
- [ ] Add pagination to pages (home, tags, favorites, search)
- [x] Add Grid column toggle
- [ ] Filter component

> [!NOTE]
> The tasks below have been deferred for a future time
> - [ ] Author edit page
> - [ ] Author edit actions
> - [ ] Author delete actions
> - [ ] Add labels to form inputs
> - [ ] Book delete actions

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
