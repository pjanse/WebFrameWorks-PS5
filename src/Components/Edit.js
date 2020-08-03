import React from 'react';
import axios from "axios";


class Edit extends React.Component{

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
      axios
        .get("https://problem-set-5-285221.firebaseio.com/blog.json",{
          body: {
            text: "Hello",
          },
        }).then((res)=>{
          console.log(res);
        }).catch((err)=>{
          console.log(err);
        });
      
    }
  
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
        <div className='Edit'>
            <h1>Edit Page</h1>
                {/* {this.getBlogHandle()} */}
        </div>
        )
    }
  }

  export default Edit;