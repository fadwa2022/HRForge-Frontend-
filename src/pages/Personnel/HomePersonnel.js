import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faEnvelope,
    faComment,
    faTasks,
    faTruck,
    faHeart,
    faUsers,
    faPencilSquare,
    faCheckCircle,
    faClockO,
    faTwitterSquare,
    faLinkedinSquare,
    faFacebookSquare,
    faSkype,
    faInstagram,
    faStar,
    faCheck,
 } from "@fortawesome/free-solid-svg-icons";

import '../../helpers/personnel/personnel.css';
function HomePersonnel() {
    const [activeTab, setActiveTab] = useState("activity");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div class="container bootstrap snippets bootdeys">
      <div class="row" id="user-profile">
        <div class="col-lg-3 col-md-4 col-sm-4">
          <div class="main-box clearfix">
            <h2>John Doe </h2>
            <div class="profile-status">
            <FontAwesomeIcon icon={faCheckCircle} /> Online
            </div>
            <img
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
              alt=""
              class="img-thumbnail profile-img img-responsive center-block"
            />
            <div class="profile-label">
            <button type="button" class="btn btn-danger text-white ">Admin</button>
            </div>

            <div class="profile-stars">
            <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <span>Super User</span>
            </div>

            <div class="profile-since">Member since: Jan 2012</div>

            <div class="profile-details">
              <ul class="fa-ul">
                <li>
                <span className="fa-li">
                    <FontAwesomeIcon icon={faTruck} />
                  </span>
                  Orders: <span>456</span></li>
                <li>
                <span className="fa-li">
                    <FontAwesomeIcon icon={faComment} />
                  </span>
                  Posts: <span>828</span>                </li>
                <li>
                <span className="fa-li">
                    <FontAwesomeIcon icon={faTasks} />
                  </span>
                  Tasks done: <span>1024</span>                </li>
              </ul>
            </div>

            <div class="profile-message-btn center-block text-center">
            <a href=" " className="btn btn-success text-white">
                <FontAwesomeIcon icon={faEnvelope} /> Send message
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-9 col-md-8 col-sm-8">
          <div class="main-box clearfix">
            <div class="profile-header">
              <h3>
                <span>User info</span>
              </h3>
              <a href="#" class="btn btn-primary edit-profile text-white">
              <FontAwesomeIcon class="fa fa-pencil-square fa-lg"  icon={faPencilSquare} />
 Edit profile
              </a>
            </div>

            <div class="row profile-user-info">
              <div class="col-sm-8">
                <div class="profile-user-details clearfix">
                  <div class="profile-user-details-label">First Name</div>
                  <div class="profile-user-details-value">John</div>
                </div>
                <div class="profile-user-details clearfix">
                  <div class="profile-user-details-label">Last Name</div>
                  <div class="profile-user-details-value">Doe</div>
                </div>
                <div class="profile-user-details clearfix">
                  <div class="profile-user-details-label">Address</div>
                  <div class="profile-user-details-value">
                    10880 Malibu Point,
                    <br /> Malibu, Calif., 90265
                  </div>
                </div>
                <div class="profile-user-details clearfix">
                  <div class="profile-user-details-label">Email</div>
                  <div class="profile-user-details-value">
                    johndoe@bootdey.com
                  </div>
                </div>
                <div class="profile-user-details clearfix">
                  <div class="profile-user-details-label">Phone number</div>
                  <div class="profile-user-details-value">
                    011 223 344 556 677
                  </div>
                </div>
              </div>
          
            </div>

            <div class="tabs-wrapper profile-tabs">
              <ul class="nav nav-tabs d-flex justify-content-between w-25">
              <li className={activeTab === "activity" ? "active" : ""}>
              <a href="#tab-activity" data-toggle="tab" onClick={() => handleTabClick("activity")}>
                    Activity
                  </a>
                </li>
                <li className={activeTab === "friends" ? "active" : ""}>
                <a href="#tab-friends" data-toggle="tab" onClick={() => handleTabClick("friends")}>
                    Friends
                  </a>
                </li>
                <li className={activeTab === "chat" ? "active" : ""}>
                <a href="#tab-chat" data-toggle="tab" onClick={() => handleTabClick("chat")}>
                    Chat
                  </a>
                </li>
              </ul>

              <div class="tab-content">
              <div className={`tab-pane ${activeTab === "activity" ? "in active" : "fade"}`} id="tab-activity">
                  <div class="table-responsive">
                    <table class="table">
                      <tbody>
                        <tr>
                          <td class="text-center">
                          <FontAwesomeIcon icon={faComment} />
                          </td>
                          <td>
                            John Doe posted a comment in{" "}
                            <a href="#">Avengers Initiative</a> project.
                          </td>
                          <td>2014/08/08 12:08</td>
                        </tr>
                        <tr>
                          <td class="text-center">
                          <FontAwesomeIcon icon={faTruck} />
                          </td>
                          <td>
                            John Doe changed order status from{" "}
                            <span class="label label-primary">Pending</span> to{" "}
                            <span class="label label-success">Completed</span>
                          </td>
                          <td>2014/08/08 12:08</td>
                        </tr>
                        <tr>
                          <td class="text-center">
                          <FontAwesomeIcon icon={faCheck} />

                          </td>
                          <td>
                            John Doe posted a comment in{" "}
                            <a href="#">Lost in Translation opening scene</a>{" "}
                            discussion.
                          </td>
                          <td>2014/08/08 12:08</td>
                        </tr>
                        <tr>
                          <td class="text-center">
                          <FontAwesomeIcon icon={faUsers} />
                          </td>
                          <td>
                            John Doe posted a comment in{" "}
                            <a href="#">Avengers Initiative</a> project.
                          </td>
                          <td>2014/08/08 12:08</td>
                        </tr>
                        <tr>
                          <td class="text-center">
                          <FontAwesomeIcon icon={faHeart} />

                          </td>
                          <td>
                            John Doe changed order status from{" "}
                            <span class="label label-warning">On Hold</span> to{" "}
                            <span class="label label-danger">Disabled</span>
                          </td>
                          <td>2014/08/08 12:08</td>
                        </tr>
                        <tr>
                          <td class="text-center">
                          <FontAwesomeIcon icon={faCheck} />
                          </td>
                          <td>
                            John Doe posted a comment in{" "}
                            <a href="#">Lost in Translation opening scene</a>{" "}
                            discussion.
                          </td>
                          <td>2014/08/08 12:08</td>
                        </tr>
                  
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className={`tab-pane ${activeTab === "friends" ? "in active" : "fade"}`} id="tab-friends">
                  <ul class="widget-users row">
                    <li class="col-md-6">
                      <div class="img">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          class="img-responsive"
                          alt=""
                        />
                      </div>
                      <div class="details">
                        <div class="name">
                          <a href="#">John Doe </a>
                        </div>
                        <div class="time">

                          <i class="fa fa-clock-o"></i> Last online: 5 minutes
                          ago
                        </div>
                        <div class="type">
                          <span class="label label-danger">Admin</span>
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6">
                      <div class="img">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          class="img-responsive"
                          alt=""
                        />
                      </div>
                      <div class="details">
                        <div class="name">
                          <a href="#">Mila Kunis</a>
                        </div>
                        <div class="time online">
                          <i class="fa fa-check-circle"></i> Online
                        </div>
                        <div class="type">
                          <span class="label label-warning">Pending</span>
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6">
                      <div class="img">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          class="img-responsive"
                          alt=""
                        />
                      </div>
                      <div class="details">
                        <div class="name">
                          <a href="#">Ryan Gossling</a>
                        </div>
                        <div class="time online">
                          <i class="fa fa-check-circle"></i> Online
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6">
                      <div class="img">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          class="img-responsive"
                          alt=""
                        />
                      </div>
                      <div class="details">
                        <div class="name">
                          <a href="#">Robert Downey Jr.</a>
                        </div>
                        <div class="time">
                          <i class="fa fa-clock-o"></i> Last online: Thursday
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6">
                      <div class="img">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          class="img-responsive"
                          alt=""
                        />
                      </div>
                      <div class="details">
                        <div class="name">
                          <a href="#">Emma Watson</a>
                        </div>
                        <div class="time">
                          <i class="fa fa-clock-o"></i> Last online: 1 week ago
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6">
                      <div class="img">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          class="img-responsive"
                          alt=""
                        />
                      </div>
                      <div class="details">
                        <div class="name">
                          <a href="#">George Clooney</a>
                        </div>
                        <div class="time">
                          <i class="fa fa-clock-o"></i> Last online: 1 month ago
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6">
                      <div class="img">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          class="img-responsive"
                          alt=""
                        />
                      </div>
                      <div class="details">
                        <div class="name">
                          <a href="#">Mila Kunis</a>
                        </div>
                        <div class="time online">
                          <i class="fa fa-check-circle"></i> Online
                        </div>
                        <div class="type">
                          <span class="label label-warning">Pending</span>
                        </div>
                      </div>
                    </li>
                    <li class="col-md-6">
                      <div class="img">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          class="img-responsive"
                          alt=""
                        />
                      </div>
                      <div class="details">
                        <div class="name">
                          <a href="#">Ryan Gossling</a>
                        </div>
                        <div class="time online">
                          <i class="fa fa-check-circle"></i> Online
                        </div>
                      </div>
                    </li>
                  </ul>
                  <br />
                  <a href="#" class="btn btn-success pull-right text-white" >
                    View all users
                  </a>
                </div>

                <div className={`tab-pane ${activeTab === "chat" ? "in active" : "fade"}`} id="tab-chat">
                  <div class="conversation-wrapper">
                    <div class="conversation-content">
                      <div
                        className="slimScrollDiv"
                        style={{
                          position: "relative",
                          overflow: "hidden",
                          width: "auto",
                          height: "340px",
                        }}
                      >
                        <div
                          className="conversation-inner"
                          style={{
                            overflow: "hidden",
                            width: "auto",
                            height: "340px",
                          }}
                        >
                          <div class="conversation-item item-left clearfix">
                            <div class="conversation-user">
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                class="img-responsive"
                                alt=""
                              />
                            </div>
                            <div class="conversation-body">
                              <div class="name">Ryan Gossling</div>
                              <div class="time hidden-xs">
                                September 21, 2013 18:28
                              </div>
                              <div class="text">
                                I don't think they tried to market it to the
                                billionaire, spelunking, base-jumping crowd.
                              </div>
                            </div>
                          </div>
                          <div class="conversation-item item-right clearfix">
                            <div class="conversation-user">
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                class="img-responsive"
                                alt=""
                              />
                            </div>
                            <div class="conversation-body">
                              <div class="name">Mila Kunis</div>
                              <div class="time hidden-xs">
                                September 21, 2013 12:45
                              </div>
                              <div class="text">
                                Normally, both your asses would be dead as
                                fucking fried chicken, but you happen to pull
                                this shit while I'm in a transitional period so
                                I don't wanna kill you, I wanna help you.
                              </div>
                            </div>
                          </div>
                          <div class="conversation-item item-right clearfix">
                            <div class="conversation-user">
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                class="img-responsive"
                                alt=""
                              />
                            </div>
                            <div class="conversation-body">
                              <div class="name">Mila Kunis</div>
                              <div class="time hidden-xs">
                                September 21, 2013 12:45
                              </div>
                              <div class="text">
                                Normally, both your asses would be dead as
                                fucking fried chicken, but you happen to pull
                                this shit while I'm in a transitional period so
                                I don't wanna kill you, I wanna help you.
                              </div>
                            </div>
                          </div>
                          <div class="conversation-item item-left clearfix">
                            <div class="conversation-user">
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                class="img-responsive"
                                alt=""
                              />
                            </div>
                            <div class="conversation-body">
                              <div class="name">Ryan Gossling</div>
                              <div class="time hidden-xs">
                                September 21, 2013 18:28
                              </div>
                              <div class="text">
                                I don't think they tried to market it to the
                                billionaire, spelunking, base-jumping crowd.
                              </div>
                            </div>
                          </div>
                          <div class="conversation-item item-right clearfix">
                            <div class="conversation-user">
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                class="img-responsive"
                                alt=""
                              />
                            </div>
                            <div class="conversation-body">
                              <div class="name">Mila Kunis</div>
                              <div class="time hidden-xs">
                                September 21, 2013 12:45
                              </div>
                              <div class="text">
                                Normally, both your asses would be dead as
                                fucking fried chicken, but you happen to pull
                                this shit while I'm in a transitional period so
                                I don't wanna kill you, I wanna help you.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slimScrollBar"
                          style={{
                            width: "7px",
                            position: "absolute",
                            top: "0px",
                            opacity: "0.4",
                            display: "block",
                            borderRadius: "7px",
                            zIndex: "99",
                            right: "1px",
                            background: "rgb(0, 0, 0)",
                          }}
                        ></div>
                        <div
                          className="slimScrollRail"
                          style={{
                            width: "7px",
                            height: "100%",
                            position: "absolute",
                            top: "0px",
                            display: "none",
                            borderRadius: "7px",
                            opacity: "0.2",
                            zIndex: "90",
                            right: "1px",
                            background: "rgb(51, 51, 51)",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div class="conversation-new-message">
                      <form>
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            rows="2"
                            placeholder="Enter your message..."
                          ></textarea>
                        </div>

                        <div class="clearfix">
                          <button
                            type="submit"
                            class="btn btn-success pull-right text-white"
                          >
                            Send message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePersonnel;
