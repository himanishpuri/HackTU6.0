import "./Time.css";
import { timelineElements } from "./timelineElements";

function TimeLineTwoo() {
  const workIconStyles = { background: "#06D6A0" };
  const schoolIconStyles = { background: "#f9c74f" };

  return (
    <div className="timeline-container">
      {/* <h1 className="title">Timeline</h1> */}
      <div className="timeline">
        {timelineElements.map((element) => {
          const isWorkIcon = element.icon === "work";
          const showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <div className="timeline-element" key={element.key}>
              <div
                className="timeline-icon"
                style={isWorkIcon ? workIconStyles : schoolIconStyles}
              >
                {/* Icon could be text or an image */}
                {/* {isWorkIcon ? "" : ""} */}
              </div>
              <div className="timeline-content">
                <div className="flex justify-between">
                  <h3 className="timeline-title">{element.title} </h3>
                  <h3 className="px-7">{element.time}</h3>
                </div>
                {/* <h5 className="timeline-subtitle"></h5> */}
                <p className="timeline-description">{element.description}</p>
                {showButton && (
                  <a
                    className={`button ${
                      isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                    href="/"
                  >
                    {element.buttonText}
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TimeLineTwoo;
