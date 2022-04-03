/*SET COLOURS FOR SHAPES TO ADOPT*/
const colors = [
    "#dfe0e2"/*LIGHT GREY*/,
    "#00ff00"/*NEON GREEN*/,
    "#00696b"/*DARK TEAL*/,
    "#00dfa5"/*LIGHT BLUE*/,
    "#008c6b"/*MIDDLE TEAL*/,
    "#828282"/*GREY*/,
];

/*1ST SCREEN - OPENING SCREEN SHAPE SETTINGS state.shapeStyle*/
class Shape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shapeStyle: {
        /*ON INITIAL OPENING - PADDING SIZE ADJUST SIZE OF SHAPES BEFORE .setState PADDING IS IMPLIMENTED*/
        padding: 10,

        /*ON INITIAL OPENING - MARGIN SPACE BETWEEN SHAPES BEFORE .setState MARGIN SETTINGS ARE IMPLIMENTED*/
        margin: 10,

        /*ON INITIAL OPENING - DISPLAY  .setState DISPLAY SETTINGS ARE IMPLIMENTED*/
        display: "inline-block",

        /*ON INITIAL OPENING - PULLING RANDOM SIZES AND COLOURS FROM const colors BEFORE .setState SETTINGS ARE IMPLIMENTED*/
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],

        /*ON INITIAL OPENING - RANDOM RADIUS AROUND EACH SHAPE - BY INCREASING THE NUMBER IT BECOMES A CIRCLE - LOWERING THE NUMBER CREATES SQUARES*/
        borderRadius: Math.floor(Math.random() * 100) + 1,

        /*ON INITIAL OPENING - THIS IS THE SET HEIGHT BEFORE RUNNING SIZES UNDER .setState */
        height: Math.floor(Math.random() * 125) + 1,

        /*ON INITIAL OPENING - THIS IS THE SET WIDTH BEFORE RUNNING SIZES UNDER .setState */
        width: Math.floor(Math.random() * 125) + 1,
      },
    };
  }

  /*2ND SCREEN - THIS WILL CHANGE STYLE FROM state.shapeStyle TO setState.shapeStyle*/
  /*BY SETTING TIMER TO 1000 THE SHAPES UNDER changeStyle WILL CHANGE EVERY 1 SECOND, BY SETTING TO 2000 SHAPES WILL CHANGE EVERY 2 SECONDS ETC*/
  componentDidMount() {
    this.timerID = setInterval(() => this.changeStyle(), 1000);
  }

  /*THIS CLEARS THE TIMER BEFORE CHANGING STYLE TO setState.shapeStyle*/
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  /*2ND SCREEN SHAPE SETTINGS setState.shapeStyle*/
  /*AFTER THE 1ST SCREEN IS DISPLAYED ONCE (state.shapeStyle), THEN IT WILL CHANGE STYLE TO (setState.shapeStyle) & WILL LOOP*/
  changeStyle() {
      this.setState({
      shapeStyle: {
        /*THIS PADDING SETTING CONTROLS PADDING SIZE OF THE SHAPE THE BIGGER THE NUMBER THE BIGGER THE SHAPE*/
        padding: 60,

        /*THIS MARGIN SETTING IS FOR THE SPACE BETWEEN THE SHAPES*/
        margin: 20,

        /*DISPLAY INLINE-BLOCK MEANS SHAPES RUN BESIDE EACH OTHER IN A ROW*/
        display: "inline-block",

        /*THIS WILL RANDOMISE COLOURS FROM const colors, ALSO THE SIZE AND RADIUS OF EACH SHAPE*/
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],

        /*RANDOM RADIUS AROUND EACH SHAPE - BY INCREASING THE NUMBER IT BECOMES A CIRCLE - LOWERING THE NUMBER CREATES SQUARES*/
        borderRadius: Math.floor(Math.random() * 300) + 1,

        /*HEIGHT OF EACH SHAPE CELL*/
        height: Math.floor(Math.random() * 100) + 1,

        /*WIDTH OF EACH SHAPE CELL*/
        width: Math.floor(Math.random() * 130) + 1,
      },
    });
  }
  /*THIS WILL PRINT THE state.shapeStyle SETTINGS FOR INITIAL OPEN OF SCREEN*/ 
  render() {
    return <div style={this.state.shapeStyle}> </div>;
  }
}
/*THIS IS SETTING THE AMOUNT OF SHAPES TO DISPLAY ON THE PAGE CURRENTLY i=0; i < 60 - WHICH MEANS 60 SHAPES WILL DISPLAY*/
/*E.G - IF i = 0; i < 10, THEN ONLY 10 SHAPES WILL DISPLAY ON THE PAGE*/
let shapes = [];
for (let i = 0; i < 60; i++) {
  shapes.push(<Shape key={i} />);
}

/*THROUGH REACTDOM 'render.return RESULTS WILL DISPLAY 60 SHAPES IN THE DIV "CONTAINER" */
ReactDOM.render(shapes, document.querySelector(".container"));
