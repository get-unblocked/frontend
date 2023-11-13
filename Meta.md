## Tasks/Bugs/Issues:
### Open Issues:
- [Bug: Frontend Login doesn't support CSRP](https://tryunblocked.atlassian.net/browse/TU-16)
- [Feature: Backend Auth service doesn't support two-factor auth](https://tryunblocked.atlassian.net/browse/TU-15)

### Done Issues:
- [Populate the demo app with data frontend backend](https://tryunblocked.atlassian.net/browse/TU-13)
- [Do security audit of storage service/posgres](https://tryunblocked.atlassian.net/browse/TU-12)
- [Backend Feature: Implement the latest version of Auth0 in the Auth service](https://tryunblocked.atlassian.net/browse/TU-8)

## Recent changes in the app
### Frontend
- We added iOS + Android apps
### Backend
- We added Auth0 support

## About Try Unblocked (our app)

- Try Unblocked is a demonstration application that showcases the capabilities of Unblocked for developers. It offers a comprehensive experience, combining various technologies and platforms to deliver a feature-rich application. Here's a breakdown of its primary components:

### Frontend
- Marketing Site: The marketing website for "Try Unblocked" is built on WordPress, a popular content management system. It serves as the platform for promoting the application to potential users.
- Web App UI: The web-based user interface of "Try Unblocked" is developed using Deno and Fresh. Deno is a runtime for JavaScript and TypeScript, and Fresh is a Deno web framework. These technologies are employed to create an engaging and responsive web interface.
- Mobile Apps: The application includes mobile versions for both iOS (Swift) and Android (Kotlin), ensuring a seamless user experience across platforms.

### Backend
- Authentication Service: The Auth service is responsible for user authentication and authorization and leverages Auth0, a robust identity platform.
- Storage Service: The Storage service interacts with a PostgreSQL database over a REST API, managing data storage and retrieval. It handles user-generated content and other essential data.
- Notification Service: The Notification service utilizes Firebase for delivering various types of notifications, including email and push notifications.
- Integrations: Try Unblocked seamlessly integrates with various tools, enhancing its functionality.

### Integrations
- Jira: Unblocked can reference knowledge and discussions from your Jira Projects to answer questions asked in Unblocked. This is achieved by connecting your Jira site to Unblocked, selecting the projects you want Unblocked to access, and saving your settings. This integration allows Unblocked to provide insights based on your project's history and discussions.
- Confluence: Unblocked can also integrate with Confluence. This allows Unblocked to pull in data from your Confluence documents and use it to provide more accurate answers to your questions. The integration process is similar to that of Jira, involving connecting your Confluence site to Unblocked and selecting the spaces you want Unblocked to access.
- Slack: Unblocked provides first-class support for Slack. Unblocked utilizes discussions from selected Slack channels to answer questions posed by you and your team. This means that the knowledge shared in your Slack channels becomes part of the knowledge base that Unblocked uses to provide answers. You gain access to Unbot, the Unblocked Slackbot, which automatically chimes in when it detects a question it can answer.
- Notion: Unblocked's integration with Notion allows it to reference knowledge from your Notion workspace. This is achieved by connecting your Notion workspace to Unblocked. Once connected, Unblocked can access the content from your Notion workspace to provide more comprehensive answers to your questions. This integration allows Unblocked to provide insights based on your project's documentation and discussions stored in Notion.
- Linear: Unblocked can also integrate with Linear. By connecting your Linear workspace to Unblocked, it can reference the knowledge and content from your Linear workspace to answer questions. This includes information about your project's tasks, issues, and progress. This integration allows Unblocked to provide insights based on your project's history and discussions in Linear.
- Stack Overflow for Teams: Unblocked's integration with Stack Overflow for Teams allows it to reference knowledge and discussions from your Stack Overflow Team to answer questions asked in Unblocked. (Note: This integration is under development and not yet functional). This will be achieved by connecting your Stack Overflow Team to Unblocked, and once operational, Unblocked will access the content from your Stack Overflow Team to provide more comprehensive answers to your questions. This integration will allow Unblocked to provide insights based on your project's discussions and Q&A stored in Stack Overflow for Teams.

###Infrastructure
- Docker Containers: Our services are hosted in Docker containers, ensuring scalability, flexibility, and ease of deployment. This allows us to manage our infrastructure efficiently.
- AWS Integration: The application's infrastructure is hosted on Amazon Web Services (AWS), providing reliable cloud computing resources. AWS SageMaker powers various aspects of "Try Unblocked," including new Auth and Identity services, Notification services, and machine learning (ML) services.