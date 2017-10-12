import styled from 'react-emotion'
import PropTypes from 'prop-types'

const CentredSection = styled.section`
  margin-right: auto;
  margin-left: auto;
  width: ${props => (props.width ? props.width : '100%')};
`
CentredSection.propTypes = {
  width: PropTypes.string,
}

export default CentredSection
