import styled from 'react-emotion'

const Container = styled.div`
  width: ${props => (props.width ? props.width : '100%')};
  margin-bottom: 23px;
  background-color: #fff;
  border: 1px solid #2572b4;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
`

export default Container
