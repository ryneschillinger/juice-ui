import React from "react";
import Typography from "../core/Typography";

const OverviewAPI = props => {
  const { data, title, additionalText } = props;

  return (
    <div className="api-container">
      <Typography type="h4" style={{ marginTop: "4rem" }}>
        {title && title + ' '}
        API
      </Typography>
      {data.map((i, count) => (
        <div className="api-prop-container" key={count}>
          <div>
            <code className="api-prop-name">{i.prop}</code>
          </div>
          <div className="api-prop-type">{i.type}</div>

          <div className="api-prop-desc">{i.desc}</div>
        </div>
      ))}
      {additionalText && additionalText}
    </div>
  );
};

export default OverviewAPI;
