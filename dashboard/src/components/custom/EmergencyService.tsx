import {MapContainer} from "./MapContainer.tsx";
import {useState} from "react";
import {TimerService} from "./TimerService.tsx";

export const EmergencyService = () => {
    const [step, setStep] = useState<number>(1);
    const [selectService, setSelectService] = useState<number | null>(null);
    const [startTimer, setStartTimer] = useState<boolean>(false);
    const [finishTimer, setFinishTimer] = useState<boolean>(false);
    const handlerStep = (method: string) => {
        if (method === "next") {
            setStep(step + 1)
            return
        }
        if (method === 'reset') {

            setStep(1)
            return;
        }

        setStep(step - 1)
    }
    const finishTimerHandler = () => {
        setFinishTimer(true)
    }
    return (
        <>
            <div className="emergency-service">
                <div className="title-container">
                    <h3 className="h3">Emergency Tow Truck Services</h3>
                    <p>Get immediate assistance for your vehicle</p>
                </div>
                <div className="map-containeer">
                    <MapContainer/>
                    <div className="container-map-wrapper">
                        {step === 1 ? <div className="container-form-order-parking">
                            <div className="container-emergency-services">
                                <div className="input-container">
                                    <input name={'address'} placeholder={'Evacuate a car from '}/>
                                    <button>
                                        <span>Select on the map</span>
                                    </button>

                                </div>
                                <div className="input-container">
                                    <input name={'address'} placeholder={'Evacuate a car to'}/>
                                    <button>
                                        <span>Select on the map</span>
                                    </button>
                                </div>
                                <div className="container-service-wrapper">
                                    <div className={`item-service ${selectService === 1 ? 'active-service' : ''}`}
                                         onClick={() => setSelectService(1)}>
                                        <div className="container-image-content-service">
                                            <div className="image-container">
                                                <img src="/img/imgtrack-1.png" alt="11"/>
                                            </div>
                                            <div className="text-content">
                                                <p>Super Car</p>
                                                <span>10 min</span>
                                            </div>
                                        </div>
                                        <div className="price-container">
                                            <span>1800 ₴</span>
                                        </div>
                                    </div>
                                    <div className={`item-service ${selectService === 2 ? 'active-service' : ''}`}
                                         onClick={() => setSelectService(2)}>
                                        <div className="container-image-content-service">
                                            <div className="image-container">
                                                <img src="/img/imgtrack-2.png" alt="11"/>
                                            </div>
                                            <div className="text-content">
                                                <p>Super Car</p>
                                                <span>10 min</span>
                                            </div>
                                        </div>
                                        <div className="price-container">
                                            <span>1800 ₴</span>
                                        </div>
                                    </div>
                                    <div className={`item-service ${selectService === 3 ? 'active-service' : ''}`}
                                         onClick={() => setSelectService(3)}>
                                        <div className="container-image-content-service">
                                            <div className="image-container">
                                                <img src="/img/imgtrack-3.png" alt="11"/>
                                            </div>
                                            <div className="text-content">
                                                <p>Super Car</p>
                                                <span>10 min</span>
                                            </div>
                                        </div>
                                        <div className="price-container">
                                            <span>1800 ₴</span>
                                        </div>
                                    </div>
                                    <div className={`item-service ${selectService === 4 ? 'active-service' : ''}`}
                                         onClick={() => setSelectService(4)}>
                                        <div className="container-image-content-service">
                                            <div className="image-container">
                                                <img src="/img/imgtrack-1.png" alt="11"/>
                                            </div>
                                            <div className="text-content">
                                                <p>Super Car</p>
                                                <span>10 min</span>
                                            </div>
                                        </div>
                                        <div className="price-container">
                                            <span>1800 ₴</span>
                                        </div>
                                    </div>

                                </div>
                                <button className={`main-btn-emergency`} onClick={() => handlerStep('next')}>
                                    <span>Order tow track</span>
                                </button>
                            </div>
                        </div> : null}
                        {step === 2 ? <div className={'container-form-order-parking'}>
                            <div className="timer-container">
                                <div className="title-timer">
                                    <p>Expected time of arrival </p>
                                </div>
                                {finishTimer ? <div className="timer-finish">
                                    <span>TOW TRUCK ARRIVED</span>
                                </div> : <TimerService start={startTimer} onFinish={finishTimerHandler}/>}


                            </div>
                            <div className="container-item-parkink">
                                <div className="item-image">
                                    <img src="/img/imgtrack-1.png" alt=""/>
                                </div>
                                <div className="content-container">
                                    <p><span>Tow truck service:</span>Car Help</p>
                                    <p><span>Price:</span> 550₴</p>
                                    <p><span>Driver:</span> Antonio Galucho</p>
                                </div>

                            </div>
                            <div className="container-check-wrapper">
                                <div className="line-header-container">
                                    <p>Your car:</p>
                                    <p>Tow truck tons:</p>
                                </div>
                                <div className="content-body-container">
                                    <p>Skoda Superb</p>
                                    <p>2,5 t</p>
                                </div>
                            </div>
                            <div className="btn-group">
                                <button onClick={() => handlerStep('reset')}>
                                    <span>Cancel</span>
                                </button>
                                <button onClick={() => setStartTimer(true)}>
                                    <span>{startTimer ? 'Follow map' : 'Continue'}</span>
                                </button>
                            </div>
                        </div> : null}


                    </div>
                </div>
            </div>
        </>
    )
}