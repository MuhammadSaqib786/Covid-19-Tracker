import React from 'react';
import './index.css'
import {Cards} from './Components';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component {

  state = {
    data : {},
  }
  async componentDidMount()
  {
    const fetcheddata = await fetchData();
    this.setState({data:fetcheddata});
   
  }
  render()
  {
    const {data} = this.state;
    return (
 <div className={styles.container}>
   <Cards data={data}/>
   
  
   
 </div>
    )
}
  }

export default App;
