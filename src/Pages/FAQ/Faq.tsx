import HeaderText from "@/components/ui/HeaderText";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqData: {
	question: string;
	answer: string;
}[] = [
	{
		question: "What is a Hackathon?",
		answer:
			"A hackathon is an event, usually hosted by a tech company or organization, where programmers get together for a short period of time to collaborate on a project (usually a website or an app).",
	},
	{
		question: "Who all are eligible to participate?",
		answer: "Any student pursuing a college degree can participate.",
	},
	{
		question: "It is my first hackathon, what's something I should know?",
		answer:
			"Hackathons aren't just about winning (though that's always exciting!); they're incredible opportunities to network and connect with like-minded people (many of our community core members first met at hackathons). Whether you win or lose, you're guaranteed to learn something valuable. Approach it with a mindset of growth and discovery, and we promise you'll have a great time! 😁",
	},
	{
		question: "What is the Round 0 / Checkpoint 0?",
		answer:
			"Round 0 is the preliminary round for this hackathon, where participants are required to submit a PowerPoint presentation (PPT) outlining their idea or solution. The evaluation of these submissions will determine eligibility for offline participation in the hackathon.",
	},
	{
		question: "Where and how do I submit my PPT for Round 0?",
		answer:
			"You can submit your PPT for Round 0 by visiting https://submit.ccstiet.com/. Follow the instructions on the portal to upload your submission before the deadline, i.e. 20 January 2025, 11:59 p.m. Ensure your file meets the required guidelines for successful submission.",
	},
	{
		question: "Where is it being held?",
		answer:
			"HackTU 6.0 is a Physical Hackathon. You will have to attend the hackathon in offline mode at Thapar Institute of Engineering and Technology, Patiala, Punjab. Necessary information will be provided to participants through their registered mail.",
	},
	{
		question: "Can we participate individually?",
		answer:
			"No, we firmly believe in the power of collaborative learning and encourage participants to form teams (2-5). Join forces, amplify your skills, and embark on a collective journey of innovation at our upcoming event!",
	},
	{
		question: "Will there be food arrangements?",
		answer:
			"We've got you covered with delicious meals and refreshing treats to keep your energy high throughout the event. Your sustenance is as important to us as your creativity! Rest assured, your well-being is our priority.",
	},
	{
		question:
			"I've already applied but my application status is still pending",
		answer:
			"Be patient, we've got so many registrations, we are still in the process of accepting teams, just hold on for some time.",
	},
	{
		question:
			"Can I use a project that was previously built for a hackathon?",
		answer:
			"No, you cannot use a project that was previously built. All hackathon projects must be created from scratch during the event's timeline to ensure fairness and creativity. Additionally, all participants must comply with the MLH Code of Conduct to maintain a positive and inclusive environment.",
	},
	{
		question: "What if I feel sleepy during the Hackathon?",
		answer:
			"We will try our best to have engaging activities at every hour but just incase you lose it all, we'll have you covered with special resting zones. Otherwise feel free to have a quick nap at your desk 💤",
	},
	{
		question: "Curious about something else?",
		answer: `Contact us at:
      +91 9878953052
      +91 6006654241
      support@ccstiet.com`,
	},
];

const Faq = () => {
	return (
		<div
			id="faqs"
			className="py-10 px-10"
		>
			<HeaderText text="FAQ's" />
			<Accordion
				type="single"
				collapsible
				className="w-full max-w-3xl mx-auto mt-5 text-white"
			>
				{faqData.map((faq, index) => (
					<AccordionItem
						key={index}
						value={`item-${index + 1}`}
					>
						<AccordionTrigger className=" hover:text-green-200 hover:no-underline hover:scale-[1.01]">
							{faq.question}
						</AccordionTrigger>
						<AccordionContent>{faq.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>

			{/* Styles */}
		</div>
	);
};

export default Faq;
