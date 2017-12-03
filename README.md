# soundtracks-react
- Work in progress, but you can view the current version of the site [here](https://soundtracks.herokuapp.com/).
- View todos [here](https://github.com/JWLD/soundtracks-react/issues).

### What is this?
I wanted to create an app where the user can browse a comprehensive list of film / game / tv composers and their works, and then listen to them via embedded platforms like Spotify and YouTube. Existing catalogues (like Spotify) are often incomplete and contain a confusing mixture of albums / compilations / covers etc.

The app also contains a data entry system where the user can source data from Spotify to be displayed in the main part of the app. Currently this app only makes use of the Spotify API, but the plan is to incorporate other data sources such as Discogs and MusicBrainz in the future.

### How do I use it?
The landing page renders a list of artists where the user can click through to a list of their albums, linked up to Spotify.

The plus in the top right takes you through to a data entry page. Spotify authentication is required to use their API - click the icon in the top right to log in. Then search for and select an artist, and choose which albums you want to add to the app. The album year field has to be filled out by clicking the button within the field itself.

### Tech Stack
- React
- Redux
- Express
- PostgreSQL
