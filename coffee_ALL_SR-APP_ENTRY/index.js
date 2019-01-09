module.exports = async function (context, req) {
    context.res = {
        body: {
            "data": {
                "text": "Welcome to the Coffee Example",
                "tts": "Welcome!"
            }
        }
    };
};