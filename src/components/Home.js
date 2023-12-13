
import Notes from './Notes';

const Home = (props) => {
  const {showAlert} = props
  // fetching notes from backend 
  return (
    <div>
       <Notes showAlert={showAlert}/> 
  </div>
  
  )
}

export default Home;
