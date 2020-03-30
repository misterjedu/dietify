import React from "react";

import Lady from "../../img/lady.jpg";
import Icon1 from "../../img/icon-1.svg";
import Icon2 from "../../img/icon-2.svg";
import Icon3 from "../../img/icon-3.svg";
import Running from "../../img/run.png";

const HomePage = function() {
  return (
    <div>
      {/* Section One */}
      <div className="section-one">
        <div className="container">
          <img src={Lady} alt="" />
          <div>
            <h1>Get Fit, Lose Weight and Eat Healthy</h1>
            <p>
              Have you been trying to lose weight, stay healthy and fit, but do
              not know how to go about it?   This is the perfect solution
              created to help you all the way to achieve your goals
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </div>

      {/* Section two */}

      <div className="section-two">
        <div className="container">
          <h2>Check your Status</h2>
          <form>
            <label>
              Height
              <input placeholder="cm" type="number" name="height" />
            </label>
            <label>
              Weight
              <input placeholder="kg" type="number" name="weight" />
            </label>
            <label>
              Age
              <input placeholder="years" type="number" name="age" />
            </label>
            <label>
              Gender
              <select>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
          </form>
          <button>Calculate</button>
        </div>
      </div>

      {/* Section three */}
      <div className="section-three">
        <div className="container">
          <h2>Why do you need Dietify</h2>
          <p>
            Loosing weight is hard. There are lots of calculations involved. We
            have made it easier for you.
          </p>
          <div className="card-wrapper">
            <div className=" card-container">
              <img src={Icon1} alt="" />
              <h3 className="card-title">Weight Monitoring</h3>
              <p className="card-content">
                Keep track of your weight and get a weekly report on how you are
                doing and progress.  This keeps you focused on your goal and
                spur you to do right thing and the right time
              </p>
            </div>
            <div className=" card-container">
              <img src={Icon2} alt="" />
              <h3 className="card-title">Calorie Tracking</h3>
              <p className="card-content">
                To stay healthy, you need to know the exact calaries you are
                taking, and the calories you need to either maintain or lose
                weight.   It is difficult to know all these yourself, and that
                is why this platform was built
              </p>
            </div>
            <div className=" card-container">
              <img src={Icon3} alt="" />
              <h3 className="card-title">Nutrient Tracking</h3>
              <p className="card-content">
                Do you really know if you are taking the right amount of
                proteins and carbohydrates everyday?   You can now track
                nutrients and their quantiy in the foods you consume daily.
              </p>
            </div>

            <div className=" card-container">
              <img src={Icon1} alt="" />
              <h3 className="card-title">Diet Plan</h3>
              <p className="card-content">
                You can now plan exactly what you need to eat and in what
                quantity in order to maintain a healthy lifestyle. The heavy
                lifting has been done and all you need to do is to use it for
                your benefit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Four */}

      <div className="section-four">
        <div className="container">
          <img src={Running} alt="" />
          <div>
            <h3>Don't joke with your health. Get in and get in shape</h3>
            <button>Create an Account</button>
          </div>
        </div>
      </div>

      {/* End of Div */}
    </div>
  );
};

export default HomePage;
