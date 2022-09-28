import styled from 'styled-components/macro'

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  color: #f8fafc;
  text-align: center;
`
export const Container = styled.div`
  background: #25262c;
  height: 100vh;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const InnerContainer = styled.div`
  background: #1b1c22;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 10px;
`
export const Textarea = styled.textarea`
  width: 20vw;
  height: 50vh;
  background: #25262c;
  border: 1px solid #334155;
  border-bottom-left-radius: 5px;
  border-bottom-left-radius: 5px;
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
  outline: none;
  padding: 20px;
  color: #f8fafc;
  font-size: 24px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
`
export const IconsContainer = styled.ul`
  width: 20vw;
  border: 1px solid #334155;
  padding: 10px;
  background: #25262c;
  border-bottom: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0px;
`
export const IconButton1 = styled.button`
  background: transparent;
  border: 0px;
  margin-right: 10px;
  color: ${props => (props.isBold ? '#faff00' : '#f1f5f9')};
`
export const IconButton2 = styled.button`
  background: transparent;
  border: 0px;
  margin-right: 10px;
  color: ${props => (props.isItalic ? '#faff00' : '#f1f5f9')};
`
export const IconButton3 = styled.button`
  background: transparent;
  border: 0px;
  margin-right: 10px;
  color: ${props => (props.isUnderline ? '#faff00' : '#f1f5f9')};
`
