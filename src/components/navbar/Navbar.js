import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})

const Navbar = () => {
  const classes = useStyles()
  return (
    <div>
      <Button
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          label: classes.label, // class name, e.g. `classes-nesting-label-x`
        }}
      >
        classes nesting
      </Button>
      <form className={classes.container} noValidate>
        <TextField
          id='date'
          label='Birthday'
          type='date'
          defaultValue='2017-05-24'
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    </div>
  )
}

export default Navbar
