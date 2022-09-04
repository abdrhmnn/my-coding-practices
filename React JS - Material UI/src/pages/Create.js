import React, { useState } from 'react'
import { Typography, Button, ButtonGroup, Container, makeStyles, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import { useHistory } from 'react-router-dom';

// make styles hook dan selalu beri nama diawali dgn use
// const useStyles = makeStyles({
//   // properti dibawah adalah untuk setiap class name
//   btn: {
//     fontSize: 20,
//     backgroundColor: 'yellow',

//     // cara untuk menambahkan pseudo code
//     '&:hover': {
//       backgroundColor: 'blue'
//     }
//   },
//   title: {
//     textDecoration: 'underline',
//     marginBottom: 20
//   }
// })

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Create() {

  const classes = useStyles()

  // dlm kasus ini utk mengirim data ke path tertentu
  const history = useHistory()

  const [name, setName] = useState('')
  const [detail, setDetail] = useState('')
  const [nameError, setNameError] = useState(false)
  const [detailError, setDetailError] = useState(false)
  const [raido, setRadio] = useState('male')

  const handleSubmit = (e) => {
    e.preventDefault()
    setNameError(false);
    setDetailError(false);

    if(name){
      // console.log(name, raido, detail);
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        header: {"Content-type": "application/json"},
        body: JSON.stringify({ name, detail, raido })
      }).then(() => history.push('/'))
    }

    if(name === ''){
      setNameError(true)
    }

    if(detail === ''){
      setDetailError(true)
    }

  }

  return (
    <Container>
      {/* secara default typography adalah tag p, bisa kita custom dgn props variant */}
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="secondary"
      >
        Create a New Note
      </Typography>

      {/* create form with mui */}
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          label="Masukan Nama"
          fullWidth
          required
          className={classes.field}
          onChange={(e) => setName(e.target.value)}
          value={name}
          error={nameError}
        />

        <TextField
          variant="outlined"
          label="Details"
          fullWidth
          required
          className={classes.field}
          multiline
          rows={4}
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          error={detailError}
        />

        <FormControl className={classes.field}>
          <FormLabel>Silahkan Pilih</FormLabel>
          {/* Radio */}
          <RadioGroup value={raido} onChange={(e) => setRadio(e.target.value)}>
            {/* ini tdk bisa tambahkan label, utk bisa maka gunakan formcontrollabel */}
            {/* <Radio value="abdu"/>
            <Radio value="rahman"/> */}
            <FormControlLabel control={<Radio />} label="Male" value="male"/>
            <FormControlLabel control={<Radio />} label="Female" value="female"/>
          </RadioGroup>
        </FormControl>

        <Button
          // className={classes.btn}
          type="submit"
          color="secondary"
          variant="outlined"
          endIcon={<SendIcon />}
          >
          Submit
        </Button>
      </form>

      {/* group button */}
      {/* <ButtonGroup variant="contained" color="primary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}

      {/* icons */}
      {/* <SendIcon color="primary" fontSize="large"/> */}
    </Container>
  )
}
