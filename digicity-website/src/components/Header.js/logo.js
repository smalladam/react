import React, { PropTypes } from 'react'

class logo extends React.Component {
  render () {
    let styles={
      root:{
        backgroundColor:'#fff',
        height:'80px',
      },
      title:{
        float:"left",
        color:"#000",
        lineHeight:"80px",
        fontSize:'28px',
        paddingLeft:"200px",
      },
      txt:{
        float:"left",
        marginLeft:'200px',
        border:"1px solid #e27210e",
      }，
      btn:{
        backgroundColor:'#e27210e',
        color:"#fff",

      }
    }
    return(
      <div style={styles.root}>
        <h1 style={style.title}>第嘉学社</h1>
        <div style={styles.txt}>
        <input type="text" id="txt" placeholder="手机号"/>
        <input type="button" id="btn"  value="领取助学金"/>
        </div>
      </div>
    )
  }
}

export default logo;
