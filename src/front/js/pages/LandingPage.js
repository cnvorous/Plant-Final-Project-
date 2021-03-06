import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState(store.profile);

  useEffect(() => {
    if (store.profile.length !== 2) {
      setProfile(store.profile);
    }
  }, [store.profile]);

  return (
    <div className="landing-body">
      <div className="top-banner d-flex justify-content-center">
        <div className="top-banner-box1 m-auto">
          <div className="text-center">
            <img
              className="seed-logo"
              src="https://us.123rf.com/450wm/nad1992/nad19921601/nad1992160100010/50559166-abstract-leafs-care-vector-logo-icon-eco-icon-with-green-leaf-.jpg"
            />
          </div>
          <div className="text-center">
            <span className="webname">Leaf it to Us</span>
          </div>
        </div>
        <div className="top-banner-box2 d-sm-inline-flex">
          {" "}
          {/*m-auto */}
          <div>
            {profile.length > 0 ? (
              <div>
                {store.profile.map((item, index) => {
                  return <span>Logged-in as: {item.email}</span>;
                })}
              </div> //need the colon for tenr. expression
            ) : (
              <div>
                <Link to="/createaccount">
                  <span className="create-link">Hello, Create Account</span>
                </Link>
                <div className="row">
                  {" "}
                  {/* added row and input-sm, col-xs-3  didnt work */}
                  <div className="form-floating mb-3 col-xs-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control input-sm"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Login Email</label>
                  </div>
                </div>
                <div className="row">
                  {" "}
                  <div className="form-floating col-xs-3">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key == "Enter") {
                          actions.login(email, password);
                        }
                      }}
                      className="form-control input-sm"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                </div>
                <div>
                  <Link to="/forgotpassword">
                    <span className="text-center forgot-link">
                      Forgot Password??
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mb-5">
        <span className="heading-text-2">
          Our site is dedicated to helping users find a streamline way of
          keeping your plants not just healthy but thriving.
        </span>
        <div className="d-flex justify-content-center">
          <div className="row row-cols-3">
            <div className="col icon-image-1">
              <div className="middle">
                <div>
                  <p className="image-text">
                    We've all been gulity of showing our plants to much love and
                    giving them more then what they need.
                    <br></br>
                    <br></br>
                    Our site will help you effortlessly make sure your plants are watered &
                    fertilized at the most optimal time while using the correct measurements.
                  </p>
                </div>
              </div>
            </div>
            <div className="col icon-image-2">
              <div className="middle">
                <div>
                  <p className="image-text-group">
                    You can track growth stages of your plants and gain helpful tips
                    to maximize their potential.
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    Feel free to share you Green Thumb tips.
                  </p>
                </div>
              </div>
            </div>
            <div className="col icon-image-3">
              <div className="middle">
                <div>
                  <p className="image-text-group">
                    Not sure where to start ... thats ok we have you covered.
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    Just <Link to="/searchplantdata"><span className="link">CLICK HERE</span></Link>
                    <br></br>
                    and search plants by size, height and light options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
