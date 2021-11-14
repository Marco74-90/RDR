import axios from 'axios'
import React, {Component} from 'react'
import { Form, Button } from 'react-bootstrap'
import ThumbnailGrid from './ThumbnailGrid'
import ThumbnailWindow from './ThumbnailWindow'


export default class PhotoAlbum extends Component {

    componentDidMount(){
        axios.get(`http://localhost:3000/api/v1/gallery_posts`, {withCredentials:true})
        .then(photos => {
            const filteredPhotos = photos.data.filter(photo => photo.user_id === this.state.user_id)
            console.log(photos.data)
            this.setState({
                thumbnails:filteredPhotos
            })
        })
    }

     constructor(props) {
         super(props)

         this.state = {
            photo: null,
            title: "",
            caption:"",
            user_id: this.props.user.id,
            thumbnails:[],
            activeIndex:0,
            gallery_post: []
        }
    }

    filteredPhotos = () => {
        this.state.thumbnails.filter(thumbnail => thumbnail.user_id === this.state.user_id)
    }
    
    photoSelectedHandler = (e) => {
        console.log(e.target.files[0])
        this.setState({
            image: e.target.files[0]
        })

    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    uploadPhoto = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', this.state.title)
        formData.append('caption', this.state.caption)
        formData.append('photo', e.target.photo.files[0])
        formData.append( 'user_id', this.state.user_id)
        axios.post("http://localhost:3000/api/v1/gallery_posts", formData, {withCredentials:true})
        .then(res => {console.log(res)})
        .then(this.props.history.push('/Dashboard'))
    }

    renderThumbnails = () => {
        const {thumbnails, activeIndex} = this.state
        if(thumbnails.length) {
            return(
                <>
                    <ThumbnailWindow activeThumbnail={thumbnails[activeIndex]}/>
                    <ThumbnailGrid
                        clickHandler={this.clickHandler}
                        thumbnails={thumbnails} />
                </>
            )
        }
        return null
    }

    clickHandler = (e) => {
        const newActiveIndex = e.target.getAttribute('data-index')
        this.setState({
            activeIndex: newActiveIndex
        })

    }

    renderText = () => {
        const {thumbnails, activeIndex} = this.state

        if(thumbnails.length) {
            return(
                <div className="post-text">
                    <h1>{thumbnails[activeIndex].title}</h1>
                    <p>{thumbnails[activeIndex].caption}</p>
                </div>
            )
        }
    }
       
    render() {

      
        return(
            <div>
                <header className="photoHeader"><h1> My Photos</h1></header>
                <div style={PhotoAlbumStyles}> 
                    <div style={{flex: '1'}}>
                        {this.renderThumbnails()}
                    </div>
                    <div  className="right-side" style={{flex: '1', padding: '40px'}}>
                        {this.renderText()}
                    </div>
                </div>
                <div className="photoForm">
                <Form onSubmit={this.uploadPhoto} encType="multipart/form-data" >
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="Text" name="title"placeholder="Title" onChange={this.onChangeHandler}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Caption</Form.Label>
                        <Form.Control as="textarea" name="caption" rows={3} onChange={this.onChangeHandler} />
                    </Form.Group>
                    <Form.Group>
                        <Form.File name="photo" type="file" onChange={this.photoSelectedHandler} label="Upload Photo" accept="image/*"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Upload
                    </Button>
                </Form>
                </div>
            </div>
        )
    }
    
}

const PhotoAlbumStyles = {
    background: '#efe1bd', //delete once resources are loaded or change style to match app 
    height: '500px',
    width: '1024px',
    margin: '50px auto',
    display: 'flex',

}



//// fetch("http://localhost:3000/api/v1/gallery_posts", {
//            method: "POST",
//            body: formData
////         })
////         .then(data => this.setState({gallery_post: data.gallery_post}))

//// fetch("http://localhost:3000/api/v1/gallery_posts",{
//            Authorization: `Bearer ${localStorage.token}`
////        })
////        .then(res => res.json())
////        .then(thumbnails => this.setState({
//            thumbnails: thumbnails
////        }))