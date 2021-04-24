import React, { Component } from 'react'
import { Dropdown, Grid, Segment } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Tier1', value: 1 },
  { key: 2, text: 'Tier 2', value: 2 },
  { key: 3, text: 'Tier 3', value: 3 },
  { key: 4, text: 'General', value: 4 },
  { key: 5, text: 'Sleeper', value: 5 },
  

]

export default class DropdownExampleControlled extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state

    return (
      <Grid columns={2}>
        <Grid.Column inverted style={{marginLeft:'5%',marginTop:"25px"}}>
          <Dropdown
            onChange={this.handleChange}
            options={options}
            placeholder='Coach Type'
            selection
            value={value}
          />
        </Grid.Column>
      </Grid>
    )
  }
}