const contentfulManagement = require('contentful-management')

module.exports = function() {
    const contentfulClient = contentfulManagement.createClient({
      accessToken: 'CFPAT-6cbdl-2kRtA7GmHAJAHGmf9ETI3iN_flEITmUZ8ANsQ',
    })
  
    return contentfulClient
      .getSpace('gq91izifs6bu')
      .then(space => space.getEnvironment("master"))
  }