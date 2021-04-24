import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Navbar from '../NavBar'

import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Segment,
  Visibility,
  Card
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Imagine-a-Company'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Do whatever you want when you want to.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
         
            <Navbar></Navbar>
            
           
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}



const ResponsiveContainer = ({ children }) => (
  
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Main = () => (
  <ResponsiveContainer>
  
    <Segment  style={{ padding: '6em',width:'100%'}} hprizontal>
    <Grid  columns='equal' stackable>
    <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Card style={{marginLeft:'15em'}}>
    <Image src='https://upload.wikimedia.org/wikipedia/commons/8/8e/Paddington_Station-4269161-by-Oast-House-Archive.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Train Data</Card.Header>
      <Card.Meta>
      </Card.Meta>
      <Card.Description>
      Admin Should Add Train Data.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='train' />
            <Button href='/traindata'primary>Add Train Data</Button>

      </a>
    </Card.Content>
  </Card  >
          </Grid.Column >
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em',paddingLeft:'22em' }}>
          <Card  tyle={{marginLeft:"10em" }}>
    <Image src='https://tse4.mm.bing.net/th?id=OIP.ftB0v_GHN1XBE9FeL85S2AHaFC&pid=Api&P=0&w=234&h=160' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Station Data</Card.Header>
      <Card.Description>
        Admin Should Add Station Data.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='train' />
        <Button href='/stationdata'primary>Add Station Data</Button>

      </a>
    </Card.Content>
  </Card>
          </Grid.Column>
        </Grid.Row>
    </Grid>
    </Segment>

   
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
   </ResponsiveContainer>
)

export default Main