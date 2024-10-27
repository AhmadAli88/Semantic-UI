import React from "react";

const Checkbox = () => {
  return (
    <div>
      <div className="ui checkbox">
        <input type="checkbox" name="example" />
        <label>Make my profile visible</label>
      </div>
      <div className="ui radio checkbox">
        <input type="radio" name="radio" checked="checked" />
        <label>Radio choice</label>
      </div>
      <div className="ui form">
        <div className="inline fields">
          <label>How often do you use checkboxes?</label>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="frequency" checked="checked" />
              <label>Once a week</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="frequency" />
              <label>2-3 times a week</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="frequency" />
              <label>Once a day</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="frequency" />
              <label>Twice a day</label>
            </div>
          </div>
        </div>
      </div>
      <div className="ui form">
        <div className="grouped fields">
          <label>How often do you use checkboxes?</label>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="example2" checked="checked" />
              <label>Once a week</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="example2" />
              <label>2-3 times a week</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="example2" />
              <label>Once a day</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="example2" />
              <label>Twice a day</label>
            </div>
          </div>
        </div>
      </div>
      <div className="ui slider checkbox">
        <input type="checkbox" name="newsletter" />
        <label>Accept terms and conditions</label>
      </div>
      <div className="ui toggle checkbox">
  <input type="checkbox" name="public"/>
  <label>Subscribe to weekly newsletter</label>
</div>
    </div>
  );
};

export default Checkbox;
