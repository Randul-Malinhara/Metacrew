import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class GoogleMap extends React.Component {
    static defaultProps = {
        center: {
            lat: 6.8921362584658326,
            lng: 79.9037238129395
            
        },
        
        zoom: 12
    };

    render() {
        return (
            
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyClBKRU9iKfSLnXVTvdv11RvKwpCrfdoQI&sensor" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={6.8921362584658326}
                        lng={79.9037238129395}
                        
                    />
                </GoogleMapReact>
            </div>
        );
    }

}

export default GoogleMap;