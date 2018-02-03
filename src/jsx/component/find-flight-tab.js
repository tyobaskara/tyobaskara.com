import React, { Component } from 'react';
import AirportsAC from './airports-autocomplete';

export default class FindFlightTab extends Component {
    render() {
        return (
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label">Origin</label>
                            <AirportsAC id="departure" placeholder="From"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label">Destination</label>
                            <AirportsAC id="arrival" placeholder="To"/>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
