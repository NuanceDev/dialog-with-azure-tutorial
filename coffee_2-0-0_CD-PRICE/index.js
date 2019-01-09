module.exports = async function (context, req) {

    // SPECIAL PROMOTION!
    // All coffee types and sizes at only 1$
    context.res = {
        body: {
            "data": [{
                "value": 1
            }]
        }
    };
};