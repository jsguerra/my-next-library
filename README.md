A custom Next.js 14 Library App using server actions.

## To do
- [ ] Author edit page
- [ ] Book edit page
- [ ] Tag edit page
- [ ] Add actions for edit/delete
- [ ] Update form components for edit/delete
- [ ] Update author thumbnails preview
- [ ] Update tag page
- [x] Favorites page
- [ ] Search page
- [ ] Search component
- [ ] Pagination component
- [ ] Add Grid column toggle
- [ ] Filter component

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
