import React from 'react';

class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name, host, document } = this.props;
    const scriptId = `micro-frontend-script-${name}`;
    console.log('asset-manifest.json`: ', `${host}/asset-manifest.json`);

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    // fetch(`${host}/asset-manifest.json`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //   }
    // })
    
    fetch(`${host}/asset-manifest.json`)
      .then(res => {
        res.json();
        console.log('res', res);
      })
      .then(manifest => {
        console.log('manifest: ', manifest);
        const script = document.createElement('script');
        script.id = scriptId;
        script.crossOrigin = '';
        script.src = `${host}${manifest.files['main.js']}`;
        script.onload = this.renderMicroFrontend;
        document.head.appendChild(script);
      })
      .catch(err => console.log('err', err));
  }

  componentWillUnmount() {
    const { name, window } = this.props;
    window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const { name, window, history } = this.props;
    window[`render${name}`](`${name}-container`, history);
  };

  render() {
    return <main id={`${this.props.name}-container`} />;
  }
}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;