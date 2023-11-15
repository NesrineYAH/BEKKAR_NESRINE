import React, { Component } from 'react';
import { Link } from "react-router-dom";


class TxtRotate extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        toRotate: JSON.parse(props.toRotate),
        loopNum: 0,
        txt: '',
        isDeleting: false,
      };
    }
  
    componentDidMount() {
      setTimeout(() => {
      this.tick();
      }, 3000)
    }
  
    tick() {
      const { toRotate, loopNum, txt, isDeleting } = this.state;
      const i = loopNum % toRotate.length;
      const fullTxt = toRotate[i];
  
      if (isDeleting) {
        this.setState({ txt: fullTxt.substring(0, txt.length - 1) });
      } else {
        this.setState({ txt: fullTxt.substring(0, txt.length + 1) });
      }
  
      let delta = 300 - Math.random() * 100;
      const that = this;
  
      if (isDeleting) {
        delta /= 2;
      }
  
      if (!isDeleting && txt === fullTxt) {
        this.setState({ isDeleting: true });
        delta = this.props.period;
      } else if (isDeleting && txt === '') {
        this.setState(prevState => ({
          isDeleting: false,
          loopNum: prevState.loopNum + 1,
          txt: '',
        }));
        delta = 1000;
      }
      setTimeout(() => {
        that.tick();
      }, delta);
    }
  
  render() {
    return (
      <span className="txt-rotate">
        <span className="wrap">{this.state.txt}</span>
      </span>
    );
  }
}

class TxtToDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      h1Text: '',
      h2Text: '',
    };

    this.h1Ref = React.createRef();
    this.h2Ref = React.createRef();
  }

  typeEffect(text, speed, setStateKey) {
    let j = 0;
  
    let timer = setInterval(() => {
      if (j < text.length) {
        const lastChar = text.charAt(j);
        console.log(lastChar);
        this.setState(prevState => ({
          [setStateKey]: prevState[setStateKey].slice(0, j-1) + lastChar,
        }));
        j+=1;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }

  componentDidMount() {
    const speed = 100;
    const h1 = this.h1Ref.current;
    const h2 = this.h2Ref.current;

    const h1Text = "Nesrine BEKKAR YAHOUM";
    const h2Text = "développeur web - intégrateur";
    const h1Delay = h1Text.length * speed;

    this.setState({
      h1Text: '',
      h2Text: '',
    });

    setTimeout(() => {
      this.typeEffect(h1Text, speed, 'h1Text');
    }, 1000);
    
    setTimeout(()=> {
      this.typeEffect(h2Text, speed, 'h2Text');
    }, 1000 + h1Delay)


    h1.classList.remove("hidden");


    setTimeout(() => {
      h2.classList.remove("hidden");
    }, h1Delay);
  }

  render() {
    return (
      <div className='txt-display'>
        <h1 ref={this.h1Ref} className='hidden'>{this.state.h1Text}</h1>
        <h2 ref={this.h2Ref} className='hidden'>{this.state.h2Text}</h2>
      </div>
    )
  }
}
  
class About extends Component {
  render() {
    return (
      <section>
        <div id="About">
          <div className="presentation">
            <p>
              Bonjour {' '}
              <TxtRotate
                toRotate='["tout le monde!", "Visiteur !", "Recruteur ?!"]'
                period="3000"
              />
              <span className='wrap-border'>
                |
              </span>
            </p>
            <TxtToDisplay />
           
            <button  className="glow-on-hover btn"><Link to="/#Profil" onClick={this.handleLinkClick}>Plus d'info</Link></button>
            {/* <button className='btn btn-about lightblue-btn'><Link to="/#Profil">Plus d'info</Link></button>
            */}

          </div>
        </div>
      </section>
    );
  }
}

export default About;