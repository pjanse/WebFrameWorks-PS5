import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Components/Home';
import Create from './Components/Create';
import Edit from './Components/Edit';
import axios from "axios";
import './App.css';
import './MyStuff/mycss.css';

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     blog: " "
  //   }
  // }

  // componentDidMount(){
  //   this.setState({

  //   });
  // }


  // postBlogHandle = () => {
  //   axios.post("https://problem-set-5-285221.firebaseio.com/blog.json",{
  //     body: {

  //     }
  //   }).then((res)=>{
  //     console.log(res);
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // };
  
  // getBlogHandle = () => {
  //   axios
  //     .get("https://problem-set-5-285221.firebaseio.com/blog.json",{
  //       body: {
          
  //       },
  //     }).then((res)=>{
  //       console.log(res);
  //     }).catch((err)=>{
  //       console.log(err);
  //     });
    
  // }

  // updateBlogHandle = () => {
  //   axios.patch('https://problem-set-5-285221.firebaseio.com/blog.json', {
  //     body: {
  //       name: "Andrew",
  //       age: 12,
  //     },
  //   }).then((res)=>{
  //     console.log(res);
  //   }).catch((err)=>{
  //     console.log(err);
  //   });

  // }

  // deleteHandle = () => {
  //   axios.delete("https://fir-app-282822.firebaseio.com/person/${id}.json", {
  //     body: {
  //       name: "Andrew",
  //       age: 12,
  //     },
  //   }).then((res)=>{
  //     console.log(res);
  //   }).catch((err)=>{
  //     console.log(err);
  //   }); 
  // }

  render(){
    return (
      <div className="App">
        <div>
          <Router>
            <nav>
              <ul className = "navbar">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/create">Create page</Link>
                </li>
                <li>
                  <Link to="/edit">Edit page</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/create" component={Create}/>
              <Route path="/edit" component={Edit}/>
            </Switch>
          </Router>
        </div>
        <div>
          
        </div>
      </div>
    )}
}
// const Home = () =>{
//   const state={
//     blogtxt: "hello",
//   }
//   const postBlogHandle = () => {
//     axios.post("https://problem-set-5-285221.firebaseio.com/blog.json",{
//       body: {
//         text: "Hello",
//       }
//     }).then((res)=>{
//       console.log(res);
//     }).catch((err)=>{
//       console.log(err);
//     })
//   };
  
//   const getBlogHandle = () => {
//     axios
//       .get("https://problem-set-5-285221.firebaseio.com/blog.json",{
//         body: {
          
//         },
//       }).then((res)=>{
//         console.log(res);
//       }).catch((err)=>{
//         console.log(err);
//       });
    
//   }

//   const updateBlogHandle = () => {
//     const id = "Blog";
//     axios.patch('https://problem-set-5-285221.firebaseio.com/blog.json', {
//       body: {
//         name: "Andrew",
//         age: 12,
//       },
//     }).then((res)=>{
//       console.log(res);
//     }).catch((err)=>{
//       console.log(err);
//     });

//   }
//   return(
//     <div>
//       Home Page
//       <div>
//         <input type='text' onClick={postBlogHandle}></input>
//         <button>Add blog</button>
//         <div>
//           this.state.blog
//         </div>
//       </div>
//     </div>
//   )
// }

// const Create = () =>{
//   return(
//     <div>
//       Create page
//     </div>
//   )
// };

// const Edit = () =>{
//   return(
//     <div>
//       Edit page
//     </div>
//   )
// }

export default App;
