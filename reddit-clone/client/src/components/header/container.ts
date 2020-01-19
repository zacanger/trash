import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuth from '../../util/with-auth'
import { logout } from '../../actions/auth'
import Header from './component'

const mapDispatchToProps = { logout }

const enhance = compose(withAuth, connect(null, mapDispatchToProps))

const HeaderContainer = enhance(Header)

export default HeaderContainer
