import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  Heading,
  Container,
  InnerContainer,
  Textarea,
  IconsContainer,
  IconButton1,
  IconButton2,
  IconButton3,
} from './styledComponents'
import './index.css'

class TextEditor extends Component {
  state = {bold: false, italic: false, underline: false}

  onChangeBold = () => {
    this.setState(prevState => ({
      bold: !prevState.bold,
    }))
  }

  onChangeItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onChangeUnderline = () => {
    this.setState(prevState => ({
      underline: !prevState.underline,
    }))
  }

  render() {
    const {bold, italic, underline} = this.state
    return (
      <Container>
        <InnerContainer>
          <div>
            <Heading>Text Editor</Heading>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <div>
            <IconsContainer>
              <li>
                <IconButton1
                  data-testid="bold"
                  type="button"
                  onClick={this.onChangeBold}
                  isBold={bold}
                >
                  <VscBold size={25} />
                </IconButton1>
              </li>

              <li>
                <IconButton2
                  data-testid="italic"
                  type="button"
                  onClick={this.onChangeItalic}
                  isItalic={italic}
                >
                  <GoItalic size={25} />
                </IconButton2>
              </li>

              <li>
                <IconButton3
                  data-testid="underline"
                  type="button"
                  onClick={this.onChangeUnderline}
                  isUnderline={underline}
                >
                  <AiOutlineUnderline size={25} />
                </IconButton3>
              </li>
            </IconsContainer>
            <Textarea isBold={bold} isItalic={italic} isUnderline={underline} />
          </div>
        </InnerContainer>
      </Container>
    )
  }
}
export default TextEditor
