import React from 'react'

class QuoteBox extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        text: '',
        author: ''
      }
      this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
          console.log('hi')
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(res => res.json())
      .then(data =>{
      let random = Math.floor(Math.random()*data.quotes.length);
      
        this.setState({
          text: data.quotes[random].quote,
          author: data.quotes[random].author
          })
        }) 
    }
    handleClick(){
      fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(res => res.json())
      .then(data =>{
        let random = Math.floor(Math.random()*data.quotes.length);
        this.setState({
          text: data.quotes[random].quote,
          author: data.quotes[random].author
          })
        })
    }
    
    render(){
      const url = `https://twitter.com/intent/tweet?text=${this.state.text} 
  -${this.state.author}`
      return(
        <div id='quote-box'>
          <p id='text'>{this.state.text}</p>
          <p id='author'>-By {this.state.author}</p>
          <div id="buttons">
            <a href={url} id='tweet-quote' target="blank"><i class="fa fa-twitter"> </i></a>
            <button id='new-quote' onClick={this.handleClick}>Next</button>
          </div>
        </div>
      );
    }
  }
  
  export default QuoteBox