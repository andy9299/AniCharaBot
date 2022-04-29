module.exports = `
query ($popularity: Int = 25000) {
    Character(sort: FAVOURITES_DESC, id: $popularity) {
      siteUrl
      name {
        first
        last
      }
      image {
        large
      }
      description
      media {
        nodes {
          type
        }
      }
    }
  }
  
`;