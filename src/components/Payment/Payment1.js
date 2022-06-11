import React from 'react';
import './Payment.scss';
import ingenico from './ingenico.PNG';
import { Visa, Paypal, Mastercard, Googlepay, Applepay, Hsbc } from "react-pay-icons";
import swal from 'sweetalert';
import { Link } from 'react-router-dom';



export default class Payment1 extends React.Component {
    constructor(props) {
        super(props);
        this.showAlert = this.showAlert.bind(this);
        //binding sweet alert swal popup
    }



    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/sweetalert/dist/sweetalert.min.jss";
        script.async = true;
        document.body.appendChild(script);
    }

    submit(e){
        e.preventDefault();
    }

    showAlert() {
        swal("Booking Successful", "Wishing you happy journey with us ", "success");
    }
    render() {

        return (
            <div className='text-white' style={{
                backgroundColor: 'rgba(0,0,0, 0.4)', width: '140%', margin: '10px',
                borderRadius: '5px'
            }}>
                <div className="container-fluid">
                    <div className='row' style={{ height: 'inherit' }}>
                        <div className="col-md-6 left">

                            <div className="order-summary">
                                <label style={{ marginTop: '1rem' }}><b>Order Summary</b></label>
                                <p>Order reference number: 123456</p>
                                <div className="order-one mt-2">
                                    <img src="https://img.icons8.com/dusk/32/undefined/bus--v1.png" />
                                    <label> <b>Orange tour travels</b>  </label>
                                    <span style={{ float: "right" }}><b>Surat </b> &nbsp; - &nbsp; <b>Mumbai </b></span>
                                    <p>A/C Seater / Sleeper (2+1)</p>
                                </div>
                                <label> <b>Boarding point</b> </label>
                                <p>AVP Mall</p>
                                <label> <b>Dropping point</b> </label>
                                <p>Mumbai Highway</p>

                                <label style={{ textDecoration: 'underline' }}> <b>Cost break up</b></label>
                                <p>
                                    <span>Base fare</span>
                                    <span style={{ float: "right" }}>&#8364;103.80</span>
                                </p>
                                <p>
                                    <span>GST</span>
                                    <span style={{ float: "right" }}>&#8364;4.82</span>
                                </p>
                                <p>
                                    <label>
                                        <b>Total</b>
                                    </label>
                                    <label style={{ float: "right" }}>
                                        <b>&#8364;108.12</b>
                                    </label>
                                </p>
                                <div class="d-grid gap-2">
                                    <button type="button" class="btn btn-success" onClick={this.showAlert}>Continue to secure payment</button>
                                    <Link to="/"><button className="btn btn-warning" onClick={(e) => this.submit}>Reset Search</button></Link>
                    
                                </div>
                    
                            </div>

                        </div>
                        <div class="vr mx-4 p-0 my-4" style={{ border: '1px groove white' }}></div>
                        <div className="col-5 p-0 right">
                            <div style={{ lineHeight: 4, paddingLeft: '20px' }}>
                                <b>Total EUR 108.12</b>
                            </div>
                            <h4 style={{ paddingTop: '30px', paddingLeft: '20px' }}>How would you like to pay?</h4>
                            <div class="form-check ms-5 mb-3">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Paypal
                                </label>
                                <Paypal className="payIcons ms-1" style={{ width: 45 }} />
                            </div>
                            <div class="form-check ms-5 mb-3">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Master card
                                </label>
                                <Mastercard className="payIcons ms-1" style={{ width: 45 }} />
                            </div>
                            <div class="form-check ms-5 mb-3">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Visa
                                </label>
                                <Visa className="payIcons ms-1" style={{ width: 45 }} />
                            </div>
                            <div class="form-check ms-5 mb-3">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Apple pay
                                </label>
                                <Applepay className="payIcons ms-1" style={{ width: 45 }} />
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="text-center text-lg-start">
                    <div className="text-center p-3">
                        <p>Payment processed by</p>
                        <img src={ingenico}></img>
                    </div>
                </footer>
            </div>
        );
    }
}

