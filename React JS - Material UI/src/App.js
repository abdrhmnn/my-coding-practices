import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, ThemeProvider } from '@material-ui/core'
// createTheme adalah function yg akan membuat custom theme
// ThemeProvider adalah component yg akan mengwrap component lainnya utk bs menggunakan custom
// theme

// untuk properti didalam theme digunakan berdasarkan default theme (buka dokumentasi mui nya)
const theme = createTheme({
  palette: {
    secondary:{
      main: '#34df2e'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
