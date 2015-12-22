import Alt from 'alt'

//following line needs https://github.com/goatslacker/alt-devtool
import chromeDebug from 'alt-utils/lib/chromeDebug'

const alt = new Alt()

// so does this line. comment out if not using the devtools extension.
chromeDebug(alt)

export default alt

