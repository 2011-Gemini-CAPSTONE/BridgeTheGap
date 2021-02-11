import React from 'react'
import {connect} from 'react-redux'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import '../../public/css/salary.css'
import stateLabelValues from './Assets/UsState'
import teamNames from './Assets/Team'

class AddSalary extends React.Component {
  constructor() {
    super()
    this.state = {
      jobTitle: '',
      team: '',
      salary: '',
      city: '',
      state: '',
      experience: '',
      gender: '',
      education: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.useStyles = this.useStyles.bind(this)
  }

  useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    }
  }))

  handleSubmit = e => {
    try {
      e.preventDefault()
      // Put in add Data thunk creator
      this.setState({
        jobTitle: '',
        team: '',
        salary: '',
        city: '',
        state: '',
        experience: '',
        gender: '',
        education: ''
      })
      console.log('handleSubmit is being clicked!')
    } catch (error) {
      console.error(error.message)
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
    console.log('this is event', e.target)
  }
  render() {
    const {
      experience,
      team,
      state,
      gender,
      jobTitle,
      salary,
      city,
      education
    } = this.state
    return (
      <div className="salary-container">
        <form
          onSubmit={this.handleSubmit}
          className="salary-container"
          noValidate
          autoComplete="off"
        >
          <div className="inputForm">
            <div className={this.useStyles.root}>
              <TextField
                id="standard-basic"
                label="Job Title"
                name="jobTitle"
                value={jobTitle}
                onChange={this.handleChange}
              />
            </div>
            <div className={this.useStyles.root}>
              <TextField
                id="standard-basic"
                label="Salary"
                name="salary"
                value={salary}
                onChange={this.handleChange}
              />
            </div>
            <FormControl>
              <div className="team">
                <InputLabel id="demo-simple-select-helper-label">
                  Team
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  name="team"
                  value={team}
                  onChange={this.handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {teamNames.map(t => (
                    <MenuItem key={t} value={t}>
                      {t}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>Select Team</FormHelperText>
              </div>
            </FormControl>
            <FormControl>
              <div className="gender">
                <InputLabel id="demo-simple-select-helper-label">
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  name="gender"
                  value={gender}
                  onChange={this.handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Non-Binary">Non-Binary</MenuItem>
                </Select>
                <FormHelperText>Select Gender</FormHelperText>
              </div>
            </FormControl>
            {/* </div> */}
            {/* <div className="dropdownForm"> */}
            <div className={this.useStyles.root}>
              <TextField
                id="standard-basic"
                label="Education"
                name="education"
                value={education}
                onChange={this.handleChange}
              />
            </div>
            <div className={this.useStyles.root}>
              <TextField
                id="standard-basic"
                label="City"
                helperText="i.e: New York City"
                name="city"
                value={city}
                onChange={this.handleChange}
              />
            </div>
            <FormControl className="state">
              <div className="state">
                <InputLabel id="demo-simple-select-helper-label">
                  State
                </InputLabel>

                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  name="state"
                  value={state}
                  onChange={this.handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {stateLabelValues.map(s => (
                    <MenuItem key={s.label} value={s.label}>
                      {s.value}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>Select State</FormHelperText>
              </div>
            </FormControl>
            <FormControl className="Experience">
              <div className="experience">
                <InputLabel id="demo-simple-select-helper-label">
                  Job Level
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  name="experience"
                  value={experience}
                  onChange={this.handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                </Select>
                <FormHelperText>Select job level</FormHelperText>
              </div>
            </FormControl>
          </div>
          <div className="buttonSalary">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect()(AddSalary)
