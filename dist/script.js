function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const data = [
{ id: 'Closed hi-hat', letter: 'Q', src: 'https://www.fesliyanstudios.com/play-mp3/6700' },
{ id: 'Snare', letter: 'W', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
{ id: 'Kick-drum', letter: 'E', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
{ id: 'Open hi-hat', letter: 'A', src: 'https://www.fesliyanstudios.com/play-mp3/6711' },
{ id: 'Tom tom', letter: 'S', src: 'https://www.fesliyanstudios.com/play-mp3/6688' },
{ id: 'Tom tom 2', letter: 'D', src: 'https://www.fesliyanstudios.com/play-mp3/6694' },
{ id: 'Ride', letter: 'Z', src: 'https://www.fesliyanstudios.com/play-mp3/6736' },
{ id: 'Crash', letter: 'X', src: 'https://www.fesliyanstudios.com/play-mp3/6665' },
{ id: 'Bazinga!!!', letter: 'C', src: 'https://www.myinstants.com/media/sounds/bazinga.swf.mp3' }];


class DrumPad extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "handleKeydown",











    e => {
      if (e.keyCode === this.props.letter.charCodeAt()) {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.id);
      }
    });_defineProperty(this, "handleClick",


    () => {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    });}componentDidMount() {console.log(this.audio);document.addEventListener('keydown', this.handleKeydown);window.focus();}componentWillUnmount() {document.removeEventListener('keydown', this.handleKeydown);}

  render() {
    return (
      React.createElement("div", {
        className: "drum-pad",
        id: this.props.id,
        onClick: this.handleClick },

      React.createElement("h1", null, this.props.letter),
      React.createElement("audio", { id: this.props.letter,
        className: "clip",
        src: this.props.src,
        ref: ref => this.audio = ref })));



  }}


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleDisplay",





    display => this.setState({ display }));this.state = { display: 'Click or Press a Key' };}

  render() {
    return (
      React.createElement("div", { id: "drum-machine" },
      React.createElement("div", { id: "display" }, this.state.display),
      React.createElement("div", { id: "drum-pads" }, data.map((d) =>
      React.createElement(DrumPad, {
        key: d.id,
        id: d.id,
        letter: d.letter,
        src: d.src,
        handleDisplay: this.handleDisplay })))));




  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));