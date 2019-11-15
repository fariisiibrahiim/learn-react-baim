import React from "react";

class ImageAlbum extends React.Component {
  render(props) {
    const { imageSrc } = this.props;
    return (
      <div>
        <img src={imageSrc} alt="user" />
      </div>
    );
  }
}

export default ImageAlbum;
