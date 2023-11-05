module.exports = {
    openapi: "3.0.0",
    info: {
        title: "Backend By Karthik",
        version: "1.0.0",
        description:
            "Note :this is the common end point- http://localhost:4000/api/tasks for Create Task use these end point mention (post) method , send data format with in Schemas (Task)",
    },
    servers: [
        {
            url: "http://localhost:4000",
            description: "Local development server",
        },
    ],
    components: {
        schemas: {
            Task: {
                type: "object",
                properties: {
                    title: {
                        type: "string",
                        description: "The title of the task.",
                    },
                    description: {
                        type: "string",
                        description: "The description of the task.",
                    },
                },
            },
        },
    },
};
