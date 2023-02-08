
      const heading1 = React.createElement(
        "h1",
        {
          title: "react heading 1",
        },
        "React Heading 1"
      );
      
      const heading2 = React.createElement(
        "h2",
        {
          title: "react heading 2",
        },
        "React Heading 2"
      );

      const container = React.createElement(
        "div",
        {
          id:"container", //  props, which can be anything,
          hello :"world"
        },
        [heading1,heading2]
      )
      // webpack is one of the bundlers - production ready app
      //vite , parcel all are bundlers
      //we will make use of parcel
      //create-react app uses webpack

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(container)