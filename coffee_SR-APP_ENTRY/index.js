module.exports = async function (context, req) {
    

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            "data": {
                "text": "Welcome to the Coffee Example",
                "tts": "Welcome!"
            }
        }
    };

};