import React from "react";
//import cx from "classnames";
import { HashLink } from "react-router-hash-link";
import { Label, RadioGroup, Icon } from "@blueprintjs/core";
import Radio from "../../../core/Radio";
import CheckBox from "../../../core/CheckBox";
import Callout from "../../../core/Callout";
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
        <div className={styles.patternExample}>
          <RadioGroup>
            <Radio
              type="def"
              color="primary"
              value="link"
              checked={true}
              label="Display as a link"
            />
            <Radio
              type="def"
              color="primary"
              value="menu"
              checked={false}
              label="Display as a menu"
            />
            <Radio
              type="def"
              color="primary"
              value="dont"
              checked={false}
              label="Don't display this item"
            />
          </RadioGroup>
        </div>
        <Typo className={styles.patternExampleCaption}>
          A typical group of radio buttons.
        </Typo>
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
              <PatternListItem title="Would a checkbox be a better choice?">
                If there are only two options, you could use a single 
                <PatternLink
                  url="/components/checkbox"
                  text="checkbox"
                />
                instead. However, checkboxes are suitable only for turning a single option on or off, whereas radio buttons can be used for completely different alternatives. If both solutions are possible:
                <ul className={styles.nestedList}>
                  <li>
                    Use radio buttons if the meaning of the cleared checkbox isn't immediately obvious.
                    <div style={{ margin: "1rem 0 0.5rem 0" }}>
                      <Icon icon="cross" iconSize={20} color="var(--red50)" />
                      <strong> Incorrect:</strong>
                    </div>
                    <div className={styles.patternExampleIncorrect}>
                      <CheckBox
                        type="def"
                        color="primary"
                        view="flat"
                        checked={false}
                        label="Landscape"
                      />
                    </div>
                    <div style={{ margin: "1rem 0 0.5rem 0" }}>
                      <Icon icon="tick" iconSize={20} color="var(--green50)" />
                      <strong> Correct:</strong>
                    </div>
                    <div className={styles.patternExampleCorrect}>
                      <RadioGroup>
                        <Radio
                          type="def"
                          color="primary"
                          value="landscape"
                          checked={true}
                          label="Landscape"
                        />
                        <Radio
                          type="def"
                          color="primary"
                          value="portrait"
                          checked={false}
                          label="Portrait"
                        />
                      </RadioGroup>
                    </div>
                    <Typo className={styles.patternExampleCaption}>
                      In the correct example, the choices are not opposites so radio buttons are the better choice.
                    </Typo>
                  </li>
                  <li>
                    Use radio buttons on wizard pages to make the alternatives clear, even if a checkbox is otherwise acceptable.
                  </li>
                  <li>
                    Use radio buttons if you have enough screen space and the options are important enough to be a good use of that screen space. Otherwise, use a checkbox or drop-down list.
                    <div style={{ margin: "1rem 0 0.5rem 0" }}>
                      <Icon icon="cross" iconSize={20} color="var(--red50)" />
                      <strong> Incorrect:</strong>
                    </div>
                    <div className={styles.patternExampleIncorrect}>
                      <RadioGroup>
                        <Radio
                          type="def"
                          color="primary"
                          value="show"
                          checked={true}
                          label="Show this message again"
                        />
                        <Radio
                          type="def"
                          color="primary"
                          value="dont"
                          checked={false}
                          label="Don't show this message again"
                        />
                      </RadioGroup>
                    </div>
                    <Typo className={styles.patternExampleCaption}>
                      In this example, the options aren't important enough to use radio buttons.
                    </Typo>
                    <div style={{ margin: "1rem 0 0.5rem 0" }}>
                      <Icon icon="tick" iconSize={20} color="var(--green50)" />
                      <strong> Correct:</strong>
                    </div>
                    <div className={styles.patternExampleCorrect}>
                      <CheckBox
                        type="def"
                        color="primary"
                        view="flat"
                        checked={false}
                        label="Don't show this message again"
                      />
                    </div>
                    <Typo className={styles.patternExampleCaption}>
                      In this example, a checkbox is an efficient use of screen space for this peripheral option.
                    </Typo>
                  </li>
                  <li>
                    Use a checkbox if there other checkboxes on the page.
                  </li>
                </ul>
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
              <PatternListItem title="Avoid nesting radio buttons with other radio buttons or checkboxes.">
                <p>If possible, keep all the options at the same level.</p>
                <div style={{ margin: "1rem 0 0.5rem 0" }}>
                  <Icon icon="tick" iconSize={20} color="var(--green50)" />
                  <strong> Correct:</strong>
                </div>
                <div className={styles.patternExampleCorrect}>
                  <RadioGroup>
                    <Radio
                      type="def"
                      color="primary"
                      value="win"
                      checked={false}
                      label="Let Internet Explorer determine how pop-ups should open"
                    />
                    <Radio
                      type="def"
                      color="primary"
                      value="lin"
                      checked={false}
                      label="Always open pop-ups in a new window"
                    />
                    <Radio
                      type="def"
                      color="primary"
                      value="and"
                      checked={true}
                      label="Always open pop-ups in a new tab"
                    />
                  </RadioGroup>
                </div>
                <Typo className={styles.patternExampleCaption}>
                  In this example, the options are at the same level.
                </Typo>
                <div style={{ margin: "1rem 0 0.5rem 0" }}>
                  <Icon icon="cross" iconSize={20} color="var(--red50)" />
                  <strong> Incorrect:</strong>
                </div>
                <div className={styles.patternExampleIncorrect}>
                  <RadioGroup>
                    <Radio
                      type="def"
                      color="primary"
                      value="win"
                      checked={false}
                      label="Let Internet Explorer determine how pop-ups should open"
                    />
                    <Radio
                      type="def"
                      color="primary"
                      value="lin"
                      checked={true}
                      label="Always open pop-ups:"
                    />
                    <div style={{paddingLeft: "1rem"}}>
                      <Radio
                        type="def"
                        color="primary"
                        value="and"
                        checked={false}
                        label="In a new window"
                      />
                      <Radio
                        type="def"
                        color="primary"
                        value="and"
                        checked={true}
                        label="In a new tab"
                      />
                    </div>
                  </RadioGroup>
                </div>
                <Typo className={styles.patternExampleCaption}>
                  In this example, using nested options adds unnecessary complexity.
                </Typo>
              </PatternListItem>
              <PatternListItem>
                If you do nest radio buttons with other radio buttons or checkboxes, <strong>disable these subordinate controls until the high-level option is selected</strong>. Doing so avoids confusion about the meaning of the subordinate controls.
              </PatternListItem>
            </ul>
          </Typo>
          {/* Default values */}
          <Typo type="h6" colorStep={60} className={styles.sub_title}>
            Default values
          </Typo>
          <Typo className={styles.text}>
            <ul>
              <PatternListItem>
                Because a group of radio buttons represents a set of mutually exclusive choices, <strong>always have one radio button selected by default. Select the safest (to prevent loss of data or system access) and most secure and private option.</strong> If safety and security aren't factors, select the most likely or convenient option.
              </PatternListItem>
              <PatternListItem title="Exceptions:">
                Don't have a default selection if:
                <ul className={styles.nestedList}>
                  <PatternListItem
                    title="There is no acceptable default option for safety, security, or legal reasons and therefore the user must make an explicit choice."
                  >
                    If the user doesn't make a selection, display an error message to force one.
                  </PatternListItem>
                  <PatternListItem
                    title="The user interface (UI) must reflect the current state and the option hasn't been set yet."
                  >
                    A default value would incorrectly imply that the user doesn't need to make a selection.
                  </PatternListItem>
                  <PatternListItem title="The goal is to collect unbiased data.">
                    Default values would bias data collection.
                  </PatternListItem>
                  <PatternListItem
                    title="The group of radio buttons represents a property in a mixed state"
                  >
                    which happens when displaying a property for multiple objects that don't have the same setting. Don't display an error message in this case since each object has a valid state.
                  </PatternListItem>
                  <PatternListItem title="Make the first option the default option,">
                    since users often expect that—unless that order isn't logical. To do this, you might need to change the option labels.
                    <div style={{ margin: "1rem 0 0.5rem 0" }}>
                      <Icon icon="cross" iconSize={20} color="var(--red50)" />
                      <strong> Incorrect:</strong>
                    </div>
                    <div className={styles.patternExampleIncorrect}>
                      <RadioGroup label="Apply policy:">
                        <Radio
                          type="def"
                          color="primary"
                          value="now"
                          checked={false}
                          label="Now"
                        />
                        <Radio
                          type="def"
                          color="primary"
                          value="later"
                          checked={true}
                          label="Later"
                        />
                      </RadioGroup>
                    </div>
                    <Typo className={styles.patternExampleCaption}>
                      In this example, the default option isn't the first option.
                    </Typo>
                    <div style={{ margin: "1rem 0 0.5rem 0" }}>
                      <Icon icon="tick" iconSize={20} color="var(--green50)" />
                      <strong> Correct:</strong>
                    </div>
                    <div className={styles.patternExampleCorrect}>
                      <RadioGroup label="Policy:">
                        <Radio
                          type="def"
                          color="primary"
                          value="later"
                          checked={true}
                          label="Apply later"
                        />
                        <Radio
                          type="def"
                          color="primary"
                          value="now"
                          checked={false}
                          label="Apply now"
                        />
                      </RadioGroup>
                    </div>
                    <Typo className={styles.patternExampleCaption}>
                      In this example, the option labels are reworded to make the first option the default option.
                    </Typo>
                  </PatternListItem>
                </ul>
              </PatternListItem>
            </ul>
          </Typo>
        </div>

        {/* Labels */}
        <div id="labels">
          <Typo type="h5" colorStep={80} className={styles.sub_title}>
            Labels
          </Typo>
          {/* Radio button labels */}
          <Typo type="h6" colorStep={60} className={styles.sub_title}>
            Radio button labels
          </Typo>
          <Typo className={styles.text}>
            <ul>
              <PatternListItem>
                Label every radio button.
              </PatternListItem>
              <PatternListItem>
                Use sentence-style capitalization.
              </PatternListItem>
              <PatternListItem>
                Write the label as a phrase, not as a sentence, and use no ending punctuation.
                <ul className={styles.nestedList}>
                  <PatternListItem title="Exception:">
                    If a radio button label also labels a subordinate control that follows it, end the label with a colon.
                  </PatternListItem>
                </ul>
              </PatternListItem>
              <PatternListItem>
                Use parallel phrasing, and try to keep the length about the same for all labels.
              </PatternListItem>
              <PatternListItem>
                Focus the label text on the differences among the options. If all the options have the same introductory text, move that text to the group label.
              </PatternListItem>
              <PatternListItem>
                Use positive phrasing. For example, use do instead of do not, and print instead of do not print.
              </PatternListItem>
              <PatternListItem>
                Describe just the option with the label. Keep labels brief so it's easy to refer to them in messages and documentation. If the option requires further explanation, provide the explanation in helper text using complete sentences and ending punctuation.
                <div className={styles.patternExample}>
                  <RadioGroup>
                    <Radio
                      type="def"
                      color="primary"
                      value="on"
                      checked={true}
                      label="On (recommended)"
                      helperText="This setting blocks all outside sources from connecting to this computer."
                    />
                    <Radio
                      type="def"
                      color="primary"
                      value="off"
                      checked={false}
                      label="Off"
                      helperText="Turning off firewall will make this computer more vulnerable to hackers."
                    />
                  </RadioGroup>
                </div>
                <Typo className={styles.patternExampleCaption}>
                  In this example, the options are explained using separate static text controls.
                </Typo>
                <Callout
                  type="def"
                  view="smooth"
                  color="primary"
                  icon="info-sign"
                  title="Note"
                > 
                  Adding an explanation to one radio button doesn't mean that you have to provide explanations for all the radio buttons. Provide the relevant information in the label if you can, and use explanations only when necessary. Don't merely restate the label for consistency.
                </Callout>
              </PatternListItem>
              <PatternListItem
                title='If an option is strongly recommended, add "(recommended)" to the label.'
              >
                Be sure to add to the control label, not the supplemental notes.
              </PatternListItem>
              <PatternListItem
                title='If an option is intended only for advanced users, add "(advanced)" to the label.'
              >
                Be sure to add to the control label, not the supplemental notes.
              </PatternListItem>
              <PatternListItem>
                If you must use multi-line labels, align the top of the label with the radio button.
              </PatternListItem>
              <PatternListItem>
                Don't use a subordinate control, the values it contains, or its units label to create a sentence or phrase. Such a design isn't localizable because sentence structure varies with language.
              </PatternListItem>
            </ul>
          </Typo>
          {/* Radio button group labels */}
          <Typo type="h6" colorStep={60} className={styles.sub_title}>
            Radio button group labels
          </Typo>
          <Typo className={styles.text}>
            <ul>
              <PatternListItem>
                Use the group label to explain the purpose of the group, not how to make the selection. Assume that users know how to use radio buttons. For example, don't say "Select one of the following choices".
              </PatternListItem>
              <PatternListItem>
                <p>
                  All radio button groups need labels. Write the label as a word or phrase, not as a sentence, ending with a colon using static text or a group box
                </p>
                <p>
                  <strong>Exception:</strong> Omit the label if it is merely a restatement of a dialog box's main instruction. In this case, the main instruction takes the colon (unless it's a question) and access key (if there is one).
                </p>
                <div style={{ margin: "1rem 0 0.5rem 0" }}>
                  <strong>Acceptable:</strong>
                </div>
                <div className={styles.patternExample}>
                  <RadioGroup label="Select an alignment">
                    <p>Alignment:</p>
                    <Radio
                      type="def"
                      color="primary"
                      value="left"
                      checked={true}
                      label="Align left"
                    />
                    <Radio
                      type="def"
                      color="primary"
                      value="center"
                      checked={false}
                      label="Center"
                    />
                    <Radio
                      type="def"
                      color="primary"
                      value="right"
                      checked={false}
                      label="Align right"
                    />
                  </RadioGroup>
                </div>
                <Typo className={styles.patternExampleCaption}>
                  In this example, the radio button group label is just a restatement of the main instruction.
                </Typo>
                <div style={{ margin: "1rem 0 0.5rem 0" }}>
                  <strong>Better:</strong>
                </div>
                <div className={styles.patternExample}>
                  <RadioGroup label="Select an alignment:">
                    <Radio
                      type="def"
                      color="primary"
                      value="left"
                      checked={true}
                      label="Align left"
                    />
                    <Radio
                      type="def"
                      color="primary"
                      value="center"
                      checked={false}
                      label="Center"
                    />
                    <Radio
                      type="def"
                      color="primary"
                      value="right"
                      checked={false}
                      label="Align right"
                    />
                  </RadioGroup>
                </div>
                <Typo className={styles.patternExampleCaption}>
                  In this example, the redundant label is removed, so the main instruction takes the colon.
                </Typo>
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
            When referring to radio buttons:
            <ul>
              <PatternListItem>
                Use the exact label text, including its capitalization, but don't include the access key underscore or colon.
              </PatternListItem>
              <PatternListItem>
                In programming and other technical documentation, refer to radio buttons as radio buttons. Everywhere else use option buttons, especially in user documentation.
              </PatternListItem>
              <PatternListItem>
                To describe user interaction, use click.
              </PatternListItem>
              <PatternListItem>
                When possible, format the label using bold text. Otherwise, put the label in quotation marks only if required to prevent confusion.
              </PatternListItem>
            </ul>
          </Typo>
          <Typo className={styles.text}>
            Example: Click <strong>Current page</strong>, and then click <strong>OK</strong>.
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
