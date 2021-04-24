import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
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
      content='Choose Your Destination'
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
      content='A World Of Exceptional Destination For You'
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
          <Segment
            
            style={{
              width: 2024,
              height: 1000,
              
              backgroundImage: `url(${"https://static.vecteezy.com/system/resources/previews/000/097/364/non_2x/free-web-travel-vector-background-with-beautiful-landscape.jpg"})`,
                backgroundSize: '100% 100%',
              fontSize: '4em',
              fontWeight: 'normal',
              margin: 0,
              display: 'inline-block',
  
  
          }}
            textAlign='center'
           
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container >
                <Menu.Item inverted  as='a' active href='/home' >
                  Home
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button href='/admin-login' secondary as='a' inverted={!fixed}style={{ marginRight: '3.1em' }}>
                    Admin LogIn
                  </Button>
                  {/* <Button secondary as='a' inverted={!fixed} primary={fixed} style={{ marginRight: '3em' }}>
                    Admin SignUp
                  </Button> */}
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
            <Menu.Item as='a'>Log in</Menu.Item>
            <Menu.Item as='a'>Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Main = () => (
  <ResponsiveContainer>
    <Segment  style={{ marginLeft:'230px',padding: '6em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
      <Grid.Row textAlign='center'>
      <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
      <Card>
       <Image src='https://tse4.mm.bing.net/th?id=OIP.btZqFyyUspWgIJEIwkWPlAHaFj&pid=Api&P=0&w=234&h=176' wrapped ui={false} />
       <Card.Content>
         <Card.Header>Train Booking</Card.Header>
         <Card.Meta>
         </Card.Meta>
        <Card.Description>
         To Search for Train
        </Card.Description>
       </Card.Content>
       <Card.Content extra>
       <a>
        <Icon name='train' />
        <Button href='/home'primary>Train Booking</Button>
       </a>
      </Card.Content>
      </Card  >
      </Grid.Column >
      <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em',paddingLeft:'22em' }}>
      <Card >
       <Image src='https://tse4.mm.bing.net/th?id=OIP.kK9tVGl-UjaV9qD0NZRVLgHaE7&pid=Api&P=0&w=269&h=180' wrapped ui={false} />
       <Card.Content>
         <Card.Header>Airplane Booking</Card.Header>
         <Card.Meta>
         </Card.Meta>
         <Card.Description>
          To Search for Airplane
         </Card.Description>
       </Card.Content>
       <Card.Content extra>
        <a>
         <Icon name='train' />
         <Button href='/home'primary>Book Airplane</Button>
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