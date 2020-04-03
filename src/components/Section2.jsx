import React, { Component } from "react";

class Section2 extends Component {
  render() {
    return (
      <section>
        <div className="section2">
          <div className="sec2-upper-box">
            <div className="sec2-left-box">
              <img
                className="hand-phone"
                alt="hand phone"
                src="/Assets/documents@2x.png"
              />
            </div>
            <div className="sec2-rigth-box">
              <h3 className="sec2-rbox-title">
                <p className="main-title">
                  Title Leap empowers realtors and keeps buyers & sellers in the
                  loop 24/7
                </p>
                
                <p className='sub-title'>
                  Close more deals in less time, and have more time to find new
                  business.
                </p>
              </h3>
              <div className="sec2-pocket-list">
                <div className="pocket-item">
                  <h4 className="pocket-title">
                    <img
                      className="pocket-title-img"
                      alt="icon"
                      src="/Assets/icon_communication.svg"
                    />
                    <span className="pocket-title-text">
                      Integrated Communication
                    </span>
                  </h4>
                  <p className="pocket-content">
                    No more searching through hundreds of unrelated emails and
                    phone messages. They are saved in our exclusive
                    communication log.
                  </p>
                </div>
                <div className="pocket-item">
                  <h4 className="pocket-title">
                    <img
                      className="pocket-title-img"
                      alt="icon"
                      src="/Assets/icon_list.svg"
                    />
                    <span className="pocket-title-text">Punch List</span>
                  </h4>
                  <p className="pocket-content">
                    Title Leap provides a checklist and real-time status of
                    everything the title agent does from contract to close,
                    keeping agents and parties in the know.
                  </p>
                </div>
                <div className="pocket-item">
                  <h4 className="pocket-title">
                    <img
                      className="pocket-title-img"
                      alt="icon"
                      src="/Assets/icon_bell.svg"
                    />
                    <span className="pocket-title-text">
                      Critical Date Reminders
                    </span>
                  </h4>
                  <p className="pocket-content">
                    Title Leap provides the critical dates and automatic text
                    and email reminders to all parties reducing confusion and
                    phone calls.
                  </p>
                </div>
                <div id='pusher'  className="pocket-item">
                  <h4 className="pocket-title">
                    <img
                      className="pocket-title-img"
                      alt="icon"
                      src="/Assets/icon_documents.svg"
                    />
                    <span className="pocket-title-text">
                      Documents & Storage
                    </span>
                  </h4>
                  <p className="pocket-content">
                    Instant access to all documents… now and forever. Including
                    surveys, reports, estoppels, everything!
                  </p>
                </div>
                <div id='pusher'  className="pocket-item">
                  <h4 className="pocket-title">
                    <img
                      className="pocket-title-img"
                      alt="icon"
                      src="/Assets/icon_devices.svg"
                    />
                    <span className="pocket-title-text">
                      Fewer Calls and Emails
                    </span>
                  </h4>
                  <p className="pocket-content">
                    Agents and transaction managers have more time to find New
                    Business because babysitting the title company is a thing of
                    the past.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sec2-below-box">
            <h3 className="below-box-text">
              Closings have not changed in 100 years — it’s time for a quantum
              leap.
            </h3>
            <button className="below-box-button">Request Demo</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Section2;
