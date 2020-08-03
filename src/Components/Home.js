import React from 'react';
import axios from "axios";
import '../Components/components.css';
import '../App.css';

class Home extends React.Component{
    state = {
        blogs: [],
    }

    // const[blogs, setBlogs] = useState([]);

    postBlogHandle = () => {
      axios.post("https://problem-set-5-285221.firebaseio.com/blog.json",{
        body: {
          text: "Hello",
        }
      }).then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      })
    };
    
    getBlogHandle = () => {
      this.setState({
        blogs:  
        axios.get("https://problem-set-5-285221.firebaseio.com/blog.json",{
          body: {
            text: "Hello",
          },
        }).then((res)=>{
          console.log(res);
        }).catch((err)=>{
          console.log(err);
        })});
    }
    // componentDidMount(){
    //     // {this.getBlogHandle()};
    // }
  
    // const updateBlogHandle = () => {
    //   const id = "Blog";
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
    render(){
        return(
        <div className='Home'>
            <h1>Home Page</h1>
            <div id='addBlog'>
                <input type='text' id='txtBlog'></input>
                <button onClick={() => this.postBlogHandle()}>Add blog</button>
                {this.getBlogHandle()}
            {/* <div>
                {this.state.blogs.map((blog, index) => {
                    return (
                        <div key={index}>
                            {blog.text}
                        </div>
                    );
            })}
            </div> */}
            </div>
        </div>
        )
    }
  }

  export default Home;