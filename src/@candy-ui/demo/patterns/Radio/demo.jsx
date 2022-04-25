import React from "react";
//import cx from "classnames";
import { HashLink } from "react-router-hash-link";
import { Label, RadioGroup, Icon } from "@blueprintjs/core";
import Radio from "../../../core/Radio";
import Typo from "../../../core/Typography";
import { SidebarContainer } from "../../components/SidebarContainer";
import { CustomScrollbar } from "../../components/CustomScrollbar";
import StyleGrid from "../../styles/style.module.css";
import { PatternListItem } from "../PatternListItem";
import { PatternLink } from "../PatternLink";
import styles from "../style.module.css";
import DemoAppStyle from "../../styles/style.module.css";

const DemoStart = props => {
  React.useEffect(() => {
    document.title = `React Design System 2.0 | Getting Started`;
    document.getElementsByTagName("META")[
      "description"
    ].content = `Ready-to-use React JS componentsfor save your time. Installation guide.`;
  });

  return (
    <div className={DemoAppStyle["content-container"]}>
      <div className={DemoAppStyle["content-component"]}>
        <Typo type="h3" className={styles.h4_title}>
          Radio Button
        </Typo>
        <Typo className={styles.text} type="body" large>
          With a radio button, users make a choice among a set of mutually exclusive, related options. Users can choose one and only one option. Radio buttons are so called because they function like the channel presets on radios.
        </Typo>
        <div className="pattern-example">
          <RadioGroup>
            <Radio
              type="def"
              color="primary"
              value="win"
              style={{ margin: "0.5rem" }}
              checked={true}
              label="Display as a link"
            />
            <Radio
              type="def"
              color="primary"
              value="lin"
              style={{ margin: "0.5rem" }}
              checked={false}
              label="Display as a menu"
            />
            <Radio
              type="def"
              color="primary"
              value="and"
              style={{ margin: "0.5rem" }}
              checked={false}
              label="Don't display this item"
            />
          </RadioGroup>
        </div>
        <Typo className={styles.text} style={{ marginBottom: "1rem" }} type="body" large>
          A group of radio buttons behaves like a single control. Only the selected choice is accessible using the Tab key, but users can cycle through the group using the arrow keys.
        </Typo>

        {/* Is this the right control to use? */}
        <div id="rightControl">
          <Typo type="h5" colorStep={80} className={styles.sub_title}>
            Is this the right control to use?
          </Typo>
          <Typo className={styles.text}>
            To decide, consider these questions:
            <ul>
              <PatternListItem
                title="Is the control used to choose one option from a set of mutually exclusive choices?"
              >
                If not, use another control. To choose multiple options, use
                <PatternLink
                  url="/components/checkbox"
                  text="checkboxes"
                />
                or a 
                <PatternLink
                  url="/components/select-multi"
                  text="multi-select"
                />
                instead.
              </PatternListItem>
              <PatternListItem title="Is the number of options between two and seven?">
                Since the screen space used is proportional to the number of options, keep the number of options in a group between two and seven. For eight or more options, use a
                <PatternLink
                  url="/components/select-default"
                  text="select list"
                />
                .
              </PatternListItem>
            </ul>
          </Typo>
        </div>

        {/* Guidelines */}
        <div id="guidelines">
          <Typo type="h5" colorStep={80} className={styles.sub_title}>
            Guidelines
          </Typo>
          {/* General */}
          <Typo type="h6" colorStep={60} className={styles.sub_title}>
            General
          </Typo>
          <Typo className={styles.text}>
            <ul>
              <PatternListItem title="List the options in a logical order,">
                such as most likely to be selected to least, simplest operation to most complex, or least risk to most. Alphabetical ordering is not recommended because it is language dependent and therefore not localizable.
              </PatternListItem>
              <PatternListItem title="If none of the options is a valid choice, add another option to reflect this choice,">
                such as None or Does not apply.
              </PatternListItem>
              <PatternListItem title="Reconsider using group boxes to organize groups of radio buttons.">
                This often results in unnecessary screen clutter.
              </PatternListItem>
              <PatternListItem title="Don't use radio button labels as group box labels." />
              <PatternListItem title="Don't use the selection of a radio button to:">
                <ul>
                  <li>Perform commands.</li>
                  <li>Display other windows, such as a dialog box to gather more input.</li>
                  <li>Dynamically show or hide other controls related to the selected control (screen readers cannot detect such events). However, you can change text dynamically based on the selection.</li>
                </ul>
              </PatternListItem>
            </ul>
          </Typo>
          {/* Subordinate Controls */}
          <Typo type="h6" colorStep={60} className={styles.sub_title}>
            Subordinate Controls
          </Typo>
          <Typo className={styles.text}>
            <ul>
              <PatternListItem>
                <p>Place subordinate controls to the right of or below (indented, flush with the radio button label) the radio button and its label. End the radio button label with a colon.</p>
                <p>In this example, the radio button and its subordinate control share the radio button label and its access key. In this case, the arrow keys move focus from the radio button to its subordinate text box.</p>
              </PatternListItem>
              <PatternListItem
                title="Leave dependent editable text boxes and drop-down lists enabled if they share the radio button's label."
              >
                <p>When users type or paste anything into the box, select the corresponding option automatically. Doing so simplifies the interaction.</p>
                <p>In this example, entering a page number automatically selects Pages.</p>
              </PatternListItem>
              <PatternListItem title="Avoid nesting radio buttons with other radio buttons or check boxes.">
                <p>If possible, keep all the options at the same level.</p>
                <div style={{ margin: "1rem 0 0.5rem 0" }}>
                  <Icon icon="tick" iconSize={20} color="var(--green50)" />
                  <strong> Correct:</strong>
                </div>
                <div className="pattern-example-correct">
                  <RadioGroup>
                    <Radio
                      type="def"
                      color="primary"
                      value="win"
                      style={{ margin: "0.5rem" }}
                      checked={false}
                      label="Let Internet Explorer determine how pop-ups should open"
                    />
                    <Radio
                      type="def"
                      color="primary"
                      value="lin"
                      style={{ margin: "0.5rem" }}
                      checked={true}
                      label="Always open pop-ups in a new window"
                    />
                    <Radio
                      type="def"
                      color="primary"
                      value="and"
                      style={{ margin: "0.5rem" }}
                      checked={false}
                      label="Always open pop-ups in a new tab"
                    />
                  </RadioGroup>
                </div>
                <p>In this example, the options are at the same level.</p>
                <div style={{ margin: "1rem 0 0.5rem 0" }}>
                  <Icon icon="cross" iconSize={20} color="var(--red50)" />
                  <strong> Incorrect:</strong>
                </div>
                <div className="pattern-example-incorrect">
                  <RadioGroup>
                    <Radio
                      type="def"
                      color="primary"
                      value="win"
                      style={{ margin: "0.5rem" }}
                      checked={false}
                      label="Let Internet Explorer determine how pop-ups should open"
                    />
                    <Radio
                      type="def"
                      color="primary"
                      value="lin"
                      style={{ margin: "0.5rem" }}
                      checked={true}
                      label="Always open pop-ups:"
                    />
                    <div style={{paddingLeft: "1rem"}}>
                      <Radio
                        type="def"
                        color="primary"
                        value="and"
                        style={{ margin: "0.5rem" }}
                        checked={false}
                        label="In a new window"
                      />
                      <Radio
                        type="def"
                        color="primary"
                        value="and"
                        style={{ margin: "0.5rem" }}
                        checked={false}
                        label="In a new tab"
                      />
                    </div>
                  </RadioGroup>
                </div>
                <p>In this example, using nested options adds unnecessary complexity.</p>
              </PatternListItem>
              <PatternListItem>
                If you do nest radio buttons with other radio buttons or check boxes, <strong>disable these subordinate controls until the high-level option is selected</strong>. Doing so avoids confusion about the meaning of the subordinate controls.
              </PatternListItem>
            </ul>
          </Typo>
        </div>

        {/* Labels */}
        <div id="labels">
          <Typo type="h5" colorStep={80} className={styles.sub_title}>
            Labels
          </Typo>
          <Typo className={styles.text}>
            To decide, consider these questions:
            <ul>
              <PatternListItem
                title="Is the control used to choose one option from a set of mutually exclusive choices?"
              >
                If not, use another control. To choose multiple options, use
                <PatternLink
                  url="/components/checkbox"
                  text="checkboxes"
                />
                or a 
                <PatternLink
                  url="/components/select-multi"
                  text="multi-select"
                />
                instead.
              </PatternListItem>
              <PatternListItem
                title="Is the number of options between two and seven?"
              >
                Since the screen space used is proportional to the number of options, keep the number of options in a group between two and seven. For eight or more options, use a
                <PatternLink
                  url="/components/select-default"
                  text="select list"
                />
                .
              </PatternListItem>
            </ul>
          </Typo>
        </div>

        {/* Documentation */}
        <div id="documentation">
          <Typo type="h5" colorStep={80} className={styles.sub_title}>
            Documentation
          </Typo>
          <Typo className={styles.text}>
            To decide, consider these questions:
            <ul>
              <PatternListItem
                title="Is the control used to choose one option from a set of mutually exclusive choices?"
              >
                If not, use another control. To choose multiple options, use
                <PatternLink
                  url="/components/checkbox"
                  text="checkboxes"
                />
                or a 
                <PatternLink
                  url="/components/select-multi"
                  text="multi-select"
                />
                instead.
              </PatternListItem>
              <PatternListItem
                title="Is the number of options between two and seven?"
              >
                Since the screen space used is proportional to the number of options, keep the number of options in a group between two and seven. For eight or more options, use a
                <PatternLink
                  url="/components/select-default"
                  text="select list"
                />
                .
              </PatternListItem>
            </ul>
          </Typo>
        </div>

      </div>

      {/* Props*/}
      <SidebarContainer>
        <div className={DemoAppStyle["right_sidebar"]}>
          <CustomScrollbar
            autoHide
            autoHideTimeout={2000}
            hideTracksWhenNotNeeded
            renderThumbHorizontal={() => {
              return <div />;
            }}
            renderTrackHorizontal={() => <div />}
          >
            <div className={StyleGrid["demo-props"]}>
              <Label>In this section:</Label>
              <HashLink to="#rightControl" className={styles.sidebarLink}>
                Is this the right control to use?
              </HashLink>
              <HashLink to="#guidelines" className={styles.sidebarLink}>
                Guidelines
              </HashLink>
              <HashLink to="#labels" className={styles.sidebarLink}>
                Labels
              </HashLink>
              <HashLink to="#documentation" className={styles.sidebarLink}>
                Documentation
              </HashLink>
            </div>
          </CustomScrollbar>
        </div>
      </SidebarContainer>
      {/***** */}
    </div>
  );
};

export default DemoStart;
