module.exports = async function (context, req) {
    context.res = {
        body: {
            "data": {
                "systemResponse": ["APP_ENTRY"],
                "clientData": ["PRICE"]
            }
        }
    };
};