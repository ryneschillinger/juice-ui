import React from "react";
import { Icon } from "@blueprintjs/core";
import Button from "../core/Button";
import Toaster from "../core/Toast/Toaster.jsx";
import OverviewAPI from "./OverviewAPI.jsx";

export const Overview = props => {
  const { overview, apidata, code, title } = props;

  const [toastRef, setRef] = React.useState(null);

  /**Success toast */
  const SuccessToast = {
    message: "Copied to clipboard",
    timeout: 2000,
    icon: <Icon icon="tick" iconSize={24} />
  };

  /**Copy function */
  const copyToClipboard = source => {
    const textField = document.createElement("textarea");
    textField.innerHTML = source.replace(/<[^>]+>/g, '');
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy") && toastRef.show(SuccessToast);
    textField.remove();
  };

  /**Page content */
  const data = [
    {
      id: 1,
      panel: (
        <div className="source-code-block">
          <Button
            dense={true}
            view="filled"
            color="default"
            icon="duplicate"
            text="COPY"
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              fontSize: "0.75rem",
              fontWeight: "bold",
              zIndex: 10
            }}
            onClick={() => copyToClipboard(code)}
          />
          <Toaster
            view="filled"
            color="success"
            usePortal={false}
            position="bottom" //bottom, bottom-left, bottom-right
            setRef={setRef}
            withoutClose={true}
          />
          <pre>
            <code 
              dangerouslySetInnerHTML={{
                __html: code
              }}
            />
          </pre>
        </div>
      ),
      visible: true
    },
    {
      id: 2,
      panel: overview,
      visible: true
    },
    {
      id: 3,
      panel: <OverviewAPI title={title} data={apidata} />,
      visible: true
    }
  ];

  return (
    <div style={{ paddingLeft: "0.25rem" }}>
      {data.map((i) => {
        return i.panel
      })}
    </div>
  );
};
