import React from 'react';
import Dropzone from "react-dropzone";


class DragNDrop extends React.Component {
    constructor() {
        super()
        this.state = {
            files: [],
            accepted: [],
            rejected: [],
            dropzoneActive: false
        }
    }

    onDragEnter() {
        this.setState({
            dropzoneActive: true
        });
    }

    onDragLeave() {
        this.setState({
            dropzoneActive: false
        });
    }

    onDrop(files) {
        this.setState({
            files,
            dropzoneActive: false
        });
    }

  render() {
      const overlayStyle = {
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          padding: '2.5em 0',
          background: 'rgba(0,0,0,0.5)',
          textAlign: 'center',
          color: '#fff'
      };

    return (
        <section>
        { dropzoneActive && <div style={overlayStyle}>Drop files...</div> }
        <div className="dropzone">
          <Dropzone
      accept="image/jpeg, image/png"
      onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}
  >
  <p>Try dropping some files here, or click to select files to upload.</p>
      <p>Only *.jpeg and *.png images will be accepted</p>
      </Dropzone>
      </div>
      <aside>
      <h2>Accepted files</h2>
      <ul>
      {
          this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
  }
  </ul>
      <h2>Rejected files</h2>
      <ul>
      {
          this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
  }
  </ul>
      </aside>
      </section>
    );
  }
}

export default DragNDrop;
