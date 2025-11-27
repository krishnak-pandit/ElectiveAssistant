# ElectiveAssistant Repository Guide

## Moification from myAI3:
Changes made to the back-end:
•	Using gpt-4.1-mini instead of gpt-4.1
•	Messages, Interaction prompt to be more student oriented
•	Moderation changes to suit our use case

Changes made to the front-end:
•	Custom logo and favicon
•	Custom colors to the chat window
•	Custom placeholder texts

Changes were also made to the chunking and upserting scripts to handle faster upload of multiple files, deleting specific files and deleting all files. In the pinecone vector database.

Changes to Tool Calling Prompt:
•	In order to be as truthful as possible, call tools to gather context before answering.
•	Retrieve from the vector database only.
•	If answer is not found, donot search the web.

Changes to Tone Style Prompt:
•	If a student is struggling, break down concepts, employ simple language, and use metaphors when they help clarify complex ideas.
•	Be proactive in providing your suggestions based on student queries.
•	Give concise, factual guidance.
•	Avoid opinions unless clearly stated as student feedback from the dataset

Changes to Course Context Prompts:
•	Answer questions strictly using the BITSoM elective dataset (syllabi, reviews, difficulty, workload, skills, specialization mapping).
•	If information is missing, say: "I don't have this information in the dataset."
