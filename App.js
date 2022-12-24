
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
      
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render([heading1,heading2])