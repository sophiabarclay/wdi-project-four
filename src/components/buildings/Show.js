import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { tokenUserId, authorizationHeader } from '../../lib/auth';


class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleAddedByClick = this.handleAddedByClick.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAddedByClick() {
    const userId = this.state.building.addedBy.id;
    console.log(this.state.building.addedBy.id);
    this.props.history.push(`/user/${userId}`);
  }

  handleLike() {
    const currentUserId = tokenUserId();
    const likes = this.state.building.likes;
    likes.push(currentUserId);
    this.setState({ likes: likes });
    axios.post(`/api/buildings/${this.props.match.params.id}/like`, this.state, authorizationHeader());
  }

  handleUnlike() {
    const currentUserId = tokenUserId();
    const likes = this.state.building.likes;
    likes.splice(likes.indexOf(currentUserId), 1);
    this.setState({ likes: likes });
    axios.post(`/api/buildings/${this.props.match.params.id}/unlike`, this.state, authorizationHeader());
  }

  componentDidMount() {
    axios
      .get(`/api/buildings/${this.props.match.params.id}`)
      .then(result => this.setState({ building: result.data }));
  }

  handleSubmit(event){
    event.preventDefault();
    axios.post(`/api/buildings/${this.props.match.params.id}/comments`, this.state, authorizationHeader())
      .then(res => this.setState({ content: '', building: res.data }));
  }

  handleChange({ target: { name, value }}){
    this.setState({ [name]: value });
    console.log('this is the state', this.state);
  }



  render() {
    console.log('RENDER');
    const building = this.state.building;
    return(
      <div className="centered-container">
        {building
          ?
          <div>
            <div className="has-text-centered">
              <div className="columns is-mobile is-centered">
                <div className="column is-6">
                  <figure className="image is-1by1">
                    <img src={building.icon} className="is-rounded"/>
                  </figure>
                </div>
              </div>
              <h1 className="title">{building.name}</h1>
              <h1 className="subtitle">{building.architect}</h1>
              {building.likes.length === 1
                ?
                <h1 className="subtitle is-size-6-mobile">{building.likes.length} like</h1>
                :
                <h1 className="subtitle is-size-6-mobile">{building.likes.length} likes</h1>}
              <h1 className="subtitle is-size-6-mobile">Added by: <a onClick={this.handleAddedByClick} >{building.addedBy.username}</a></h1>
              {building.likes.toString().includes(tokenUserId())
                ?
                <button onClick={this.handleUnlike} className="button">Unlike</button>
                :
                <button onClick={this.handleLike} className="button">Like</button>}
            </div>
            <hr/>
            <div>
              {building.comments.length >= 1
                ?
                <div>
                  <h1 className="is-size-5-mobile"> Comments</h1>
                  {building.comments && building.comments.map(
                    comment =>
                      <div key={comment._id} className="columns is-mobile">
                        <div className="column is-1">
                          <figure className="image is-24x24">
                            <img className="is-rounded" src={comment.user.image}/>
                          </figure>
                        </div>
                        <p className="column is-11 is-size-7-mobile">{comment.content}</p>
                      </div>
                  )}
                </div>
                :
                <div className="has-text-centered">
                  <p className="column is-11 is-size-7-mobile">There are no comments on this building.</p>
                </div>}
              <hr/>
              <form onSubmit={this.handleSubmit}>
                <input className="input" onChange={this.handleChange} value={this.state.content || ''} name="content" placeholder="Add a comment..."/>
              </form>
            </div>
            <hr/>
            <div>
              {building.featuredOn.length >= 1
                ?
                <div>
                  <h1 className="is-size-5-mobile">Featured on</h1>
                  {building.featuredOn && building.featuredOn.map(
                    tour =>
                      <div key={tour._id}>
                        <Link id={tour._id} to={`/tours/${tour._id}`} className="is-size-7-mobile"><strong>{tour.name}</strong>: {tour.description}</Link>
                      </div>
                  )}
                </div>
                :
                <div className="has-text-centered">
                  <p className="column is-11 is-size-7-mobile">This building is not featured on any tours.</p>
                </div>}
            </div>
          </div>
          :
          <p>Please wait...</p>}
      </div>
    );
  }
}

export default Show;
