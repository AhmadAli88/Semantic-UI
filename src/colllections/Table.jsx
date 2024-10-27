import React from "react";

const Table = () => {
  return (
    <div>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Name">James</td>
            <td data-label="Age">24</td>
            <td data-label="Job">Engineer</td>
          </tr>
          <tr>
            <td data-label="Name">Jill</td>
            <td data-label="Age">26</td>
            <td data-label="Job">Engineer</td>
          </tr>
          <tr>
            <td data-label="Name">Elyse</td>
            <td data-label="Age">24</td>
            <td data-label="Job">Designer</td>
          </tr>
        </tbody>
        <tfoot>
    <tr><th colspan="5">
      <div className="ui right floated pagination menu">
        <a className="icon item">
          <i className="left chevron icon"></i>
        </a>
        <a className="item">1</a>
        <a className="item">2</a>
        <a className="item">3</a>
        <a className="item">4</a>
        <a className="icon item">
          <i className="right chevron icon"></i>
        </a>
      </div>
    </th>
  </tr></tfoot>
      </table>
      <table className="ui selectable celled table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>No Action</td>
      <td>None</td>
    </tr>
    <tr>
      <td>Jamie</td>
      <td>Approved</td>
      <td>Requires call</td>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Denied</td>
      <td>None</td>
    </tr>
    <tr className="warning">
      <td>John</td>
      <td>No Action</td>
      <td>None</td>
    </tr>
    <tr>
      <td>Jamie</td>
      <td className="positive">Approved</td>
      <td className="warning">Requires call</td>
    </tr>
    <tr>
      <td>Jill</td>
      <td className="negative">Denied</td>
      <td>None</td>
    </tr>
  </tbody>
</table>
<table className="ui selectable inverted table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
      <th className="right aligned">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>Approved</td>
      <td className="right aligned">None</td>
    </tr>
    <tr>
      <td>Jamie</td>
      <td>Approved</td>
      <td className="right aligned">Requires call</td>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Denied</td>
      <td className="right aligned">None</td>
    </tr>
  </tbody>
</table>
    </div>
  );
};

export default Table;
