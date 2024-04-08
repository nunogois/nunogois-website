import unleashImg from '../assets/logos/unleash.png'
import zoiImg from '../assets/logos/zoi.jpg'
import iqaImg from '../assets/logos/iqa.jpg'

export const EXPERIENCE = [
  {
    name: 'Unleash',
    image: unleashImg,
    url: 'https://www.getunleash.io/',
    role: 'Full Stack Developer (Senior)',
    date: '04/2022 - Current',
    description: `Contributed to Unleash, an open-source feature flag management solution with over 21M docker pulls, 10K stars on GitHub and a worldwide user base consisting of more than 100K monthly active end-users, from individual developers to large enterprise companies.
Assigned to the Enterprise Growth team, developed and often led the development of several key features for the product, including Service Accounts, Signals & Actions, Custom Root Roles, Groups, Personal Access Tokens (PATs), Login History, Multiple Project Roles, Environment Cloning, Tag Filtering, Network Visualization, Slack App, Banners, New Interactive Demo, and Search Filtering.
Contributed to Unleash Edge, a highly-performant successor to Unleash Proxy written in Rust that allows for a more flexible, performant, resilient and scalable architecture.
Integrated with Stripe for billing, involving multiple projects and third party integrations, enabling end-users to sign up and manage their paid plans through their Unleash instance.
Created, developed and maintained multiple SDKs for the product, including Vue.js, Svelte, Solid, and React Native.
Contributed with ideas and suggestions to the product roadmap, helping to shape the future of the product.
Collaborated closely with the UI/UX team to identify and implement numerous improvements and fixes that significantly enhanced the end-user experience.
Contributed to documentation, including the official docs and READMEs.
Refactored and improved the codebase, improving maintainability and overall DX.
Trained as Site Reliability Engineer (SRE) and performed on-call shifts to ensure platform availability and end-user satisfaction.
Consistently provided valuable feedback and code reviews to fellow developers, improving code quality and maintaining high standards for the codebase.
Shared knowledge and learned with teammates through pair and mob programming.`
  },
  {
    name: 'Zoi',
    image: zoiImg,
    url: 'https://en.zoi.tech/',
    role: 'Full Stack Developer (Specialist)',
    date: '06/2021 - 03/2022',
    description: `Assigned to Digital Innovations, worked close to partners as a developer in exploratory projects using innovative cloud solutions.
Developed a chatbot based on Google Cloud/Firebase, UI built with Quasar Framework (Vue.js) and a Google Cloud Function that acted as a bridge between the UI, Dialogflow CX (conversation flow, NLP), Contentful;
Contributed to a React Native app project by developing features and fixes for the app, used by hundreds of thousands of end-users.
Developed a mock package used internally for testing and debugging purposes, using Node.js, Express, Apollo GraphQL, MQTT.
Followed best-practices and guidelines, including writing Unit and E2E tests.
Worked on a dynamic multicultural team that follows an Agile/Scrum methodology.
Shared knowledge and learned with teammates through pair programming.`
  },
  {
    name: 'IQA - Sistemas de Gestão, Lda',
    image: iqaImg,
    url: 'https://www.myagir.com/en/',
    role: 'Full Stack Developer (Lead, Architect)',
    date: '03/2011 - 05/2021',
    description: `Developed AGIR ®, a Quality Management Software (QMS), Process Management (BPM) and Document control software. Worked on the platform since 2011: From ASP.NET, SQL Server, Web API, .NET WinForms or Java to Windows Services and Office Add-Ins, (...).
Created specific features that give this platform a unique edge in flexibility - features like an intuitive drag & drop Form Designer, a custom JavaScript framework (based on jQuery, later Vue) and a business logic assistant (workflow, form logic) mean that it is able to adapt to every customer need, providing infinite possibilities.
Worked close to the project manager and customers to ensure that every product meets requirements in a versatile, modern and performant way.
Helped customers on every step - Configuration, deployment, troubleshooting, etc.
Developed and provided APIs, tools and other custom mechanisms in order to adapt and integrate with existing solutions, databases and products.
One of those tools/integrations included creating an extremely optimised data matrix code scanner from TIFF files in Python, using tools like numpy, CV2, Wand, and more.
Developed a solid foundation for the company's next project, Wisibi, using Quasar Framework (Vue.js) and .NET Core Web API, following all the best practices.
Managed the team's Trello, GitHub, Jenkins and other services.
Shared knowledge with teammates through training.`
  }
]

export const INTERESTING_PROJECTS = [
  {
    name: 'Workflow Engine',
    description: `Created a custom workflow engine that allowed end-users with the right permissions to create custom workflows, 
    with several steps, approvals, permissions, routes, and more.`
  },
  {
    name: 'Form Designer (Absolute Position)',
    description: `Created a custom form designer, that works with the custom Workflow Engine, that allowed end-users 
    with the right permissions to create web forms, containing tabs and absolute positioned UI elements, by dragging and 
    dropping. Some of the elements were somewhat advanced, like tables, and would contain custom properties that could be configured.`
  },
  {
    name: 'Form Designer (Responsive Layout)',
    description: `Created a custom form designer that would replace the previous one, as a more modern and responsive option. 
    Users could still drag, drop and resize elements, but the layout would be responsive, following the typical "12 column" 
    grid layout.`
  },
  {
    name: 'Custom JavaScript Framework (jQuery abstraction)',
    description: `Created a custom JavaScript framework based / on top of jQuery to use along with the previous options. This added 
    infinite possibilities, along with customization and integration options. This framework was meant as a very easy-to-use 
    programming language for our own and also end-users with the right permissions, where most of what was needed could be accomplished using 
    its simple functions. The framework went through several iterations, and this also included maintaining its documentation accordingly.`
  },
  {
    name: 'Custom JavaScript Framework (Server-side / Scheduling)',
    description: `As an extension to the previous idea, we also wanted to run custom logic from a server / scheduled, cron-like, perspective.
    This used PhantomJS and Chrome headless along with a Windows Service to trigger our code based on configurable triggers.`
  },
  {
    name: 'Code / Logic Wizard',
    description: `Created a code / logic wizard, where end-users with no programming knowledge could easily configure their own logic.
    This included creating a very specific parser and code generator, and also included functions, conditions, and parameters.`
  },
  {
    name: 'PDF Text Extractor (OCR alternative)',
    description: `Created a PDF text extractor, where PDFs were converted to HTML in a specific way that allowed end-users to configure
    zones from where to grab text information. This could then be easily integrated with the previous projects, and proved a much faster
    and accessible alternative to OCR.`
  },
  {
    name: 'Legacy Custom File Format PDF Extraction',
    description: `Created a PDF extractor from a custom file format of a legacy app that was no longer maintained. It aggregated several files,
    including PDFs, which were required for our use-case. Had to evaluate bytes looking for file signatures without documentation as a guide,
    using the so-called "magic numbers" to identify when PDFs started and ended.`
  },
  {
    name: 'Data Matrix Code Scanner (Python Script)',
    description: `Created a data matrix code scanner script in Python. The codes were scanned from a very large volume of TIFF files, so it had
    to be extremely optimized. Besides managing the local files, it involved counting the percentage of yellow on the image (based on a configurable RGB range), 
    so that a correct amount of codes to be scanned could be calculated, in order to speed up the process significantly. Learned and used tools like 
    numpy, CV2, Wand, and more. It also involved querying data from a MySQL database and integrating everything with web-based APIs.`
  }
]
