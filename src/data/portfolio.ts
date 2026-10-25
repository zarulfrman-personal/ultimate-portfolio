import type { ImageMetadata } from 'astro';
import characterSelection from '../assets/flyingthingscharacterselection.png';
import gameplayGif from '../assets/flyingthingsgameplaygif.gif';
import gameplayVideo from '../assets/flyingthingsgameplaymp4.mp4';
import resumePdf from '../assets/ResumeA4-TengkuZarulLT.pdf';
import carbonReport from '../assets/Data Science Technical Report.pdf';
import shuttleReport from '../assets/ShuttleAide Technical Report.pdf';
import shuttleLogo from '../assets/shuttle-aide-logo.png';
import shuttleThumbnail from '../assets/shuttleaide-thumbnail.png';
import shuttleCircuit from '../assets/shuttleaide-iot-circuit-diagram.png';
import shuttleArchitecture from '../assets/shuttleaide-system-architecture.png';
import shuttleMobileOne from '../assets/shuttleaide-mobile-ss-1.png';
import shuttleMobileTwo from '../assets/shuttleaide-mobile-ss-2.png';
import shuttleMobileThree from '../assets/shuttleaide-mobile-ss-3.png';
import shuttleMobileFour from '../assets/shuttleaide-mobile-ss-4.png';
import shuttleVideoOne from '../assets/shuttleaide-video-1.mp4';
import shuttleVideoTwo from '../assets/shuttleaide-video-2.mp4';
import fileCloudThumbnail from '../assets/file-server-cloud-system-thumbnail.jpg';
import carbonThumbnail from '../assets/carbon-emission-thumbnail.jpg';
import movieReviewThumbnail from '../assets/movie-review-thumbnail.jpg';
import movieReviewAnalysisWords from '../assets/movie-review-python-1.png';
import movieReviewAnalysisSentiment from '../assets/movie-review-python-2.png';
import movieReviewDataCleaning from '../assets/movie-review-python-3.png';
import movieReviewImplementation from '../assets/movie-review-python-4.png';

export const portfolio = {
	name: 'Tengku Zarul Fariman',
	role: 'Full-stack developer / Software engineer',
	introduction:
		"This is my take on a different portfolio concept. You can look at it as a retail website that showcases my work. You can add these projects to cart, but you cant really checkout. Have fun exploring around!",
	email: 'zarulfariman@gmail.com',
	location: 'Penang, Malaysia',
	availability: 'Open to opportunities',
	website: 'https://example.com',
	github: 'https://github.com/zarulfrman-personal',
	linkedin: 'https://www.linkedin.com/in/tengku-zarul/',
	resumePath: resumePdf,
	resumeAvailable: true,
};

export interface Project {
	slug: string;
	title: string;
	category: string;
	contextLabel: string;
	description: string;
	tools: string[];
	color: string;
	mark: string;
	featured: boolean;
	price: number;
	previewImage: ImageMetadata | null;
	previewAnimation: ImageMetadata | null;
	previewAlt: string;
	gallery: { image: ImageMetadata; alt: string; caption: string }[];
	videos: { src: string; poster?: string; title: string; caption: string }[];
	documents: { title: string; src: string }[];
	links: { label: string; href: string }[];
	context: string;
	approach: string;
	visualHeading: string;
	visualSubheading: string;
}

export const projects: Project[] = [
	{
		slug: 'shuttle-aide',
		title: 'ShuttleAide',
		category: 'Connected mobility',
		contextLabel: 'Final-year project · team of 2',
		description:
			'A campus shuttle companion created for the campus of International Islamic University Malaysia, Gombak connecting a Flutter app, live GPS hardware, and Firebase to make bus journeys easier to follow.',
		tools: ['Flutter', 'Dart', 'Arduino', 'ESP32', 'Firebase'],
		color: 'blue',
		mark: '01',
		featured: true,
		price: 0,
		previewImage: shuttleThumbnail,
		previewAnimation: null,
		previewAlt: 'ShuttleAide logo above a collage of mobile app screens',
		gallery: [
			{ image: shuttleLogo, alt: 'ShuttleAide project logo', caption: 'The ShuttleAide identity' },
			{ image: shuttleMobileOne, alt: 'ShuttleAide tracking screen presented in a phone mockup', caption: 'Live shuttle tracking' },
			{ image: shuttleMobileTwo, alt: 'ShuttleAide map screen presented in a phone mockup', caption: 'Explore the campus map' },
			{ image: shuttleMobileThree, alt: 'ShuttleAide bus details presented in a phone mockup', caption: 'Bus details and arrival information' },
			{ image: shuttleMobileFour, alt: 'ShuttleAide schedule screen presented in a phone mockup', caption: 'Shuttle schedules' },
			{ image: shuttleCircuit, alt: 'ESP32 and GPS module circuit diagram', caption: 'GPS hardware setup' },
			{ image: shuttleArchitecture, alt: 'ShuttleAide system architecture diagram', caption: 'App, cloud, and device architecture' },
		],
		videos: [
			{
				src: shuttleVideoOne,
				title: 'ShuttleAide in use',
				caption: 'A real-world look at the app on a phone.',
			},
			{
				src: shuttleVideoTwo,
				title: 'Map and bus tracking',
				caption: 'A screen recording of the ETA and moving bus feature.',
			},
		],
		links: [
			{ label: 'View the project on GitHub', href: 'https://github.com/zarulfrman-personal/ShuttleAide_FYP/tree/main' },
		],
		documents: [{ title: 'ShuttleAide Technical Report', src: shuttleReport }],
		context:
			'ShuttleAide explores how a campus shuttle service can make its transport information easier to access. The mobile app brings bus tracking, schedules, and service announcements together, with GPS hardware sending location data through Firebase.',
		approach:
			'The system connects GPS hardware to Firebase and a Flutter app. An ESP32 and GPS module collect location data, which is sent to the cloud and surfaced in the app alongside shuttle schedules and service updates.',
		visualHeading: 'On the move',
		visualSubheading: 'A connected campus shuttle experience',
	},
	{
		slug: 'flying-things',
		title: 'Flying Things',
		category: 'Game development',
		contextLabel: 'Academic project · group project',
		description:
			'A Java game inspired by Flappy Bird, with a cast of selectable flyers and a sky full of obstacles.',
		tools: ['Java', 'Greenfoot'],
		color: 'orange',
		mark: '02',
		featured: false,
		price: 0,
		previewImage: characterSelection,
		previewAnimation: gameplayGif,
		previewAlt: 'Looping gameplay from Flying Things',
		gallery: [
			{ image: characterSelection, alt: 'Flying Things character selection screen', caption: 'Pick a character before takeoff' },
		],
		videos: [
			{
				src: gameplayVideo,
				poster: characterSelection.src,
				title: 'Flying Things gameplay',
				caption: 'Choose a flyer, avoid the birds, and dodge the eggs.',
			},
		],
		documents: [],
		links: [
			{ label: 'View the project on GitHub', href: 'https://github.com/zarulfrman-personal/FlyingThings_JavaGameProjectGreenfoot' },
		],
		context:
			'Flying Things is a group-built academic game inspired by Flappy Bird. The project adds character choice to the familiar flying-and-dodging loop: players can take to the sky as a rocket, witch, or superhero.',
		approach:
			'Built in Java with Greenfoot, the game combines character selection with flying movement and obstacle avoidance. Players choose a rocket, witch, or superhero before navigating the sky.',
		visualHeading: 'Choose your flyer',
		visualSubheading: 'A little arcade energy, built in Java',
	},
	{
		slug: 'file-cloud-server-system',
		title: 'File Cloud Server System',
		category: 'Software systems',
		contextLabel: 'Independent project',
		description:
			'A cloud-hosted server concept for requesting files from on-premise clients tucked inside private networks.',
		tools: ['Node.js'],
		color: 'violet',
		mark: '03',
		featured: false,
		price: 0,
		previewImage: fileCloudThumbnail,
		previewAnimation: null,
		previewAlt: 'File transfer in progress on a cloud server',
		gallery: [],
		videos: [],
		documents: [],
		links: [],
		context:
			'The project looks at a practical networking challenge: a central cloud server needs to request files from clients, such as restaurant systems, that operate inside private local networks and are not directly reachable from the public internet.',
		approach:
			'The Node.js project explores a server-and-client setup for requesting files across private networks. It includes documentation describing how to use the system and get it running.',
		visualHeading: 'A server, many clients',
		visualSubheading: 'File access across private networks',
	},
	{
		slug: 'movie-review-sentiment',
		title: 'Movie Review Sentiment Analysis',
		category: 'Machine learning',
		contextLabel: 'Academic project · group project',
		description:
			'A comparison of Logistic Regression and Naive Bayes for classifying IMDB reviews as positive or negative.',
		tools: ['Python', 'Google Colab', 'IMDB dataset', 'Logistic Regression', 'Naive Bayes'],
		color: 'green',
		mark: '04',
		featured: false,
		price: 0,
		previewImage: movieReviewThumbnail,
		previewAnimation: null,
		previewAlt: 'A collage of movie posters for the movie review analysis project',
		gallery: [
			{ image: movieReviewAnalysisWords, alt: 'Bar chart of the most commonly used words in movie reviews', caption: 'Data analysis · Most commonly used words' },
			{ image: movieReviewAnalysisSentiment, alt: 'Bar chart showing the balanced positive and negative sentiment classes', caption: 'Data analysis · Sentiment class distribution' },
			{ image: movieReviewDataCleaning, alt: 'Python code cleaning and preprocessing movie review text', caption: 'Data cleaning · Text preprocessing' },
			{ image: movieReviewImplementation, alt: 'Python example predicting sentiment with Logistic Regression and Naive Bayes', caption: 'Implementation · Sentiment prediction example' },
		],
		videos: [],
		documents: [],
		links: [
			{
				label: 'Open the Google Colab notebook',
				href: 'https://colab.research.google.com/drive/1YeLShOWTSWO2u4Wb-9gSceWOfo5586MH?usp=sharing',
			},
		],
		context:
			'This group project uses movie reviews from the IMDB dataset to explore whether natural-language feedback can be sorted into positive and negative sentiment.',
		approach:
			'The team combined text preprocessing with two classification approaches: Logistic Regression and Naive Bayes. The reported test accuracy was 87.14% for Logistic Regression and 84.8% for Naive Bayes.',
		visualHeading: 'Reading between the lines',
		visualSubheading: 'Two models, one movie-review dataset',
	},
	{
		slug: 'carbon-emissions-and-temperature',
		title: 'Carbon Emissions & Global Temperature',
		category: 'Data science',
		contextLabel: 'Academic project · group of 5',
		description:
			'An analysis of historical emissions and temperature anomalies, with statistical exploration and predictive modelling.',
		tools: ['Python', 'Google Colab', 'XGBoost', 'CO₂ dataset', 'Model training and testing'],
		color: 'red',
		mark: '05',
		featured: false,
		price: 0,
		previewImage: carbonThumbnail,
		previewAnimation: null,
		previewAlt: 'Industrial emissions rising from a waterfront facility',
		gallery: [],
		videos: [],
		documents: [{ title: 'Data Science Technical Report', src: carbonReport }],
		links: [],
		context:
			'Using a dataset covering 1980–2021, the project examines emissions by source, energy production, and regional temperature anomalies to investigate how these measures relate over time.',
		approach:
			'The analysis uses Pearson correlation to examine relationships between emissions and temperature anomalies, then applies XGBoost to model future temperature anomalies based on historical and regional data.',
		visualHeading: 'Signals in the climate data',
		visualSubheading: 'Exploring emissions and temperature patterns',
	},
];
