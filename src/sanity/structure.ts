import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Releases')
        .child(
          S.documentTypeList('release').title('Releases')
        ),
      S.listItem()
        .title('Socials')
        .child(S.documentTypeList('social').title('Socials')),
      S.listItem()
        .title('Market Items')
        .child(S.documentTypeList('marketItem').title('Market Items')),
    ]);
