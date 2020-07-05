// required packages
const fetch = require('node-fetch');

// get tracks
async function getAllTracks() {
  // max number of records to fetch per query
  const recordsPerQuery = 100;

  // number of records to skip (start at 0)
  let recordsToSkip = 0;

  // do we make a query ?
  let makeNewQuery = true;

  // Tracks array
  let tracks = [];

  // make queries until makeNewQuery is set to false
  while (makeNewQuery) {
    try {
      // initiate fetch
      const strapi = await fetch(process.env.GRAPHQL_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query: `{ 
            tracks {
              createdAt: created_at
              id
              name
              imageUrl
              artist {
                name
                slug
              }
              popularity
            }
          }
          `,
        }),
      });

      // store the JSON response when promise resolves
      const response = await strapi.json();

      // handle Strapi errors
      if (response.errors) {
        let errors = response.errors;
        errors.map((error) => {
          console.log(error.message);
        });
        throw new Error('Aborting: Strapi errors');
      }

      // update tracks array with the data from the JSON response
      tracks = tracks.concat(response.data.tracks);

      // prepare for next query
      recordsToSkip += recordsPerQuery;

      // stop querying if we are getting back less than the records we fetch per query
      if (response.data.tracks.length < recordsPerQuery) {
        makeNewQuery = false;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  // format tracks objects
  const tracksFormatted = tracks.map((item) => {
    return {
      date: item.createdAt,
      id: item.id,
      name: item.name,
      imageUrl: item.imageUrl,
      artist: item.artist.name,
      popularity: item.popularity,
    };
  });

  console.log(tracksFormatted)

  // return formatted tracks
  return tracksFormatted;
}

// export for 11ty
module.exports = getAllTracks;
