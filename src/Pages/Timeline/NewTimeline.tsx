import timelineElements from "./timelineElements";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function NewTimeline() {
	return (
		<div className="font-sans text-center">
			<VerticalTimeline lineColor={"#64a443"}>
				{timelineElements.map((element) => (
					<VerticalTimelineElement
						key={element.key}
						className="vertical-timeline-element--work"
						contentStyle={{ background: "#183249", color: "#E4E4E4" }}
						date={element.time}
						dateClassName="font-tilt_warp"
						iconStyle={{ background: "#64a443", color: "#fff" }}
						shadowSize={"medium"}
					>
						<h1 className="vertical-timeline-element-title text-2xl font-tilt_warp">
							{element.title}
						</h1>
						<p className="text-[#A0BED3] font-space_grotesx">
							{element.description}
						</p>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</div>
	);
}
