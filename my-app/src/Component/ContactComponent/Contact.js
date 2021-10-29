import React from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

export default class ContactUs extends React.Component{
    state = {
        nmae: '',
        email: '',
        phone: '',
        content: ''
    }

    handleChange = (event)=>{
        const target = event.target;
        const {name, value} = target;

        this.setState({
            [name]:value
        });

        //console.log(target);
    }

    handleCKeditorState = (event, editor) => {
        const data = editor.getData();
        this.setState({
            content: data
        })
        //console.log(data);
    }

    render(){   
        return(
            <div className="container"> 
                <div className="wrapper">
                <form className="form-group">
                    <h1>Contact Us Form</h1>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" value={this.state.name || ""} onChange={this.handleChange} placeholder="Enter Name" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={this.state.email || ""} onChange={this.handleChange} placeholder="Enter Email" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Phone number</label>
                        <input type="number" name="phone" value={this.state.phone || ""} onChange={this.handleChange} placeholder="Enter Phone" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        {/* <textarea col="25" rows="14" type="text" name="content" value={this.state.content || ""} onChange={this.handleChange} className="form-control" placeholder="Enter Message" /> */}
                        <CKEditor 
                            editor={ClassicEditor}
                            onInit={ editor=>{
                               
                            }}
                            config={
                                {
                                    ckfinder:{
                                        uploadUrl:'/uploads'
                                    }
                                }
                            }

                            onChange={this.handleCKeditorState}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" name="subit" className="btn btn-secondary" />
                    </div>
                </form>
                </div>
            </div>
        )
    }

}