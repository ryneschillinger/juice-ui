import React from "react";

import { Classes, H3 } from "@blueprintjs/core";

export const TabsData = [
  {
    id: 1,
    icon: "globe-network",
    title: "React",
    panel: (
      <div>
        <H3 style={{ textAlign: "left" }}>React</H3>
        <p className={Classes.RUNNING_TEXT}>
          Lots of people use React as the V in MVC. Since React makes no
          assumptions about the rest of your technology stack, it's easy to try
          it out on a small feature in an existing project.
        </p>
      </div>
    ),
    visible: true
  },
  {
    id: 2,
    icon: "shield",
    title: "Angular",
    panel: (
      <div>
        <H3 style={{ textAlign: "left" }}>Angular</H3>
        <p className={Classes.RUNNING_TEXT}>
          HTML is great for declaring static documents, but it falters when we
          try to use it for declaring dynamic views in web-applications.
          AngularJS lets you extend HTML vocabulary for your application. The
          resulting environment is extraordinarily expressive, readable, and
          quick to develop.
        </p>
      </div>
    ),
    visible: true
  },
  {
    id: 3,
    icon: "flame",
    title: "Ember",
    panel: (
      <div>
        <H3 style={{ textAlign: "left" }}>Ember</H3>
        <p className={Classes.RUNNING_TEXT}>
          Ember.js is an open-source JavaScript application framework, based on the
          model-view-controller (MVC) pattern. It allows developers to create
          scalable single-page web applications by incorporating common idioms and
          best practices into the framework. What is your favorite JS framework?
        </p>
      </div>
    ),
    visible: true
  },
  {
    id: 4,
    icon: "cube",
    title: "Vue",
    panel: null,
    visible: true,
    disabled: true
  }
];
